# Portfolio Projects Roadmap

## Objective

Promote `kv-web-starter` by building eight recruiter-ready projects from the same foundation. The collection must prove that the boilerplate can produce different kinds of work: dashboards, business SaaS, premium marketing sites, API products, booking flows, Stripe-ready commerce, client portals, and event applications.

The point is not to repeat the same dashboard eight times. Each project should make one capability obvious to a recruiter.

## Boilerplate Capabilities To Demonstrate

- Marketing websites with polished UI, SEO, contact forms, and bilingual content.
- Authenticated dashboards with clean CRUD and business workflows.
- Prisma/Postgres data models that match real product use cases.
- Resend/React Email transactional flows.
- API keys, OpenAPI documentation, usage tracking, and rate-limit concepts.
- Stripe-ready commerce or billing flows.
- Booking, availability, and capacity management.
- Production deployment, public repos, tests, and staged branch history.

## Eight-Project Roadmap

| # | Project | Status | Type | Boilerplate capability demonstrated |
|---|---|---|---|---|
| 1 | SupportDesk Lite | Done | Support dashboard | Auth, dashboard, ticket CRUD, statuses, comments, email notifications |
| 2 | QuotePilot | Done | Business SaaS | Clients, quotes, line items, tax calculations, public quote links, email |
| 3 | Luma Studio | Done | Premium marketing site | Visual design, SEO, static content, contact form, responsive client website |
| 4 | API Meter | Done | SaaS/API portal | API keys, usage concepts, developer docs, OpenAPI, pricing, operations dashboard |
| 5 | ReserveFlow | Backlog | Booking system | Services, staff, availability, booking requests, calendar-style workflow, confirmation email |
| 6 | CommerceKit | Backlog | Stripe-ready commerce | Product catalog, checkout path, order summary, customer emails, admin order dashboard |
| 7 | ClientHub | Backlog | Client portal | Login-protected client area, projects, files, messages, milestones, invoice placeholders |
| 8 | EventPass | Backlog | Event registration app | Events, capacity, attendee registration, QR/check-in concept, admin event dashboard |

## Completed Projects

### 1. SupportDesk Lite

- Live: https://supportdesk-lite-verskurtislivefrs-projects.vercel.app
- Repo: https://github.com/kurtisv/supportdesk-lite
- Demonstrates: operational dashboard, ticket workflow, Prisma models, Auth.js, Resend-ready notifications.

### 2. QuotePilot

- Live: https://quotepilot-omega.vercel.app
- Repo: https://github.com/kurtisv/quotepilot
- Demonstrates: business document workflow, clients, quotes, line items, taxes, public share links, email structure.

### 3. Luma Studio

- Live: https://luma-studio-ruddy.vercel.app
- Repo: https://github.com/kurtisv/luma-studio
- Demonstrates: premium client-facing website, visual direction, SEO-minded pages, bilingual marketing content, real image handling.

### 4. API Meter

- Live: https://api-meter.vercel.app
- Repo: https://github.com/kurtisv/api-meter
- Demonstrates: API/SaaS product surface, developer portal, docs, pricing concept, usage dashboard, safe demo endpoint.

## Backlog Projects

### 5. ReserveFlow

Purpose: prove that the boilerplate can power a service-business booking site, not only dashboards.

Core routes:

- `/`
- `/services`
- `/book`
- `/booking/[id]`
- `/dashboard`
- `/dashboard/bookings`
- `/case-study`

MVP features:

- Service catalog with duration and starting price.
- Staff or resource availability.
- Booking request form with date/time selection.
- Admin dashboard for booking status.
- Confirmation email fallback through Resend structure.
- Case study explaining booking/availability choices.

Recruiter value:

- Shows real service-business workflows: scheduling, availability, validation, status management, and transactional communication.

### 6. CommerceKit

Purpose: show the Stripe-ready side of the boilerplate with a small commerce/product flow.

Core routes:

- `/`
- `/products`
- `/products/[slug]`
- `/checkout`
- `/orders/[id]`
- `/dashboard/orders`
- `/case-study`

MVP features:

- Product catalog and product details.
- Cart or simplified checkout summary.
- Stripe Checkout-ready handoff or safe demo checkout.
- Order confirmation page.
- Admin order dashboard.
- Order confirmation email fallback.

Recruiter value:

- Shows commerce thinking, Stripe integration readiness, order modeling, customer-facing checkout UX, and admin operations.

### 7. ClientHub

Purpose: demonstrate an authenticated client portal for agencies, freelancers, or small service teams.

Core routes:

- `/`
- `/login`
- `/portal`
- `/portal/projects`
- `/portal/projects/[id]`
- `/portal/messages`
- `/portal/files`
- `/case-study`

MVP features:

- Demo client login.
- Project list and milestone status.
- Project detail with tasks, files, and notes.
- Message thread concept.
- Invoice/payment placeholder section.
- Admin/client separation if simple.

Recruiter value:

- Shows protected app UX, relationship-oriented workflows, data organization, and practical B2B product thinking.

### 8. EventPass

Purpose: show event registration, capacity management, and admin check-in workflows.

Core routes:

- `/`
- `/events`
- `/events/[slug]`
- `/register/[eventSlug]`
- `/ticket/[token]`
- `/dashboard/events`
- `/dashboard/check-in`
- `/case-study`

MVP features:

- Event listing and event detail pages.
- Registration form with attendee data.
- Capacity/seat count logic.
- Ticket confirmation page with token or QR concept.
- Admin attendee/check-in dashboard.
- Confirmation email fallback.

Recruiter value:

- Shows a complete registration flow, capacity constraints, public/private routes, tokens, and operational admin screens.

## Project Standards

- Create a separate GitHub repository for each portfolio project.
- Keep the repository public when the project is meant for recruiting.
- Build from a clean copy of `kv-web-starter`, never inside the starter repo.
- Add FR/EN when the project is portfolio-facing.
- Add live deployment URL to the developer profile once deployed.
- Run lint, typecheck, tests, build, and at least one smoke check before deploy.
- Update the related Symphonee note and this roadmap after deploy.

## Presentation Rule

Each project must answer this clearly:

- What kind of product/site is this?
- Which boilerplate capability does it prove?
- What should a recruiter inspect first?
- What code or architecture decision makes it credible?

Avoid vague project descriptions and repeated dashboard positioning.
