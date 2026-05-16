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
  fr: {
    category: string;
    summary: string;
    description: string;
    highlights: string[];
    recruiterValue: string;
    buildNotes: string[];
  };
  liveUrl?: string;
  repoUrl?: string;
};

export const profile = {
  name: "Kurtis V.",
  role: "Full-stack developer focused on useful web products",
  roleFr: "Developpeur full-stack oriente produits web utiles",
  location: "Canada",
  intro:
    "I build practical web applications, SaaS portals, marketing sites, and mobile-adjacent products with a strong eye for product quality, maintainable code, and real deployment workflows.",
  introFr:
    "Je construis des applications web pratiques, des portails SaaS, des sites marketing et des produits proches du mobile avec une attention forte a la qualite produit, au code maintenable et au deploiement reel.",
  principles: [
    "Build the product, not just the screen.",
    "Keep code readable enough for another developer to trust.",
    "Ship in small verified steps with clear Git history.",
    "Design interfaces that feel calm, direct, and credible.",
  ],
  principlesFr: [
    "Construire le produit, pas seulement l'ecran.",
    "Garder un code assez lisible pour inspirer confiance a un autre developpeur.",
    "Livrer par petites etapes verifiees avec un historique Git clair.",
    "Designer des interfaces calmes, directes et credibles.",
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
      "Separated into its own repository.",
      "Uses a distinct visual identity from the other portfolio apps.",
      "Frames ticket state, priority, and client context as the main product workflow.",
    ],
    fr: {
      category: "Dashboard de support client",
      summary: "Un portail support compact pour tickets, statuts, priorites et communication client.",
      description:
        "SupportDesk Lite montre un travail de dashboard operationnel: flux support, contexte client, UI basee sur les statuts et direction visuelle classique.",
      highlights: ["Flux tickets", "Dashboard client-ready", "Theme classique elegant"],
      recruiterValue:
        "Montre ma capacite a structurer une interface operationnelle autour d'un vrai flux support.",
      buildNotes: [
        "Cree dans son propre repo public.",
        "Identite visuelle distincte des autres apps portfolio.",
        "Le statut, la priorite et le contexte client guident le produit.",
      ],
    },
    liveUrl: "https://supportdesk-lite-verskurtislivefrs-projects.vercel.app",
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
    fr: {
      category: "Gestionnaire de soumissions",
      summary: "Un outil de soumissions pour PME avec clients, lignes, taxes et statuts.",
      description:
        "QuotePilot montre de la logique metier, de la modelisation de donnees et un flux de prix qu'une petite entreprise peut comprendre.",
      highlights: ["Flux de soumission", "Clients et lignes de prix", "PostgreSQL via Supabase"],
      recruiterValue:
        "Demontre logique business, structure de donnees et workflow utile pour PME.",
      buildNotes: [
        "Decision de base de donnees orientee Supabase PostgreSQL.",
        "Theme affine apres une premiere passe couleur.",
        "Montre taxes, statuts, clients et lignes de soumission.",
      ],
    },
    liveUrl: "https://quotepilot-omega.vercel.app",
    repoUrl: "https://github.com/kurtisv/quotepilot",
  },
  {
    slug: "luma-studio",
    name: "Luma Studio",
    category: "Premium marketing website",
    status: "live",
    summary: "A bilingual interior design studio site with services, work, contact, and case study pages.",
    description:
      "Luma Studio proves the shared foundation can produce a polished client-facing website, not only dashboard applications.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Resend-ready forms"],
    highlights: ["FR/EN support", "Real imagery", "Marketing and SEO structure"],
    recruiterValue:
      "Shows that I can move beyond dashboards and create a polished client-facing site with visual direction.",
    buildNotes: [
      "Built as project 3 to prove marketing-site versatility.",
      "Includes bilingual copy and real image treatment.",
      "Documents the design system and portfolio rationale.",
    ],
    fr: {
      category: "Site marketing premium",
      summary: "Un site bilingue pour studio interieur avec services, realisations, contact et etude de cas.",
      description:
        "Luma Studio prouve que la meme base peut produire un site client poli, pas seulement des applications dashboard.",
      highlights: ["Support FR/EN", "Images reelles", "Structure SEO et marketing"],
      recruiterValue:
        "Montre ma capacite a creer une vitrine client avec direction visuelle.",
      buildNotes: [
        "Projet 3 construit pour montrer la polyvalence visuelle.",
        "Copie bilingue et traitement d'images reelles.",
        "Design system et raisonnement portfolio documentes.",
      ],
    },
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
      "Demonstrates the API/SaaS side of the foundation: developer docs, usage concepts, API routes, and dashboard UI.",
    buildNotes: [
      "Built after Luma Studio as project 4.",
      "Includes a public developer portal, OpenAPI route, pricing concept, and demo dashboard.",
      "Uses a restrained technical design with FR/EN support.",
    ],
    fr: {
      category: "Portail SaaS/API",
      summary: "Un produit bilingue de mesure API avec docs, prix, dashboard demo et OpenAPI.",
      description:
        "API Meter montre le cote SaaS/API: cles API, usage, documentation developpeur et interface produit calme.",
      highlights: ["Support FR/EN", "Portail developpeur", "Dashboard d'usage"],
      recruiterValue:
        "Demontre le cote API/SaaS: docs developpeur, concepts d'usage, routes API et UI dashboard.",
      buildNotes: [
        "Construit apres Luma Studio comme projet 4.",
        "Inclut portail developpeur, OpenAPI, prix et dashboard demo.",
        "Design technique sobre avec support FR/EN.",
      ],
    },
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
    fr: {
      category: "Application mobile",
      summary: "Un projet d'application reel autour de flux mobile et d'utilite utilisateur.",
      description:
        "GasMobile fait partie du parcours produit et montre une ambition au-dela des petits sites portfolio.",
      highlights: ["Experience mobile", "Flux cartes", "Vision produit"],
      recruiterValue:
        "Montre une experience produit plus large que les demos web.",
      buildNotes: [
        "Travail applicatif avec cartes et flux mobiles.",
        "Contexte utile pour la pensee produit hors sites portfolio.",
        "Projet majeur inclus meme si les details evoluent separement.",
      ],
    },
    repoUrl: "https://github.com/kurtisv/gasmobile",
  },
  {
    slug: "speedzone",
    name: "SpeedZone",
    category: "Automotive community platform",
    status: "live",
    summary: "A car enthusiast platform with profiles, vehicle publishing, articles, comments, and Sanity-backed content.",
    description:
      "SpeedZone is a larger portfolio application for the automotive space. It combines a Next.js front end, Sanity CMS, Google authentication, user profiles, vehicle listings, comments, articles, and product-style community interactions.",
    stack: ["Next.js", "React", "TypeScript", "Sanity", "NextAuth", "Tailwind CSS"],
    highlights: ["Automotive community", "Sanity CMS", "Auth and user profiles"],
    recruiterValue:
      "Shows a richer product surface than a landing page: auth, content modeling, user-generated listings, comments, and a domain-specific visual direction.",
    buildNotes: [
      "Built around the automotive niche with a distinct dark/red visual identity.",
      "Connects public content, authenticated user flows, Sanity data, and article/detail pages.",
      "Useful for recruiters who want to see a broader app structure with CMS-backed content.",
    ],
    fr: {
      category: "Plateforme communautaire automobile",
      summary:
        "Une plateforme pour passionnes auto avec profils, publication de voitures, articles, commentaires et contenu Sanity.",
      description:
        "SpeedZone est une application portfolio plus large dans l'univers automobile. Elle combine un front Next.js, Sanity CMS, l'authentification Google, des profils utilisateurs, des fiches voitures, des commentaires, des articles et des interactions communautaires.",
      highlights: ["Communaute automobile", "Sanity CMS", "Auth et profils"],
      recruiterValue:
        "Montre une surface produit plus riche qu'une page vitrine: auth, modelisation de contenu, publications utilisateur, commentaires et direction visuelle specifique au domaine.",
      buildNotes: [
        "Construit autour de l'univers automobile avec une identite sombre/rouge distincte.",
        "Relie contenu public, flux authentifies, donnees Sanity et pages article/detail.",
        "Utile pour voir une structure applicative plus large avec contenu CMS.",
      ],
    },
    repoUrl: "https://github.com/kurtisv/speedzone",
  },
  {
    slug: "suze-immo",
    name: "Suze Immo",
    category: "Real client website",
    status: "live",
    summary: "A real estate website project for a functional business presence.",
    description:
      "Suze Immo is a real site context for a real estate audience. The live site is linked so recruiters can inspect the delivered client-facing experience directly.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: ["Client context", "Business website", "SEO-minded structure"],
    recruiterValue:
      "Shows real client website context and the ability to work on functional business sites that need trust, conversion, SEO, and responsive UI.",
    buildNotes: [
      "Live site is available for recruiter review.",
      "Represents work beyond portfolio exercises.",
      "Focuses on real estate presentation, property discovery, contact flows, and brand cleanup.",
    ],
    fr: {
      category: "Site client reel",
      summary: "Un site immobilier pour une presence d'affaires fonctionnelle.",
      description:
        "Suze Immo est un vrai contexte de site immobilier. Le site live est lie pour que le recruteur puisse inspecter directement l'experience livree.",
      highlights: ["Contexte client", "Site d'affaires", "Structure orientee SEO"],
      recruiterValue:
        "Montre un contexte client reel et la capacite a livrer des sites fonctionnels qui demandent confiance, conversion, SEO et UI responsive.",
      buildNotes: [
        "Site live disponible pour revue recruteur.",
        "Travail au-dela des exercices portfolio.",
        "Travail sur presentation immobiliere, recherche de proprietes, contact et nettoyage de marque.",
      ],
    },
    liveUrl: "https://suzeimmo.com",
  },
];

