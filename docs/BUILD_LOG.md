# Build Log

## 01-foundation

Goal: create the first working foundation for the developer profile site.

Completed:

- Copied `kv-web-starter` into a separate `dev-portfolio` repo.
- Added the repo to the Symphonee portfolio space.
- Created branch `01-foundation`.
- Added profile data, project data, shared project card, and section heading.
- Replaced the generic starter landing page with a developer portfolio home.
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
