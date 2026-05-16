# Build Log

## 01-foundation

Goal: create the first working foundation for the developer profile site.

Completed:

- Created a separate `dev-portfolio` repo from the shared foundation.
- Added the repo to the Symphonee portfolio space.
- Created branch `01-foundation`.
- Added profile data, project data, shared project card, and section heading.
- Replaced the generic landing page with a developer portfolio home.
- Added initial `/projects`, `/about`, `/stack`, and `/process` pages.
- Added Vercel monorepo configuration.

Next:

- Verify the foundation.
- Push branch and merge into `main`.
- Start `02-content-structure`.

Verification:

- `pnpm lint` passed.
- `pnpm typecheck` passed.
- `pnpm test` passed: 50 tests.
- `pnpm build` passed.

Commit:

- `6e61e78 feat: establish developer portfolio foundation`

## 02-content-structure

Goal: make the profile content more useful and recruiter-readable.

Completed:

- Added service areas to the central portfolio data file.
- Replaced the generic contact page with a developer profile contact page.
- Added project type to the contact action schema.
- Added `/services`.
- Expanded `/process` from static local content to shared data.
- Updated navigation and sitemap for the real profile routes.

Next:

- Verify, commit, push, and merge into `main`.
- Start `03-projects-showcase`.

Verification:

- `pnpm lint` passed.
- `pnpm typecheck` passed.
- `pnpm test` passed: 50 tests.
- `pnpm build` passed.

Commit:

- `14c8ec6 feat: add profile content structure`

Merge:

- `af910cf merge: profile content structure`

## 03-projects-showcase

Goal: make each project useful to inspect, not just listed as a card.

Completed:

- Added recruiter value and build notes to each project record.
- Added `getProjectBySlug` helper.
- Added `/projects/[slug]` detail pages with metadata and static params.
- Added live/GitHub links where available.
- Added project detail routes to the sitemap.

Next:

- Verify, commit, push, and merge into `main`.
- Start `04-design-polish`.

Verification:

- `pnpm lint` passed.
- `pnpm typecheck` passed.
- `pnpm test` passed: 50 tests.
- `pnpm build` passed.

Commit:

- `24c3b84 feat: add project detail showcase`

Merge:

- `bb46e2b merge: project detail showcase`

## 04-design-polish

Goal: improve recruiter-facing polish and production review quality.

Completed:

- Added proof strip to the landing page.
- Added a dark recruiter note CTA section.
- Tightened README review notes.
- Expanded design documentation around recruiter experience.
- Updated robots rules to keep dashboard/login/API paths out of crawl focus.

Next:

- Verify, commit, push, and merge into `main`.
- Start `05-deploy`.

Verification:

- `pnpm lint` passed.
- `pnpm typecheck` passed.
- `pnpm test` passed: 50 tests.
- `pnpm build` passed.

Commit:

- `ab11625 feat: polish recruiter portfolio experience`

Merge:

- `23a83b7 merge: recruiter design polish`

## 05-deploy

Goal: publish the developer profile site and record production status.

Completed:

- Deployed production to Vercel.
- Connected the public GitHub repository to Vercel.
- Smoke tested `/`, `/projects`, `/projects/api-meter`, and `/process`.

Production:

- URL: https://dev-portfolio-mocha-five.vercel.app
- Deployment id: `dpl_G7hdyebzqu8m6pPTsYJKzQxickQp`
- Inspector: https://vercel.com/verskurtislivefrs-projects/dev-portfolio/G7hdyebzqu8m6pPTsYJKzQxickQp

## 06-fr-en-visual-polish

Goal: make the developer profile stronger for recruiters with bilingual content, visible portfolio links, and cleaner repository wording.

Completed:

- Added a FR/EN language switcher backed by a locale cookie.
- Localized the main profile pages, project cards, detail pages, footer, and navigation.
- Added visible live-site and GitHub links to recruiter-facing project cards.
- Strengthened the visual direction with warmer surfaces, calmer green accents, richer hero treatment, and more deliberate card depth.
- Replaced old foundation wording in public routes, docs, API metadata, tests, and repository notes.
- Updated Playwright configuration so e2e tests can run on a clean per-run port.

Verification:

- `pnpm lint` passed.
- `pnpm typecheck` passed.
- `pnpm test` passed: 50 tests.
- `pnpm build` passed.
- `PLAYWRIGHT_PORT=3008 pnpm test:e2e` passed: 2 tests.

Next:

- Commit, push, merge into `main`, and deploy production.

## 07-client-site-links

Goal: make the broader portfolio more complete for recruiters by exposing client/personal site links.

Completed:

- Added SpeedZone as a visible portfolio project.
- Added the Suze Immo live URL to the project data.
- Updated client-site copy so recruiters can inspect the live work directly.

## 08-signature-design-system

Goal: move the profile site from clean/simple to a more memorable recruiter-facing experience while preserving clarity.

Completed:

- Added a signature hero with a recruiter cockpit visual, staged-branch motion, and clearer quality signals.
- Added an animated project rail that showcases the breadth of the portfolio without requiring extra clicks.
- Made project rail items clickable: live projects open the live site and others open project details.
- Added a boilerplate provenance section with a GitHub link to `kurtisv/kv-web-starter`.
- Strengthened project cards with accent bars, stronger link affordances, and more tactile hover states.
- Updated the navbar with a more distinctive monogram, portfolio label, and pill navigation.
- Added motion CSS with `prefers-reduced-motion` handling.