export function getProjectBySlug(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}

export function getProjectCopy(project: PortfolioProject, locale: "en" | "fr") {
  if (locale === "en") {
    return {
      category: project.category,
      summary: project.summary,
      description: project.description,
      highlights: project.highlights,
      recruiterValue: project.recruiterValue,
      buildNotes: project.buildNotes,
    };
  }

  return project.fr;
}

export const pageCopy = {
  en: {
    nav: {
      projects: "Projects",
      about: "About",
      services: "Services",
      stack: "Stack",
      process: "Process",
      contact: "Contact",
      cta: "Work together",
    },
    home: {
      eyebrow: "Developer portfolio",
      title: "I build web products that are useful, shipped, and easy to review.",
      projects: "View projects",
      github: "GitHub",
      selectedEyebrow: "Selected work",
      selectedTitle:
        "A portfolio that shows range: dashboards, SaaS/API, client websites, and product apps.",
      selectedDescription:
        "Each project is documented as a real build, with public repos where possible and a clear explanation of what the work demonstrates.",
      stackEyebrow: "Stack",
      stackTitle: "Built with a repeatable, recruiter-friendly workflow.",
      stackDescription:
        "The goal is not only to make the site look good. The repository should show clean structure, staged branches, verification, and documentation.",
      nextEyebrow: "Next",
      nextTitle: "The portfolio leaves room for real client work as it becomes public.",
      noteEyebrow: "Recruiter note",
      noteTitle: "This repository is built to be inspected, not just visited.",
      noteText:
        "The site is developed branch by branch, with verification and documentation along the way, so the GitHub history reflects the same discipline expected in production work.",
      noteCta: "Review the process",
    },
    projectCard: {
      details: "View case note",
      live: "Live site",
      repo: "GitHub",
    },
    proof: [
      ["4", "portfolio builds from the foundation"],
      ["1", "mobile product included"],
      ["3+", "client sites planned or in progress"],
      ["50", "tests passing in the foundation"],
    ],
  },
  fr: {
    nav: {
      projects: "Projets",
      about: "Profil",
      services: "Services",
      stack: "Stack",
      process: "Processus",
      contact: "Contact",
      cta: "Travailler ensemble",
    },
    home: {
      eyebrow: "Portfolio developpeur",
      title: "Je construis des produits web utiles, livres et faciles a reviser.",
      projects: "Voir les projets",
      github: "GitHub",
      selectedEyebrow: "Travaux selectionnes",
      selectedTitle:
        "Un portfolio qui montre plusieurs surfaces: dashboards, SaaS/API, sites clients et apps produit.",
      selectedDescription:
        "Chaque projet est documente comme un vrai build, avec repos publics quand possible et une explication claire de ce qu'il demontre.",
      stackEyebrow: "Stack",
      stackTitle: "Construit avec un workflow repetable et lisible par un recruteur.",
      stackDescription:
        "Le but n'est pas seulement de faire beau. Le repo doit montrer structure, branches par etapes, verification et documentation.",
      nextEyebrow: "Suite",
      nextTitle: "Le portfolio garde de la place pour le travail client quand il devient public.",
      noteEyebrow: "Note recruteur",
      noteTitle: "Ce repo est construit pour etre inspecte, pas seulement visite.",
      noteText:
        "Le site est developpe branche par branche, avec verification et documentation, pour que l'historique Git reflete une discipline de production.",
      noteCta: "Voir le processus",
    },
    projectCard: {
      details: "Voir la fiche",
      live: "Site live",
      repo: "GitHub",
    },
    proof: [
      ["4", "projets portfolio issus de la base"],
      ["1", "produit mobile inclus"],
      ["3+", "sites clients prevus ou en cours"],
      ["50", "tests passent dans la fondation"],
    ],
  },
} as const;

