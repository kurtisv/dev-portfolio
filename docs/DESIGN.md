# Developer Portfolio Design System

## Direction

The site should feel calm, serious, and product-focused. It is a developer
profile, not a loud landing page. The design should help recruiters understand
range, process, and code quality.

## Visual principles

- Clear hierarchy.
- Light, warm-neutral surfaces.
- Green accent used with restraint.
- Dense enough to scan, not decorative.
- No generic decorative gradients.
- No nested cards.
- Signature moments are allowed when they support recruiter comprehension:
  hero cockpit, project rail, visible proof, and tactile project cards.

## Palette

- Background: `#F5F1E8`
- Foreground: `#151F1C`
- Primary: `#17483E`
- Accent: `#B85B3E`
- Secondary: `#F0D7B1`
- Border: `#D3C4AE`
- Dark surface: `#111A17`

## Components

- Navbar: sticky, compact, with a clear monogram and classic nav.
- Hero: direct developer positioning plus a recruiter cockpit visual.
- Project cards: category, status, summary, stack, detail/live/repo actions.
- Project rail: animated but non-essential; it reinforces range without hiding content.
- Project rail items are interactive: live projects open their live URL, undeployed/private items open the project detail page.
- Boilerplate provenance must be explicit on the home page with a direct GitHub link to the reusable foundation.
- Section headings: eyebrow, title, optional description.
- Footer: compact profile summary and key links.

## Accessibility

- Keep contrast readable.
- Use semantic headings.
- Preserve visible focus states from UI primitives.
- Avoid color-only meaning for status where possible.
- Respect `prefers-reduced-motion` for all decorative animation.
- Essential proof must remain visible when motion is disabled.

## Recruiter experience

- The first viewport must explain the role and type of work quickly.
- Project cards must show category, status, stack, and a path to detail.
- Detail pages must explain recruiter value, not only features.
- The process page must make the branch-by-branch workflow explicit.
- Documentation should make the repo easier to review.
