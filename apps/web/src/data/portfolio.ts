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
  },
];

export const upcomingProjects = [
  "Three additional functional websites for real users",
  "More client case studies as they become public",
  "Additional SaaS/dashboard builds from the same starter",
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
