export type ProjectStatus = "live" | "private" | "coming-soon";

export type ProjectImage = {
  src: string;
  alt: string;
  tall?: boolean;
};

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
  image?: ProjectImage;
  gallery?: ProjectImage[];
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

export const aboutProfile = {
  fullName: "Kurtis Verres",
  location: "Laval, QC, Canada",
  email: "verskurtis@live.fr",
  en: {
    role: "Telecom technician with a hybrid IT and web development profile",
    intro:
      "Telecom technician at Bell Solutions Techniques with an AEC in computer science and hands-on web development experience. A hybrid profile combining network troubleshooting, technical support, customer service, field diagnostics, and a working understanding of web applications. Used to analyzing technical problems, documenting interventions, explaining solutions to non-technical users, and working where service reliability is critical.",
    objective:
      "Looking for a network technician, NOC analyst, level 2 IT support, or infrastructure technician role -- this portfolio shows the technical depth behind the resume.",
    experience: {
      title: "Telecom technician / Internet services technician",
      company: "Bell Solutions Techniques / BST -- Laval / Montreal, QC",
      period: "2024 - present",
      bullets: [
        "Diagnose and resolve Internet connectivity, telecom, and customer equipment problems.",
        "Install, configure, and verify residential and network service equipment.",
        "Run signal, connection, and performance tests to isolate the source of outages.",
        "Explain technical problems and solutions clearly to customers.",
        "Prioritize field interventions by urgency, complexity, and customer impact.",
        "Document interventions and follow up on recurring problems.",
        "Escalate and collaborate with internal teams when an issue goes beyond field work.",
      ],
    },
    skillGroups: [
      {
        title: "Networks and telecom",
        items: ["TCP/IP", "Wi-Fi", "Router / modem", "Fiber / coax", "Signal diagnostics", "Connection testing", "Field service"],
      },
      {
        title: "IT support",
        items: ["User support", "Hardware and software diagnostics", "Incident resolution", "Remote assistance", "Ticketing tools", "Intervention documentation"],
      },
      {
        title: "IT environments",
        items: ["Windows", "Microsoft 365", "Teams", "Active Directory (notions)", "VPN / DNS / DHCP (notions)", "Browser dev tools"],
      },
      {
        title: "Web development",
        items: ["HTML / CSS / JavaScript", "TypeScript", "React / Next.js", "Node.js", "REST APIs", "Supabase / MongoDB / MySQL", "Sanity", "Git / GitHub"],
      },
    ],
    languages: ["French: fluent", "English: functional / professional"],
  },
  fr: {
    role: "Technicien telecom avec un profil hybride TI et developpement web",
    intro:
      "Technicien telecom chez Bell Solutions Techniques avec une AEC en informatique et une experience pratique en developpement web. Profil hybride combinant depannage reseau, support technique, service client, diagnostic terrain et comprehension des applications web. Habitue a analyser des problemes techniques, documenter les interventions, vulgariser les solutions aux utilisateurs et travailler dans des environnements ou la fiabilite du service est essentielle.",
    objective:
      "Recherche un poste de technicien reseau, analyste NOC, technicien support TI niveau 2 ou technicien infrastructure -- ce portfolio montre la profondeur technique derriere le CV.",
    experience: {
      title: "Technicien telecom / Technicien de services Internet",
      company: "Bell Solutions Techniques / BST -- Laval / Montreal, QC",
      period: "2024 - present",
      bullets: [
        "Diagnostiquer et resoudre des problemes de connectivite Internet, telecom et equipements clients.",
        "Installer, configurer et verifier des equipements residentiels et reseau.",
        "Effectuer des tests de signal, de connexion et de performance pour isoler la source des pannes.",
        "Expliquer clairement les problemes techniques et les solutions aux clients.",
        "Prioriser les interventions terrain selon l'urgence, la complexite et l'impact client.",
        "Documenter les interventions et assurer le suivi des problemes recurrents.",
        "Escalader et collaborer avec les equipes internes quand le probleme depasse le terrain.",
      ],
    },
    skillGroups: [
      {
        title: "Reseaux et telecom",
        items: ["TCP/IP", "Wi-Fi", "Routeur / modem", "Fibre / coaxial", "Diagnostic de signal", "Tests de connexion", "Service terrain"],
      },
      {
        title: "Support TI",
        items: ["Support utilisateur", "Diagnostic materiel et logiciel", "Resolution d'incidents", "Assistance a distance", "Outils de ticketing", "Documentation des interventions"],
      },
      {
        title: "Environnements informatiques",
        items: ["Windows", "Microsoft 365", "Teams", "Active Directory (notions)", "VPN / DNS / DHCP (notions)", "Outils developpeur navigateur"],
      },
      {
        title: "Developpement web",
        items: ["HTML / CSS / JavaScript", "TypeScript", "React / Next.js", "Node.js", "API REST", "Supabase / MongoDB / MySQL", "Sanity", "Git / GitHub"],
      },
    ],
    languages: ["Francais : courant", "Anglais : fonctionnel / professionnel"],
  },
} as const;

