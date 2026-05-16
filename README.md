# Kurtis V. Developer Portfolio

This repository contains the developer profile site that brings together public
portfolio projects, real client website context, and product application work.

The project is built from a reusable Next.js foundation and intentionally uses
a staged Git workflow so recruiters can review how the site was constructed
over time.

## Current scope

- Developer profile landing page
- Project index
- Project detail pages
- About page
- Services page
- Stack page
- Process page
- Shared project data source
- Recruiter-friendly documentation

## Branch strategy

Each meaningful build step gets its own branch:

- `01-foundation`
- `02-content-structure`
- `03-projects-showcase`
- `04-case-studies`
- `05-design-polish`
- `06-seo-accessibility`
- `07-deploy`

After each step works, it is committed, pushed, and merged back into `main`
before starting the next branch.

## Verification

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Public repo

GitHub: https://github.com/kurtisv/dev-portfolio

## Review notes

The site is intentionally built in incremental branches so a recruiter can
inspect progression instead of only seeing one final commit. The main content
model lives in `apps/web/src/data/portfolio.ts`; most public pages consume that
data rather than duplicating project facts.
