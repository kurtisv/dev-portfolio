export type ProjectStatus = "live" | "private" | "coming-soon";

export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  status: ProjectStatus;
  ecosystemRole?: string;
  ecosystemLinks?: string[];
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
    ecosystemRole?: string;
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
    slug: "luma-studio",
    name: "Luma Studio",
    category: "Premium marketing website",
    status: "live",
    ecosystemRole:
      "Acts as the public brand front door that explains the company, generates trust, and sends visitors toward quotes, booking, or contact.",
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
    slug: "commercekit",
    name: "CommerceKit",
    category: "Commerce workflow",
    status: "live",
    ecosystemRole:
      "Sells kits, resources, productized services, or add-ons that support the same company operations.",
    ecosystemLinks: ["supportdesk-lite", "clienthub", "eventpass"],
    summary: "A small commerce product with catalog, product details, checkout demo, and order cockpit.",
    description:
      "CommerceKit demonstrates the Stripe-ready commerce side of the boilerplate with order data, product cards, confirmation flows, and dashboard context.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Supabase"],
    highlights: ["Product catalog", "Checkout path", "Order dashboard"],
    recruiterValue:
      "Shows product merchandising, order modeling, and commerce UX without hiding behind placeholder screens.",
    buildNotes: [
      "Built as project 6 in its own public repo.",
      "Production is connected to the shared kv-portfolio Supabase database.",
      "Public pages, order flow, and dashboard surfaces are bilingual.",
    ],
    fr: {
      category: "Flux commerce",
      ecosystemRole:
        "Vend des kits, ressources, services productises ou ajouts relies aux operations de la meme entreprise.",
      summary: "Un produit commerce avec catalogue, details produit, checkout demo et cockpit commandes.",
      description:
        "CommerceKit demontre le cote commerce/Stripe-ready du boilerplate avec donnees de commandes, cartes produit, confirmation et dashboard.",
      highlights: ["Catalogue produit", "Flux checkout", "Dashboard commandes"],
      recruiterValue:
        "Montre merchandising, modelisation de commandes et UX commerce sans rester sur des ecrans placeholder.",
      buildNotes: [
        "Construit comme projet 6 dans son propre repo public.",
        "Production connectee a la base Supabase partagee kv-portfolio.",
        "Pages publiques, commande et dashboard en bilingue.",
      ],
    },
    liveUrl: "https://commercekit.vercel.app",
    repoUrl: "https://github.com/kurtisv/commercekit",
  },
  {
    slug: "clienthub",
    name: "ClientHub",
    category: "Client portal",
    status: "live",
    ecosystemRole:
      "Centralizes project delivery after a quote is accepted: milestones, files, messages, and client-facing progress.",
    ecosystemLinks: ["quotepilot", "supportdesk-lite", "api-meter"],
    summary: "A B2B client portal for projects, milestones, files, messages, and delivery status.",
    description:
      "ClientHub turns the starter into a client collaboration product with project context, delivery progress, document references, and message history.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Supabase"],
    highlights: ["Project portal", "Milestones and files", "B2B workflow"],
    recruiterValue:
      "Shows protected-portal thinking, client collaboration UX, and structured project data from the same foundation.",
    buildNotes: [
      "Built as project 7 with a separate public repo.",
      "Production is connected to shared kv-portfolio Supabase tables.",
      "Designed as a calmer B2B tool rather than another marketing site.",
    ],
    fr: {
      category: "Portail client",
      ecosystemRole:
        "Centralise la livraison apres acceptation d'une soumission: jalons, fichiers, messages et progression client.",
      summary: "Un portail B2B pour projets, jalons, fichiers, messages et statut de livraison.",
      description:
        "ClientHub transforme le starter en produit de collaboration client avec contexte projet, progression, documents et historique de messages.",
      highlights: ["Portail projet", "Jalons et fichiers", "Flux B2B"],
      recruiterValue:
        "Montre une logique de portail protege, UX de collaboration client et donnees projet structurees.",
      buildNotes: [
        "Construit comme projet 7 dans un repo public separe.",
        "Production connectee aux tables Supabase partagees kv-portfolio.",
        "Design oriente outil B2B calme plutot qu'autre site marketing.",
      ],
    },
    liveUrl: "https://clienthub-five.vercel.app",
    repoUrl: "https://github.com/kurtisv/clienthub",
  },
  {
    slug: "eventpass",
    name: "EventPass",
    category: "Event registration app",
    status: "live",
    ecosystemRole:
      "Runs workshops, launches, and client events that connect marketing, commerce, and follow-up support.",
    ecosystemLinks: ["luma-studio", "commercekit", "supportdesk-lite"],
    summary: "An event registration and check-in product with capacity, tickets, and arrival operations.",
    description:
      "EventPass completes the eight-project series with public event pages, tokenized tickets, capacity display, and an admin check-in surface.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Supabase"],
    highlights: ["Event catalog", "Token ticket", "Admin check-in"],
    recruiterValue:
      "Shows public registration, capacity constraints, tokenized access, and operations UI in a distinct product style.",
    buildNotes: [
      "Built as project 8 from kv-web-starter.",
      "Production is connected to the shared kv-portfolio Supabase database.",
      "Includes FR/EN, case study, and a separate public GitHub repo.",
    ],
    fr: {
      category: "App d'inscription evenementielle",
      ecosystemRole:
        "Gere ateliers, lancements et evenements clients qui relient marketing, commerce et support apres evenement.",
      summary: "Un produit evenementiel avec capacite, billets et operations d'arrivee.",
      description:
        "EventPass complete la serie de huit projets avec pages evenement, billets tokenises, capacite visible et check-in admin.",
      highlights: ["Catalogue evenements", "Billet tokenise", "Check-in admin"],
      recruiterValue:
        "Montre inscription publique, contraintes de capacite, acces tokenise et UI operationnelle avec style distinct.",
      buildNotes: [
        "Construit comme projet 8 depuis kv-web-starter.",
        "Production connectee a la base Supabase partagee kv-portfolio.",
        "Inclut FR/EN, etude de cas et repo GitHub public separe.",
      ],
    },
    liveUrl: "https://eventpass-nine.vercel.app",
    repoUrl: "https://github.com/kurtisv/eventpass",
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
  {
    slug: "cardream",
    name: "CarDream",
    category: "Automotive showcase platform",
    status: "live",
    summary: "A car showcase platform with a public gallery, vehicle detail pages, and a Sanity-backed content layer.",
    description:
      "CarDream is a content-driven Next.js application for the automotive niche. It uses Sanity as the CMS backbone, dynamic vehicle detail routes, an owner profile system, and a visual direction built around car culture.",
    stack: ["Next.js", "TypeScript", "Sanity", "Tailwind CSS"],
    highlights: ["Vehicle gallery", "Sanity CMS", "Dynamic detail routes"],
    recruiterValue:
      "Shows a Sanity-backed Next.js app with dynamic routes, domain-specific content modeling, and a polished visual direction outside the standard boilerplate projects.",
    buildNotes: [
      "Sanity powers the vehicle content layer with structured schemas.",
      "Dynamic car detail pages with owner profiles and social interactions.",
      "Deployed live on Vercel.",
    ],
    fr: {
      category: "Plateforme vitrine automobile",
      summary: "Une plateforme vitrine auto avec galerie publique, pages detail voitures et un backend Sanity.",
      description:
        "CarDream est une application Next.js orientee contenu pour le domaine automobile. Elle utilise Sanity comme CMS, des routes detail dynamiques, des profils proprietaires et une direction visuelle centree sur la culture auto.",
      highlights: ["Galerie vehicules", "Sanity CMS", "Routes detail dynamiques"],
      recruiterValue:
        "Montre une app Next.js avec Sanity, routes dynamiques, modelisation de contenu specifique au domaine et direction visuelle soignee hors des projets boilerplate standards.",
      buildNotes: [
        "Sanity alimente la couche contenu vehicules avec des schemas structures.",
        "Pages detail avec profils proprietaires et interactions sociales.",
        "Deploye live sur Vercel.",
      ],
    },
    liveUrl: "https://cardream-phi.vercel.app",
  },
];

