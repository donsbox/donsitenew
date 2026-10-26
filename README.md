# Don · AI Product Portfolio

An Astro portfolio with Chinese and English case studies grounded in repository evidence.

## Local development

Use Node.js 22 and the repository’s pinned pnpm 8.15.5:

~~~bash
corepack pnpm@8.15.5 install --frozen-lockfile
corepack pnpm@8.15.5 dev
~~~

Open http://localhost:4321/. Chinese is at /; English is at /en/.

## Build and verify

~~~bash
corepack pnpm@8.15.5 build
corepack pnpm@8.15.5 verify
corepack pnpm@8.15.5 typecheck
~~~

The build produces eight portfolio pages and a noindex 404 page. Verification checks real project listings, both languages, evidence boundaries, local links and fragments, unique metadata, robots, sitemap and the social image. The typecheck command generates Astro collection types before running TypeScript, so it also works on a fresh checkout.

SITE_URL is a **build environment variable**, configured in the shell or hosting provider. Its value must be the confirmed HTTP(S) origin, without a path, query or credentials. No production domain or deployment is assumed.

Without SITE_URL, the output is a noindex preview with no canonical / OG page URLs and an empty sitemap. After confirming the real production origin, supply it to both build and verification commands. The CI uses a reserved .invalid origin only to test URL generation; it is not a site address.

The existing Vercel and Netlify configuration files describe build settings only. Their presence does not prove that a site is deployed.

## Content loading

- src/content/profileData.ts: personal information and localized introduction; **no project or work-history arrays**.
- src/content/projects/*.mdx: the sole content source for project cards, lists and detail pages.
- src/lib/projects.ts: collection loading, ordering, translation consistency and pinned source links.
- src/content/config.ts: required evidence, maturity and locale fields.
- src/components/sections/Projects.astro: shared homepage and project-index renderer.
- src/layouts/MDXLayout.astro: project details, delivery / validation boundaries and source references.
- src/lib/i18n.ts: localized routes and UI copy.

Each project needs exactly one zh-CN entry and one en entry with the same projectId. Shared evidence fields and source paths must agree; the build fails on missing or duplicate translations.

Routes:

| Chinese | English |
| --- | --- |
| / | /en/ |
| /projects/ | /en/projects/ |
| /projects/relay/ | /en/projects/relay/ |
| /projects/aiinvest/ | /en/projects/aiinvest/ |

Unowned template projects, employment histories, posts and reading records were removed together with their routes. Old example URLs return the host’s normal 404 rather than redirecting unrelated third-party work to Don’s cases.

## Case evidence and outstanding information

RELAY is a source-code prototype in donsbox/aitnt (access restricted). AIinvest is a public specification and engineering-baseline repository. Neither case claims a verified live launch or measured user outcomes.

See [the content audit](docs/CONTENT_AUDIT.md) for snapshot SHAs, evidence interpretation and remaining confirmations. Before adding biographical detail, confirm the public contact address, employment dates, individual responsibilities, collaborators and any measured results.

## Assets and attribution

The favicon and social card are authored for this portfolio; no template portrait, icon or third-party project screenshot is reused. To regenerate public/og-card.png from its SVG source, run:

~~~bash
node scripts/generate-og.mjs
~~~

This repository adapts [Tech Tim’s Astro Bento Portfolio](https://github.com/tim-hub/techtim-astro-bento-portfolio). The original [MIT notice](LICENSE) is preserved. Template attribution is separate from Don’s identity and project authorship. The existing content license notice remains in src/content/LICENSE.