export const featuredProjects: PortfolioProject[] = [
  {
    slug: "eventpic",
    name: "EventPic",
    category: "Mobile event photo app",
    status: "private",
    summary:
      "A React Native app for real-time photo sharing at events. Attendees join via QR code or event code, capture photos, and browse a shared live feed.",
    description:
      "EventPic is a mobile-first event photo-sharing platform. Guests join a private event session via a generated code or QR code and contribute photos to a shared, real-time feed. The app features per-event theming, admin moderation with approval flows, swipe-to-browse gallery navigation, offline detection, gallery save with FileSystem download, and a slideshow generator with Deezer music selection — all backed by a Cloudflare Workers edge API.",
    stack: [
      "React Native",
      "Expo SDK 54",
      "TypeScript",
      "Cloudflare Workers",
      "TanStack Query",
      "Zustand",
      "expo-camera",
      "expo-media-library",
    ],
    highlights: [
      "Real-time shared photo feed with infinite scroll",
      "Per-event accent theming applied at navigation level",
      "Admin moderation with approval flows and role-based UI",
    ],
    recruiterValue:
      "Shows native mobile development beyond a basic screen: real-time data, role-based access, hardware APIs (camera, gallery, haptics, deep links), and a Cloudflare Workers edge backend — all production-shaped without a managed cloud.",
    buildNotes: [
      "JWT-based event sessions with distinct admin and guest roles.",
      "Event type maps to an accent palette (wedding, birthday, corporate…) applied globally at navigation level via Zustand.",
      "Cloudflare Workers + R2 for photo upload, feed API, and admin token flow.",
    ],
    fr: {
      category: "App mobile partage photo evenement",
      summary:
        "Une app React Native pour partager des photos en temps reel lors d'evenements. Les invites rejoignent via QR code ou code evenement et consultent un fil commun en direct.",
      description:
        "EventPic est une plateforme mobile de partage de photos lors d'evenements. Les invites rejoignent une session privee par code ou QR code et contribuent a un fil commun en temps reel. L'app integre un theme par type d'evenement, une moderation admin avec flux d'approbation, navigation a glissement entre photos, detection hors ligne, sauvegarde galerie avec telechargement FileSystem et un generateur de diaporama avec selection musicale Deezer.",
      highlights: [
        "Fil photos partage en temps reel avec scroll infini",
        "Theme accent par evenement applique au niveau navigation",
        "Moderation admin avec flux approbation et UI par role",
      ],
      recruiterValue:
        "Montre le developpement mobile natif au-dela d'un simple ecran: donnees temps reel, acces base sur les roles, APIs hardware (camera, galerie, haptique, liens profonds) et un backend edge Cloudflare Workers sans cloud gere.",
      buildNotes: [
        "Sessions JWT avec roles admin et invite distincts.",
        "Le type d'evenement mappe sur une palette accent (mariage, anniversaire, corporate...) appliquee globalement via Zustand.",
        "Cloudflare Workers + R2 pour upload photos, API fil et flux token admin.",
      ],
    },
    image: {
      src: "/projects/eventpic/card.png",
      alt: "EventPic ambiance picker with per-event gold theme",
      tall: true,
    },
    gallery: [
      { src: "/projects/eventpic/card.png", alt: "Event ambiance picker with themed cards", tall: true },
      { src: "/projects/eventpic/shot-1.png", alt: "Event creation form", tall: true },
      { src: "/projects/eventpic/shot-2.png", alt: "QR code invitation sheet", tall: true },
      { src: "/projects/eventpic/shot-3.png", alt: "Event settings with color themes", tall: true },
    ],
  },
  {
    slug: "luma-studio",
    name: "Luma Studio",
    category: "Premium marketing website",
    status: "live",
    ecosystemRole:
      "Acts as the public brand front door that explains the company, generates trust, and sends visitors toward quotes, booking, or contact.",
    summary: "A bilingual interior design studio marketing site with services, portfolio pages, contact forms, and SEO structure.",
    description:
      "Luma Studio is the marketing-site showcase of the kv-web-starter boilerplate. It shows how the same foundation becomes a polished brand website with FR/EN support, real imagery, validated contact forms, and SEO-ready page structure.",
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
      summary: "Un site marketing bilingue pour studio interieur avec services, portfolio, formulaires de contact et structure SEO.",
      description:
        "Luma Studio est la demo site marketing du boilerplate kv-web-starter. Il montre comment la meme base devient un site de marque soigne avec support FR/EN, images reelles, formulaires valides et structure SEO.",
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
    image: {
      src: "/projects/luma-studio/card.png",
      alt: "Luma Studio marketing site homepage",
    },
    gallery: [{ src: "/projects/luma-studio/card.png", alt: "Luma Studio homepage hero" }],
  },
  {
    slug: "quotepilot",
    name: "QuotePilot",
    category: "Quotes and proposals SaaS",
    status: "live",
    ecosystemRole:
      "Turns the interest generated by Luma Studio into structured quotes that start the client relationship.",
    summary:
      "A bilingual quoting tool where small businesses create, send, and track professional quotes from one dashboard.",
    description:
      "QuotePilot is the quoting module of the portfolio ecosystem. It covers quote creation with line items, statuses from draft to accepted, a client-facing quote view, and dashboard metrics -- built from the kv-web-starter foundation with Prisma data models and validated server actions.",
    stack: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Auth.js"],
    highlights: [
      "Quote lifecycle from draft to accepted",
      "Client-facing quote view",
      "Dashboard metrics and statuses",
    ],
    recruiterValue:
      "Shows a business CRUD product with real data modeling, status workflows, and a bilingual product surface beyond a static demo.",
    buildNotes: [
      "Built from kv-web-starter with Prisma models for quotes and line items.",
      "Quote statuses drive both the dashboard metrics and the client view.",
      "Connected to the shared Supabase KV Portfolio ecosystem data.",
    ],
    fr: {
      category: "SaaS soumissions et propositions",
      summary:
        "Un outil de soumissions bilingue ou les PME creent, envoient et suivent des soumissions professionnelles depuis un seul dashboard.",
      description:
        "QuotePilot est le module soumissions de l'ecosysteme portfolio. Il couvre la creation de soumissions avec lignes detaillees, les statuts de brouillon a accepte, une vue client et des metriques dashboard -- construit depuis la fondation kv-web-starter avec modeles Prisma et actions serveur validees.",
      highlights: [
        "Cycle de vie complet de brouillon a accepte",
        "Vue soumission cote client",
        "Metriques dashboard et statuts",
      ],
      recruiterValue:
        "Montre un produit CRUD d'affaires avec vraie modelisation de donnees, workflows de statuts et une surface produit bilingue au-dela d'une demo statique.",
      buildNotes: [
        "Construit depuis kv-web-starter avec modeles Prisma pour soumissions et lignes.",
        "Les statuts alimentent les metriques dashboard et la vue client.",
        "Connecte aux donnees partagees Supabase KV Portfolio.",
      ],
      ecosystemRole:
        "Transforme l'interet genere par Luma Studio en soumissions structurees qui demarrent la relation client.",
    },
    liveUrl: "https://quotepilot-omega.vercel.app",
    repoUrl: "https://github.com/kurtisv/quotepilot",
    image: {
      src: "/projects/quotepilot/card.png",
      alt: "QuotePilot landing page",
    },
    gallery: [{ src: "/projects/quotepilot/card.png", alt: "QuotePilot landing page" }],
  },
  {
    slug: "gasmobile",
    name: "GasMobile",
    category: "Mobile application",
    status: "live",
    summary: "A React Native mobile app for finding gas stations, comparing fuel prices, and predicting price trends.",
    description:
      "GasMobile is a production-grade mobile product built with React Native and Expo. It combines real-time gas station maps, fuel price comparison, and a predictive pricing engine backed by live market data and a Sanity content layer.",
    stack: ["React Native", "Expo", "TypeScript", "Maps", "Sanity"],
    highlights: ["Real-time maps", "Price prediction engine", "Sanity content"],
    recruiterValue:
      "Shows cross-platform mobile development, real-time data integration, map workflows, and product thinking beyond web demos.",
    buildNotes: [
      "Built with React Native and Expo for iOS and Android.",
      "Integrates live gas price data with a prediction engine.",
      "Sanity powers editorial and station content.",
    ],
    fr: {
      category: "Application mobile",
      summary: "Une app mobile React Native pour trouver des stations, comparer les prix carburant et predire les tendances de prix.",
      description:
        "GasMobile est un produit mobile de qualite production construit avec React Native et Expo. Il combine cartes de stations en temps reel, comparaison de prix carburant et un moteur de prediction tarifaire alimente par des donnees marche live.",
      highlights: ["Cartes en temps reel", "Moteur de prediction prix", "Contenu Sanity"],
      recruiterValue:
        "Montre le developpement mobile multiplateforme, l'integration de donnees en temps reel, les flux cartes et une vision produit au-dela des demos web.",
      buildNotes: [
        "Construit avec React Native et Expo pour iOS et Android.",
        "Integre des donnees prix carburant live avec un moteur de prediction.",
        "Sanity alimente le contenu editorialv et les stations.",
      ],
    },
    repoUrl: "https://github.com/kurtisv/gasmobile",
    image: {
      src: "/projects/gasmobile/card.png",
      alt: "GasMobile station sheet with fuel price and trust badge",
      tall: true,
    },
    gallery: [
      { src: "/projects/gasmobile/card.png", alt: "Station sheet with price and itinerary actions", tall: true },
      { src: "/projects/gasmobile/shot-1.png", alt: "Live map with station markers", tall: true },
      { src: "/projects/gasmobile/shot-2.png", alt: "Fuel prices with regional history", tall: true },
    ],
  },
  {
    slug: "speedzone",
    name: "SpeedZone",
    category: "Automotive community platform",
    status: "live",
    summary: "A full-featured automotive community platform with vehicle profiles, social features, articles, and Sanity CMS.",
    description:
      "SpeedZone is a larger portfolio application for the automotive space. It combines Next.js, Sanity CMS, Google authentication, vehicle listings, owner profiles, follow functionality, community comments, and editorial articles into one platform.",
    stack: ["Next.js", "React", "TypeScript", "Sanity", "NextAuth", "Tailwind CSS"],
    highlights: ["Automotive community", "Sanity CMS", "Auth and user profiles"],
    recruiterValue:
      "Shows a richer product surface than a landing page: auth, content modeling, user-generated listings, comments, and a domain-specific visual direction.",
    buildNotes: [
      "Built with a distinct dark/red automotive visual identity.",
      "Connects public content, authenticated user flows, Sanity data, and article/detail pages.",
      "Live at cardream-phi.vercel.app",
    ],
    fr: {
      category: "Plateforme communautaire automobile",
      summary:
        "Une plateforme communautaire automobile complete avec profils vehicules, fonctionnalites sociales, articles et Sanity CMS.",
      description:
        "SpeedZone est une application portfolio plus large dans l'univers automobile. Elle combine Next.js, Sanity CMS, l'authentification Google, des fiches vehicules, profils proprietaires, suivi, commentaires communautaires et articles editoriaux.",
      highlights: ["Communaute automobile", "Sanity CMS", "Auth et profils"],
      recruiterValue:
        "Montre une surface produit plus riche qu'une page vitrine: auth, modelisation de contenu, publications utilisateur, commentaires et direction visuelle specifique au domaine.",
      buildNotes: [
        "Construit avec une identite visuelle sombre/rouge distincte.",
        "Relie contenu public, flux authentifies, donnees Sanity et pages article/detail.",
        "Live sur cardream-phi.vercel.app",
      ],
    },
    repoUrl: "https://github.com/kurtisv/speedzone",
    liveUrl: "https://cardream-phi.vercel.app",
    image: {
      src: "/projects/speedzone/card.png",
      alt: "SpeedZone automotive community homepage",
    },
    gallery: [{ src: "/projects/speedzone/card.png", alt: "SpeedZone homepage" }],
  },
  {
    slug: "suze-immo",
    name: "Suze Immo",
    category: "Real client website",
    status: "live",
    summary: "A live real estate client website with property presentation, contact flows, and a trust-focused design.",
    description:
      "Suze Immo is a delivered client website for a real estate professional. It covers property presentation, search context, a conversion-focused layout, and a clean design that works for a real audience.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: ["Client context", "Business website", "SEO-minded structure"],
    recruiterValue:
      "Shows real client website context and the ability to work on functional business sites that need trust, conversion, SEO, and responsive UI.",
    buildNotes: [
      "Live site available for direct recruiter review.",
      "Delivers property presentation, contact flows, and trust-building UX.",
      "Built for a real client with SEO, responsive layout, and brand alignment.",
    ],
    fr: {
      category: "Site client reel",
      summary: "Un site client immobilier live avec presentation de proprietes, flux de contact et design oriente confiance.",
      description:
        "Suze Immo est un site livre pour un professionnel de l'immobilier. Il couvre la presentation de proprietes, le contexte de recherche, une mise en page orientee conversion et un design propre adapte a un vrai public.",
      highlights: ["Contexte client", "Site d'affaires", "Structure orientee SEO"],
      recruiterValue:
        "Montre un contexte client reel et la capacite a livrer des sites fonctionnels qui demandent confiance, conversion, SEO et UI responsive.",
      buildNotes: [
        "Site live disponible pour revue recruteur directe.",
        "Livraison: presentation proprietes, flux contact et UX de confiance.",
        "Construit pour un vrai client avec SEO, layout responsive et alignement marque.",
      ],
    },
    liveUrl: "https://suzeimmo.com",
    image: {
      src: "/projects/suze-immo/card.png",
      alt: "Suze Immo real estate website homepage",
    },
    gallery: [{ src: "/projects/suze-immo/card.png", alt: "Suze Immo homepage" }],
  },
  {
    slug: "kv-web-starter",
    name: "KV Web Starter",
    category: "Next.js boilerplate",
    status: "live",
    summary: "A reusable Next.js starter with auth, database, billing structure, bilingual support, and a test suite.",
    description:
      "KV Web Starter is the shared foundation behind every portfolio project on this site. It ships with Auth.js, Prisma, Supabase, Tailwind CSS, Zod validation, FR/EN i18n, and a passing test suite so each new product starts from a verified base.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Supabase", "Auth.js", "Zod"],
    highlights: ["Auth + DB ready out of the box", "FR/EN i18n built in", "50+ tests passing"],
    recruiterValue:
      "Shows systems thinking: instead of rebuilding the same foundation each project, I maintain a versioned boilerplate that every product in this portfolio inherits from.",
    buildNotes: [
      "Every portfolio project on this site is built from this starter.",
      "Includes auth, data layer, validation, i18n, and deployment config out of the box.",
      "Public repo so recruiters can inspect the foundation directly.",
    ],
    fr: {
      category: "Boilerplate Next.js",
      summary: "Un starter Next.js reutilisable avec auth, base de donnees, structure facturation, support bilingue et suite de tests.",
      description:
        "KV Web Starter est la base partagee derriere chaque projet portfolio de ce site. Il inclut Auth.js, Prisma, Supabase, Tailwind CSS, validation Zod, i18n FR/EN et une suite de tests pour demarrer chaque produit sur une base verifiee.",
      highlights: ["Auth + BDD prets hors de la boite", "i18n FR/EN integre", "50+ tests qui passent"],
      recruiterValue:
        "Montre une pensee systeme: plutot que de reconstruire la meme base a chaque projet, je maintiens un boilerplate versionne dont chaque produit de ce portfolio herite.",
      buildNotes: [
        "Chaque projet portfolio de ce site est construit depuis ce starter.",
        "Inclut auth, couche donnees, validation, i18n et config de deploiement.",
        "Repo public pour que les recruteurs inspectent la fondation directement.",
      ],
    },
    repoUrl: "https://github.com/kurtisv/kv-web-starter",
    image: {
      src: "/projects/kv-web-starter/card.png",
      alt: "kv-web-starter public GitHub repository",
    },
    gallery: [{ src: "/projects/kv-web-starter/card.png", alt: "kv-web-starter repository on GitHub" }],
  },
];