export function getProjectBySlug(slug: string) {
  return publicPortfolioProjects.find((project) => project.slug === slug);
}

export const ecosystemOrder = [
  "luma-studio",
] as const;

const removedFromPortfolio = new Set([
  "clienthub",
  "commercekit",
  "eventpass",
]);

export const publicPortfolioProjects = featuredProjects.filter((project) => !removedFromPortfolio.has(project.slug));

export function getProjectsInEcosystemOrder() {
  const bySlug = new Map(publicPortfolioProjects.map((project) => [project.slug, project]));
  const ordered = ecosystemOrder
    .map((slug) => bySlug.get(slug))
    .filter((project): project is PortfolioProject => Boolean(project));
  const rest = publicPortfolioProjects.filter((project) => !ecosystemOrder.includes(project.slug as (typeof ecosystemOrder)[number]));

  return [...ordered, ...rest];
}

export function getProjectCopy(project: PortfolioProject, locale: "en" | "fr") {
  if (locale === "en") {
    return {
      category: project.category,
      ecosystemRole: project.ecosystemRole,
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
        "A portfolio centered on real launched sites, a marketing demo, and broader app work.",
      selectedDescription:
        "The public portfolio shows shipped code, real client context, and product depth across different verticals.",
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
      role: "Ecosystem role",
    },
    proof: [
      ["1", "live marketing site in the portfolio"],
      ["1", "mobile product included"],
      ["3", "real client sites deployed live"],
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
        "Un portfolio centre sur des sites reels lances, une demo marketing et du travail applicatif plus large.",
      selectedDescription:
        "Le portfolio public montre du code livre, du contexte client reel et de la profondeur produit dans differents domaines.",
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
      role: "Role ecosysteme",
    },
    proof: [
      ["1", "site marketing live dans le portfolio"],
      ["1", "produit mobile inclus"],
      ["3", "vrais sites clients deployes live"],
      ["50", "tests passent dans la fondation"],
    ],
  },
} as const;