export const upcomingProjects = [
  "Three additional functional websites for real users",
  "More client case studies as they become public",
  "Additional SaaS/dashboard builds from the same foundation",
];

export const upcomingProjectsFr = [
  "Trois autres sites fonctionnels pour de vrais utilisateurs",
  "Plus d'etudes de cas client quand elles pourront etre publiques",
  "D'autres builds SaaS/dashboard a partir de la meme base",
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

export const serviceAreasFr = [
  {
    title: "Sites portfolio et sites d'affaires",
    description:
      "Sites clients avec positionnement clair, UI responsive, structure SEO, formulaires et code deployable.",
  },
  {
    title: "Produits SaaS et dashboards",
    description:
      "Interfaces operationnelles pour tickets, soumissions, usage API, administration et gestion de donnees produit.",
  },
  {
    title: "Fondations API et backend",
    description:
      "Modeles Prisma, routes validees, dashboards prets pour auth, suivi d'usage, structure de facturation et deploiement.",
  },
  {
    title: "Amelioration produit",
    description:
      "Polish design, nettoyage UX, accessibilite, historique Git propre, documentation et preparation production.",
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

export const processStepsFr = [
  {
    title: "Planifier la tranche",
    description:
      "Definir le resultat, la branche, les fichiers probables et les verifications avant d'implementer.",
  },
  {
    title: "Construire dans une branche ciblee",
    description:
      "Garder chaque branche assez petite pour etre revue: fondation, contenu, pages projet, design, SEO ou deploiement.",
  },
  {
    title: "Verifier avant commit",
    description:
      "Executer lint, typecheck, tests et build lorsque le changement touche des routes ou comportements importants.",
  },
  {
    title: "Documenter la decision",
    description:
      "Mettre a jour README ou docs quand un reviewer doit comprendre pourquoi la structure existe.",
  },
  {
    title: "Merger et continuer",
    description:
      "Pousser la branche, merger dans main, puis repartir d'un main propre pour la prochaine etape.",
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

export const stackGroupsFr = [
  {
    title: "Frontend",
    items: ["Next.js App Router", "React", "TypeScript", "Tailwind CSS", "UI responsive"],
  },
  {
    title: "Backend",
    items: ["Prisma", "PostgreSQL", "Auth.js", "Routes API", "Validation avec Zod"],
  },
  {
    title: "Produit",
    items: ["SEO", "Accessibilite", "Workflow Git", "Deploiement Vercel", "Documentation"],
  },
];
