import type { APIRoute } from "astro";
import { getProjects } from "../lib/projects";
import { homePath, projectsPath, projectPath, languages } from "../lib/i18n";

const escapeXml = (value: string) => value.replace(/[<>&"']/g, char => ({
  "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;",
}[char]!));

export const GET: APIRoute = async ({ site }) => {
  const paths: string[] = [];
  for (const lang of languages) {
    paths.push(homePath(lang), projectsPath(lang), ...(await getProjects(lang)).map(entry => projectPath(lang, entry.data.projectId)));
  }
  const urls = site ? paths.map(path => `<url><loc>${escapeXml(new URL(path, site).href)}</loc></url>`).join("") : "";
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
