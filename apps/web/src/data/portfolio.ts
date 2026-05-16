export type ProjectStatus = "live" | "private" | "coming-soon";

export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  description: string;
  stack: string[];
  highlights: string[];
  recruiterValue: string;
  buildNotes: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const profile = {
  name: "Kurtis V.",
  role: "Full-stack developer focused on useful web products",
  location: "Canada",
  intro:
    "I build practical web applications, SaaS portals, marketing sites, and mobile-adjacent products with a strong eye for product quality, maintainable code, and real deployment workflows.",
  principles: [
    "Build the product, not just the screen.",
    "Keep code readable enough for another developer to trust.",
    "Ship in small verified steps with clear Git history.",
    "Design interfaces that feel calm, direct, and credible.",
  ],
};

export const featuredProjects: PortfolioProject[] = [
  {
    slug: "supportdesk-lite",
    name: "SupportDesk Lite",
    category: "Customer support dashboard",
    status: "live",
    summary: "A compact support portal for tickets, statuses, priorities, and client communication.",
    description:
      "SupportDesk Lite demonstrates business dashboard work: operational flows, support context, status-driven UI, and a classic visual direction distinct from the other portfolio projects.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Supabase"],
    highlights: ["Ticket workflow", "Client-ready dashboard", "Classic elegant theme"],
    recruiterValue:
      "Shows that I can structure operational UI around real support work instead of only making marketing pages.",
    buildNotes: [
      "Separated from the starter into its own repository.",
      "Uses a distinct visual identity from the other portfolio apps.",
      "Frames ticket state, priority, and client context as the main product workflow.",
    ],
    repoUrl: "https://github.com/kurtisv/supportdesk-lite",
  },
  {
    slug: "quotepilot",
    name: "QuotePilot",
    category: "Quote management app",
    status: "live",
    summary: "A quote builder for small businesses with clients, line items, taxes, and quote states.",
    description:
      "QuotePilot shows CRUD, business logic, pricing structure, and a more refined color system for a practical SMB workflow.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Supabase"],
    highlights: ["Quote workflow", "Client and line item model", "Supabase PostgreSQL"],
    recruiterValue:
      "Demonstrates business logic, data modeling, and a practical workflow a small business could understand.",
    buildNotes: [
      "Moved database direction to Supabase PostgreSQL.",
      "Refined the theme after the first color pass.",
      "Shows taxes, quote status, client data, and quote line structure.",
    ],
    repoUrl: "https://github.com/kurtisv/quotepilot",
  },
  {
    slug: "luma-studio",
    name: "Luma Studio",
    category: "Premium marketing website",
    status: "live",
    summary: "A bilingual interior design studio site with services, work, contact, and case study pages.",
    description:
      "Luma Studio proves the boilerplate can produce a polished client-facing website, not only dashboard applications.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Resend-ready forms"],
    highlights: ["FR/EN support", "Real imagery", "Marketing and SEO structure"],
    recruiterValue:
      "Shows that I can move beyond dashboards and create a polished client-facing site with visual direction.",
    buildNotes: [
      "Built as project 3 to prove marketing-site versatility.",
      "Includes bilingual copy and real image treatment.",
      "Documents the design system and portfolio rationale.",
    ],
    liveUrl: "https://luma-studio-ruddy.vercel.app",
    repoUrl: "https://github.com/kurtisv/luma-studio",
  },
  {
    slug: "api-meter",
    name: "API Meter",
    category: "SaaS/API portal",
    status: "live",
    summary: "A bilingual API metering product with docs, pricing, dashboard demo, and OpenAPI route.",
    description:
      "API Meter demonstrates API keys, usage tracking concepts, developer documentation, and a calm SaaS product interface.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "OpenAPI"],
    highlights: ["FR/EN support", "Developer portal", "Usage dashboard"],
    recruiterValue:
      "Demonstrates the API/SaaS side of the starter: developer docs, usage concepts, API routes, and dashboard UI.",
    buildNotes: [
      "Built after Luma Studio as project 4.",
      "Includes a public developer portal, OpenAPI route, pricing concept, and demo dashboard.",
      "Uses a restrained technical design with FR/EN support.",
    ],
    liveUrl: "https://api-meter.vercel.app",
    repoUrl: "https://github.com/kurtisv/api-meter",
  },
  {
    slug: "gasmobile",
    name: "GasMobile",
    category: "Mobile application",
    status: "live",
    summary: "A real application project focused on mobile product workflows and user-facing utility.",
    description:
      "GasMobile is part of the broader work history and shows product ambition beyond small portfolio websites.",
    stack: ["React Native", "Expo", "TypeScript", "Maps", "Sanity"],
    highlights: ["Mobile experience", "Map workflows", "Production product thinking"],
    recruiterValue:
      "Shows broader product ambition and mobile-facing work beyond small web demos.",
    buildNotes: [
      "Represents application work with maps and mobile product flows.",
      "Useful context for product thinking outside the portfolio website series.",
      "Included as a major project even if details evolve separately.",
    ],
    repoUrl: "https://github.com/kurtisv/gasmobile",
  },
  {
    slug: "suze-immo",
    name: "Suze Immo",
    category: "Real client website",
    status: "private",
    summary: "A real estate website project for a functional business presence.",
    description:
      "Suze Immo is a real site context. Public details can be limited while still showing the type of client-facing work delivered.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: ["Client context", "Business website", "SEO-minded structure"],
    recruiterValue:
      "Shows real client website context and the ability to work on functional business sites.",
    buildNotes: [
      "Details stay limited where client context should remain private.",
      "Represents work beyond fictional portfolio prompts.",
      "Will be expanded when public client material is ready.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}

export const upcomingProjects = [
  "Three additional functional websites for real users",
  "More client case studies as they become public",
  "Additional SaaS/dashboard builds from the same starter",
];

export const serviceAreas = [
  {
    title: "Portfolio and business websites",
    description:
      "Client-facing websites with clear positioning, responsive UI, SEO structure, contact flows, and deployable code.",
  },
  {
    title: "SaaS and dashboard products",
    description:
      "Operational interfaces for tickets, quotes, API usage, admin workflows, and product data management.",
  },
  {
    title: "API and backend foundations",
    description:
      "Prisma data models, validated API routes, auth-ready dashboards, usage tracking, billing-ready structure, and deployment setup.",
  },
  {
    title: "Product improvement",
    description:
      "Design polish, UX cleanup, accessibility passes, Git history cleanup, documentation, and production readiness.",
  },
];

export const processSteps = [
  {
    title: "Plan the slice",
    description:
      "Define the outcome, branch name, files likely to change, and verification needed before touching implementation.",
  },
  {
    title: "Build in a focused branch",
    description:
      "Keep each branch small enough to review: foundation, content, project pages, design polish, SEO, or deployment.",
  },
  {
    title: "Verify before commit",
    description:
      "Run lint, typecheck, tests, and build when the change touches shared behavior or production routes.",
  },
  {
    title: "Document the decision",
    description:
      "Update README or docs when a reviewer would benefit from knowing why the structure exists.",
  },
  {
    title: "Merge and continue",
    description:
      "Push the working branch, merge into main, then start the next branch from the clean main history.",
  },
];

export const stackGroups = [
  {
    title: "Frontend",
    items: ["Next.js App Router", "React", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend",
    items: ["Prisma", "PostgreSQL", "Auth.js", "API routes", "Validation with Zod"],
  },
  {
    title: "Product",
    items: ["SEO", "Accessibility", "Git workflows", "Vercel deployment", "Documentation"],
  },
];
