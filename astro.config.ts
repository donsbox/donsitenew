import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// A production origin is optional until its ownership is confirmed.
// Without SITE_URL, pages omit canonical/OG URLs and are marked noindex.
const site = process.env.SITE_URL;
if (site) {
  const url = new URL(site);
  if (!["https:", "http:"].includes(url.protocol) || url.username || url.password || url.pathname !== "/" || url.search || url.hash) {
    throw new Error("SITE_URL must be an HTTP(S) origin, without a path, credentials, query or fragment.");
  }
}

export default defineConfig({
  site,
  trailingSlash: "always",
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    mdx(),
  ],
});
