import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const body = site
    ? `User-agent: *\nAllow: /\nDisallow: /404.html\nSitemap: ${new URL("/sitemap.xml", site).href}\n`
    : "User-agent: *\nDisallow: /\n";
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
