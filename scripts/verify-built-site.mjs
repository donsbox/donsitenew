import assert from "node:assert/strict";
import { readdir, readFile, stat } from "node:fs/promises";
import { resolve, join } from "node:path";

const root = resolve("dist");
const origin = process.env.SITE_URL ? new URL(process.env.SITE_URL).origin : undefined;
const routes = ["/", "/en/", "/projects/", "/en/projects/", "/projects/relay/", "/en/projects/relay/", "/projects/aiinvest/", "/en/projects/aiinvest/"];
const routeFile = path => join(root, path, "index.html");
const html = new Map(await Promise.all(routes.map(async path => [path, await readFile(routeFile(path), "utf8")])));
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value.replaceAll("&amp;", "&")]));
const tags = (text, name) => [...text.matchAll(new RegExp("<" + name + "\\b[^>]*>", "g"))].map(match => attrs(match[0]));
const meta = (text, key) => tags(text, "meta").find(tag => tag.name === key || tag.property === key)?.content;
const alternate = (text, lang) => tags(text, "link").find(tag => tag.rel === "alternate" && tag.hreflang === lang)?.href;
const canonical = text => tags(text, "link").find(tag => tag.rel === "canonical")?.href;
const forbidden = /Bible Vector|Bible Reference|Pelosi Trade|Senior Software Engineer|your-email@example\.com|camiloplaza3|techtim42\.bai\.uno|E-commerce Firm|\/avatar\.jpg|shttps:/i;

const titles = new Set();
const descriptions = new Set();
for (const [route, content] of html) {
  const en = route.startsWith("/en/");
  const lang = en ? "en" : "zh-CN";
  assert.match(content, new RegExp('<html lang="' + lang + '"'), route + ": document language");
  assert.equal([...content.matchAll(/<h1\b/g)].length, 1, route + ": exactly one primary heading");
  assert.ok(!forbidden.test(content), route + ": no template or placeholder content");
  assert.ok(!content.includes("mailto:"), route + ": no unconfirmed email");
  const title = content.match(/<title>([^<]+)<\/title>/)?.[1];
  assert.ok(title?.includes("Don"), route + ": page title");
  assert.ok(!titles.has(title), route + ": unique title");
  titles.add(title);
  const description = meta(content, "description");
  assert.ok(description?.length > 25, route + ": useful description");
  assert.ok(!descriptions.has(description), route + ": unique description");
  descriptions.add(description);
  assert.equal(meta(content, "author"), "Don");
  assert.equal(meta(content, "robots"), origin ? "index, follow" : "noindex, nofollow");

  const jsonLd = JSON.parse(content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] ?? "null");
  assert.equal(jsonLd?.about?.name, "Don", route + ": structured identity");
  assert.equal(jsonLd?.inLanguage, lang);
  assert.ok(!jsonLd?.author, route + ": do not infer project authorship");
  const otherPath = en ? route.replace(/^\/en\//, "/") : "/en" + route;
  assert.ok(tags(content, "a").some(tag => tag.href === otherPath && tag.hreflang === (en ? "zh-CN" : "en")), route + ": matching language switch");
  if (origin) {
    assert.equal(canonical(content), origin + route);
    assert.equal(meta(content, "og:url"), origin + route);
    assert.equal(alternate(content, lang), origin + route);
    assert.equal(alternate(content, en ? "zh-CN" : "en"), origin + otherPath);
    assert.equal(alternate(content, "x-default"), origin + (en ? otherPath : route));
    assert.equal(meta(content, "og:image"), origin + "/og-card.png");
  } else {
    assert.equal(canonical(content), undefined, route + ": no invented canonical");
    assert.equal(meta(content, "og:url"), undefined);
    assert.equal(alternate(content, "en"), undefined);
  }

  const listing = ["/", "/en/", "/projects/", "/en/projects/"].includes(route);
  if (listing) {
    const ids = [...content.matchAll(/data-project-id="([^"]+)"/g)].map(match => match[1]);
    assert.deepEqual(ids, ["relay", "aiinvest"], route + ": collection feeds the two real cases in order");
  } else {
    const revision = route.includes("/relay/") ? "c2c2db85af18a9367d3b1b3b04956e43361e6b25" : "4de152caf98d7b0de5ade2f47d3583b6ff312a1f";
    assert.ok(content.includes("/tree/" + revision), route + ": pinned snapshot link");
    assert.ok(content.includes("/blob/" + revision + "/"), route + ": pinned source links");
    assert.ok(content.includes(en ? "Individual responsibilities" : "个人职责"), route + ": contribution boundary");
    assert.ok(content.includes(en ? "Still unverified" : "尚待验证"), route + ": capability boundary");
  }

  // Resolve every local link, asset and fragment against the built output.
  for (const tag of [...tags(content, "a"), ...tags(content, "link"), ...tags(content, "script"), ...tags(content, "img")]) {
    const value = tag.href ?? tag.src;
    if (!value || /^(https?:|data:|mailto:)/.test(value)) continue;
    const url = new URL(value, "https://local.invalid" + route);
    const path = decodeURIComponent(url.pathname);
    const target = path.endsWith("/") ? routeFile(path) : join(root, path);
    assert.ok((await stat(target).catch(() => null))?.isFile(), route + ": missing local target " + value);
    if (url.hash) {
      const targetHtml = await readFile(target, "utf8");
      assert.ok(targetHtml.includes('id="' + decodeURIComponent(url.hash.slice(1)) + '"'), route + ": missing fragment " + value);
    }
  }
}

async function files(dir) {
  return (await Promise.all((await readdir(dir, { withFileTypes: true })).map(entry => entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)]))).flat();
}
const actualHtml = (await files(root)).filter(file => file.endsWith(".html")).sort();
assert.deepEqual(actualHtml, [...routes.map(routeFile), join(root, "404.html")].sort(), "No orphaned template routes may be generated");
const notFound = await readFile(join(root, "404.html"), "utf8");
assert.equal(meta(notFound, "robots"), "noindex, nofollow");
assert.equal(canonical(notFound), undefined);

const robots = await readFile(join(root, "robots.txt"), "utf8");
const sitemap = await readFile(join(root, "sitemap.xml"), "utf8");
if (origin) {
  assert.ok(robots.includes("Sitemap: " + origin + "/sitemap.xml"));
  assert.ok(robots.includes("Allow: /"));
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]).sort();
  assert.deepEqual(locations, routes.map(path => origin + path).sort());
} else {
  assert.equal(robots, "User-agent: *\nDisallow: /\n");
  assert.ok(!sitemap.includes("<loc>"), "No fabricated sitemap URLs");
}
const png = await readFile(join(root, "og-card.png"));
assert.equal(png.readUInt32BE(16), 1200);
assert.equal(png.readUInt32BE(20), 630);
console.log("Verified 8 bilingual pages, collection-backed listings, evidence boundaries, local links, metadata, robots, sitemap and OG image.");