export const upcomingProjects = [
  "More client case studies as they become public",
  "Additional SaaS/dashboard builds from the same foundation",
];

export const upcomingProjectsFr = [
  "Plus d'etudes de cas client quand elles pourront etre publiques",
  "D'autres builds SaaS/dashboard a partir de la meme base",
];

export const ecosystemNarrative = {
  en: {
    eyebrow: "Focused portfolio",
    title: "The public portfolio keeps only the strongest work.",
    description:
      "The visible portfolio now centers on the real launched sites and the Luma Studio marketing demo. ClientHub, CommerceKit, and EventPass are available on request.",
    database: "Shared database: Supabase KV Portfolio",
    foundation: "Foundation: kv-web-starter boilerplate",
    cta: "Explore the path",
  },
  fr: {
    eyebrow: "Portfolio cible",
    title: "Le portfolio public garde seulement le travail le plus fort.",
    description:
      "Le portfolio visible se concentre maintenant sur les vrais sites lances et la demo marketing Luma Studio. ClientHub, CommerceKit et EventPass sont disponibles sur demande.",
    database: "Base partagee: Supabase KV Portfolio",
    foundation: "Fondation: boilerplate kv-web-starter",
    cta: "Explorer le parcours",
  },
} as const;

export const ecosystemFlow = {
  en: [
    {
      step: "01",
      title: "Attract a visitor",
      description: "Luma Studio presents the brand, services, proof, and contact path that starts the business journey.",
      projects: ["luma-studio"],
    },
  ],
  fr: [
    {
      step: "01",
      title: "Attirer un visiteur",
      description: "Luma Studio presente la marque, les services, les preuves et le chemin de contact qui lance le parcours.",
      projects: ["luma-studio"],
    },
  ],
} as const;

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
