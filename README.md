# Kurtis V. Developer Portfolio

This repository contains the developer profile site that brings together public
portfolio projects, real client website context, and product application work.

The project is built from `kv-web-starter` and intentionally uses a staged Git
workflow so recruiters can review how the site was constructed over time.

## Current scope

- Developer profile landing page
- Project index
- About page
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
