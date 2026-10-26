# Portfolio content audit — 2026-10-26

## Scope and baseline

Target: donsbox/donsitenew, template branch at commit 7726bbbc52cf3e0743cf2d42e65817981dd3258a.

This audit inspects repository content and the locally built portfolio. It does not establish whether the original website, RELAY or AIinvest is deployed. It does not exercise live model providers, market feeds or platform publishing.

## Loading-chain correction

Before: the homepage read projects through getCollection('projects'), while profileData.ts contained a disconnected projects array. Several personal components also expected absent legacy fields such as firstName, shortIntros and skills.

After:

~~~text
localized home / project index
  → Projects.astro
  → getProjects(language)
  → Astro projects collection
  → localized MDX entries

localized detail route
  → getProjects(language)
  → same collection entry
  → MDXLayout + entry.render()
~~~

The profile module holds personal copy only. The collection schema requires maturity, evidence date, repository revision, access level, delivered artifacts and unverified items. Translation pairs must agree on nonlocalized evidence fields and source paths.

## Removed template attribution and data

- Bible Reference, Bible Vector Search and Pelosi Trade cases and old detail routes.
- All four sample work-history entries, including the Senior Software Engineer entry.
- Template posts and reading records, because they were also third-party personal content.
- Unsupported degree dates, university placeholders, relocation assertions and generic work-history arrays.
- Placeholder email, unconfirmed social-profile links and a hard-coded third-party email / location in the contact component.
- Template portraits, favicon, funding / sponsor destination and template production origin.
- Package author / homepage / repository metadata that described Tech Tim as the site owner.

The original MIT copyright notice and a clearly labeled template credit are retained. They describe the framework’s origin, not Don’s work.

## Evidence snapshots

| Case | Repository | Snapshot | Access | Defensible maturity |
| --- | --- | --- | --- | --- |
| RELAY Social OS | https://github.com/donsbox/aitnt | c2c2db85af18a9367d3b1b3b04956e43361e6b25 | Restricted | Source-code prototype; runtime unverified |
| AIinvest / Market Event Canvas | https://github.com/donsbox/AIinvest | 4de152caf98d7b0de5ade2f47d3583b6ff312a1f | Public | Product specification and engineering baseline |

Each case links individual source files at its fixed revision. The private RELAY source is marked as requiring access; the portfolio does not imply that every visitor can open it.

### RELAY findings

Source inspection covers:

- runContentWorkflow: input parsing, Brief generation, Benchmark retrieval, strategies, artifacts, progress and errors.
- generatePlatformOutputs: X / Xiaohongshu restrictions, selected or recommended strategy, required artifacts and writer calls.
- updatePlatformOutputs and generatePublishingPack: saved edits, final selections and publishing preparation.
- savePerformanceReview and updateUserMemory: manual review data, rule-based feedback and saved memory.
- modelGateway and compatible provider: configurable providers, mock default / fallback, timeout and limited format retry.
- validators: partial output shape checks, not exhaustive runtime schema guarantees.
- localStorageAdapter and playbookRepository: browser persistence plus seed / custom playbooks.
- main.tsx: page wiring for Review and Benchmark Library.

MVP_STATUS.md predates some of this source: it lists review, memory and a real-provider gateway as unimplemented even though the inspected code contains them. Cases follow the code, while retaining the distinction between implementation presence and tested behavior.

No live-provider call, production readiness, user count, growth result, cloud isolation, real trend ingestion or automatic posting is claimed. The gateway itself notes the need for server-side credential handling before production use.

### AIinvest findings

The snapshot contains the AI_Startup_OS_Baseline_v1 2 directory with product / architecture / testing documents, prompts, an analysis schema, a preflight script, checklists and a Market Event Canvas example specification.

The example defines events → canvas relationships → scenarios → thesis → review. It also defines non-goals, data ownership requirements and proposed acceptance paths. Those definitions are not implemented application behavior.

The committed AIAnalysis schema separates facts, inferences, risks and invalidation conditions. It does not fully encode the richer scenario requirements from the example specification.

The top-level product templates remain partly unfilled, and TASKS contains unchecked engineering tasks. README / MANIFEST name some configuration or design-skill paths absent from the tracked tree. There is no tracked business application, package manifest, test suite or CI implementation establishing the described research workspace as runnable.

## SEO and routes

- Chinese and English home, project index and two detail pages; language switches preserve case identity.
- Localized titles, descriptions, document language, Open Graph locale and JSON-LD identity.
- Canonical, hreflang, OG URLs and sitemap derive from confirmed SITE_URL; no template origin remains.
- Missing SITE_URL produces noindex output, no canonical / OG page URLs, robots disallow and an empty sitemap.
- 404 is always noindex and excluded from the sitemap.
- New local favicon and 1200 × 630 social card; no external image or font requirement.
- Old unowned content routes are removed, not redirected to unrelated work.

## Still to confirm with Don

1. Confirmed production origin and actual deployment / hosting status. If the site is already deployed, set SITE_URL before publishing this change so it is indexable.
2. A public email address and any social links Don wants displayed. Current public contact is the verified GitHub profile only.
3. Exact employment / education details and dates, if a career timeline is wanted. The portfolio currently states only the supplied e-commerce product background and AI workflow direction.
4. Don’s specific responsibilities, collaborators and attribution for RELAY / AIinvest. Both cases explicitly leave these unconfirmed.
5. Reproducible runtime results, screenshots, users and product metrics before adding outcome claims.
6. Whether to provide a public RELAY source mirror or a separately verified public demo. The current source remains access restricted.

## Verification

Local checks passed: pnpm build, pnpm verify and tsc --noEmit. Built-site verification passed both without SITE_URL and with a reserved test origin. A local Chromium smoke test also passed on all eight portfolio pages at 1440 px and 375 px, including case-preserving language switching and persisted theme toggling. These checks validate the portfolio, not RELAY or AIinvest runtime behavior. scripts/verify-built-site.mjs checks the built pages, rather than only checking profile data. It rejects template content, missing pages or links, wrong language pairing, invented contacts, inconsistent metadata and unpinned case evidence.

The CI repeats build verification both without SITE_URL and with a reserved .invalid test origin. This does not deploy the website or validate either source product.