export function getProjectBySlug(slug: string) {
  return publicPortfolioProjects.find((project) => project.slug === slug);
}

export const ecosystemOrder = [
  "eventpic",
  "luma-studio",
  "quotepilot",
] as const;

export const publicPortfolioProjects = featuredProjects;

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
      cv: "Resume",
      cta: "Work together",
    },
    home: {
      eyebrow: "Developer portfolio",
      title: "I build web products that are useful, shipped, and easy to review.",
      projects: "View projects",
      github: "GitHub",
      selectedEyebrow: "Selected work",
      selectedTitle:
        "A portfolio centered on real launched sites, live products, and mobile apps.",
      selectedDescription:
        "Live sites built from one boilerplate, two mobile apps, and real client launches -- shipped code with product depth across different verticals.",
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
      ["7", "projects shipped across the portfolio"],
      ["4", "live sites online"],
      ["2", "mobile apps included"],
      ["2", "real client sites live"],
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
      cv: "CV",
      cta: "Travailler ensemble",
    },
    home: {
      eyebrow: "Portfolio developpeur",
      title: "Je construis des produits web utiles, livres et faciles a reviser.",
      projects: "Voir les projets",
      github: "GitHub",
      selectedEyebrow: "Travaux selectionnes",
      selectedTitle:
        "Un portfolio centre sur de vrais sites lances, des produits live et des apps mobiles.",
      selectedDescription:
        "Des sites live construits depuis un seul boilerplate, deux apps mobiles et de vrais lancements clients -- du code livre avec de la profondeur produit dans differents domaines.",
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
      ["7", "projets livres dans le portfolio"],
      ["4", "sites live en ligne"],
      ["2", "apps mobiles incluses"],
      ["2", "vrais sites clients live"],
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
    title: "The public portfolio keeps only finished work.",
    description:
      "The visible portfolio centers on complete projects: EventPic, the live Luma Studio marketing demo, QuotePilot, the real client launches, and the kv-web-starter foundation. Other ecosystem modules will join once they are finished.",
    database: "Shared database: Supabase KV Portfolio",
    foundation: "Foundation: kv-web-starter boilerplate",
    cta: "Explore the path",
  },
  fr: {
    eyebrow: "Portfolio cible",
    title: "Le portfolio public garde seulement le travail termine.",
    description:
      "Le portfolio visible se concentre sur les projets complets: EventPic, la demo marketing live Luma Studio, QuotePilot, les vrais sites clients lances et la fondation kv-web-starter. Les autres modules de l'ecosysteme s'ajouteront une fois termines.",
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
    {
      step: "02",
      title: "Quote the work",
      description: "QuotePilot turns the inquiry into a structured quote with line items and statuses.",
      projects: ["quotepilot"],
    },
  ],
  fr: [
    {
      step: "01",
      title: "Attirer un visiteur",
      description: "Luma Studio presente la marque, les services, les preuves et le chemin de contact qui lance le parcours.",
      projects: ["luma-studio"],
    },
    {
      step: "02",
      title: "Soumissionner le travail",
      description: "QuotePilot transforme la demande en soumission structuree avec lignes et statuts.",
      projects: ["quotepilot"],
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
