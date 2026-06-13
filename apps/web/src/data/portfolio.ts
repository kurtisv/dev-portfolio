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
      "EventPic is a mobile-first event photo-sharing platform built with React Native and Expo SDK 54. Guests scan a QR code or enter an event code to join a private session -- no account, just a display name -- and every photo they capture lands in a shared feed that refreshes in real time with infinite scroll. The host creates an event in three steps (name, date, ambiance) and picks a theme -- wedding, birthday, family, corporate, sports -- that recolors the entire app at navigation level through a Zustand store. Admins get a moderation queue with approval flows, a role-based UI, and a shareable invitation sheet with QR code and access code. The app handles the hard mobile details: offline detection, saving photos to the device gallery through the FileSystem API, haptics, deep links, lazy-loaded push notifications, and an animated landing mosaic of real event photography. A slideshow generator with Deezer music search turns the feed into a ready-to-share memory. The backend is a Cloudflare Workers edge API with R2 object storage and JWT sessions that separate admin and guest roles -- production-shaped infrastructure without a managed cloud.",
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
        "EventPic est une plateforme mobile de partage de photos d'evenements construite avec React Native et Expo SDK 54. Les invites scannent un QR code ou entrent un code d'evenement pour rejoindre une session privee -- aucun compte, juste un pseudo -- et chaque photo capturee arrive dans un fil commun rafraichi en temps reel avec scroll infini. L'hote cree son evenement en trois etapes (nom, date, ambiance) et choisit un theme -- mariage, anniversaire, famille, corporate, sport -- qui recolore toute l'app au niveau navigation via un store Zustand. Les admins disposent d'une file de moderation avec approbation, d'une UI par role et d'une feuille d'invitation partageable avec QR code et code d'acces. L'app gere les details mobiles difficiles: detection hors ligne, sauvegarde des photos dans la galerie via l'API FileSystem, haptique, liens profonds, notifications push chargees a la demande et une mosaique animee de vraies photos d'evenements en page d'accueil. Un generateur de diaporama avec recherche musicale Deezer transforme le fil en souvenir pret a partager. Le backend est une API edge Cloudflare Workers avec stockage R2 et sessions JWT separant les roles admin et invite -- une infrastructure de forme production sans cloud gere.",
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
      "Luma Studio is a complete bilingual marketing website for an interior architecture studio, built to prove the kv-web-starter foundation can become a polished brand site and not just dashboards. It ships real pages -- home, services, selected work, about, case study, and contact -- with a calm editorial design, real photography treatment, and an FR/EN switcher that localizes every section. The contact form runs through a Zod-validated server action wired for Resend delivery. Under the surface it keeps the engineering bar of the starter: strict TypeScript, semantic SEO-ready structure, accessibility passes, and the inherited Vitest and CI setup. The case study page documents the design decisions, so a reviewer can read why the site looks the way it does instead of only seeing the result.",
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
        "Luma Studio est un site marketing bilingue complet pour un studio d'architecture interieure, construit pour prouver que la fondation kv-web-starter peut devenir un site de marque soigne et pas seulement des dashboards. Il livre de vraies pages -- accueil, services, realisations, a propos, etude de cas et contact -- avec un design editorial calme, un vrai traitement photographique et un commutateur FR/EN qui localise chaque section. Le formulaire de contact passe par une action serveur validee avec Zod et prete pour l'envoi via Resend. Sous la surface, le niveau d'ingenierie du starter est maintenu: TypeScript strict, structure semantique prete pour le SEO, passes d'accessibilite et la configuration Vitest et CI heritee. La page etude de cas documente les decisions de design, pour qu'un reviewer puisse lire pourquoi le site a cette apparence au lieu de seulement voir le resultat.",
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
    slug: "quotepilot",
    name: "QuotePilot",
    category: "Quotes and proposals SaaS",
    status: "live",
    ecosystemRole:
      "Turns the interest generated by Luma Studio into structured quotes that start the client relationship.",
    summary:
      "A bilingual quoting tool where small businesses create, send, and track professional quotes from one dashboard.",
    description:
      "QuotePilot is a bilingual quoting SaaS for small businesses and freelancers: create a professional quote with detailed line items, send it, and track it through its whole lifecycle. Quotes move through explicit statuses -- draft, sent, accepted, declined -- and every transition feeds the dashboard metrics, so the pipeline stays readable at a glance. Clients receive a clean client-facing view of their quote without creating an account. The data layer is Prisma on PostgreSQL with models for quotes, line items, and clients; every mutation runs through a validated server action; and the French-first interface ('Soumissions professionnelles') matches how Quebec small businesses actually talk about quotes. Built from kv-web-starter, it inherits the auth-ready structure, FR/EN i18n, and the test suite of the foundation.",
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
        "QuotePilot est un SaaS de soumissions bilingue pour PME et independants: creer une soumission professionnelle avec lignes detaillees, l'envoyer et la suivre sur tout son cycle de vie. Les soumissions passent par des statuts explicites -- brouillon, envoyee, acceptee, refusee -- et chaque transition alimente les metriques du dashboard, pour que le pipeline reste lisible d'un coup d'oeil. Le client recoit une vue propre de sa soumission sans creer de compte. La couche de donnees est Prisma sur PostgreSQL avec des modeles pour soumissions, lignes et clients; chaque mutation passe par une action serveur validee; et l'interface d'abord en francais ('Soumissions professionnelles') correspond a la facon dont les PME quebecoises parlent vraiment de soumissions. Construit depuis kv-web-starter, il herite de la structure prete pour l'auth, de l'i18n FR/EN et de la suite de tests de la fondation.",
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
  },
  {
    slug: "gasmobile",
    name: "GasMobile",
    category: "Mobile application",
    status: "live",
    summary: "A React Native mobile app for finding gas stations, comparing fuel prices, and predicting price trends.",
    description:
      "GasMobile is a production-grade React Native app for finding gas stations and paying less for fuel in Quebec. The map shows nearby stations with live prices; each station sheet compares its price against the regional average with a clear trust badge, lists every fuel grade, and shows the price history with the current trend over the last days. A prediction engine estimates where prices are heading, so users know whether to fill up today or wait. An account unlocks favorites and smart routes that find the best-priced stations along a real itinerary. The product side is just as real: subscription billing with payment webhooks, a Supabase backend, Sanity-powered editorial content, government open-data integration with price-freshness logic and fallbacks when data is stale or incomplete, and EAS production builds for iOS and Android. French-first UX built for a real audience.",
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
        "GasMobile est une app React Native de qualite production pour trouver des stations-service et payer son essence moins cher au Quebec. La carte montre les stations proches avec leurs prix en direct; chaque fiche station compare son prix a la moyenne regionale avec un badge de confiance clair, liste chaque type de carburant et affiche l'historique des prix avec la tendance des derniers jours. Un moteur de prediction estime ou s'en vont les prix, pour savoir s'il faut faire le plein aujourd'hui ou attendre. Un compte debloque les favoris et les trajets intelligents qui trouvent les stations les moins cheres le long d'un vrai itineraire. Le cote produit est tout aussi reel: abonnements avec webhooks de paiement, backend Supabase, contenu editorial Sanity, integration de donnees ouvertes gouvernementales avec logique de fraicheur des prix et fallbacks quand les donnees sont vieilles ou incompletes, et builds EAS de production pour iOS et Android. UX d'abord en francais, construite pour un vrai public.",
      highlights: ["Cartes en temps reel", "Moteur de prediction prix", "Contenu Sanity"],
      recruiterValue:
        "Montre le developpement mobile multiplateforme, l'integration de donnees en temps reel, les flux cartes et une vision produit au-dela des demos web.",
      buildNotes: [
        "Construit avec React Native et Expo pour iOS et Android.",
        "Integre des donnees prix carburant live avec un moteur de prediction.",
        "Sanity alimente le contenu editorial et les stations.",
      ],
    },
    liveUrl: "https://gasmobile-web.vercel.app",
    repoUrl: "https://github.com/kurtisv/gasmobile",
  },
  {
    slug: "speedzone",
    name: "SpeedZone",
    category: "Automotive community platform",
    status: "live",
    summary: "A full-featured automotive community platform with vehicle profiles, social features, articles, and Sanity CMS.",
    description:
      "SpeedZone is a full automotive community platform, not a landing page. Members sign in with Google through NextAuth, create vehicle profiles with photos and specs, follow other owners, and comment on their builds. An editorial layer powered by Sanity CMS publishes articles alongside the user-generated garage, so the platform mixes curated content with community activity. Public surfaces (articles, vehicle pages, owner profiles) connect to authenticated flows (posting, following, commenting) on a distinct dark and red automotive identity. The project demonstrates content modeling in Sanity, auth and session handling, user-generated content with a moderation-friendly structure, and SEO-minded detail pages -- all live in production.",
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
        "SpeedZone est une plateforme communautaire automobile complete, pas une page vitrine. Les membres se connectent avec Google via NextAuth, creent des fiches vehicules avec photos et specs, suivent d'autres proprietaires et commentent leurs builds. Une couche editoriale propulsee par Sanity CMS publie des articles aux cotes du garage genere par les utilisateurs, melant contenu cure et activite communautaire. Les surfaces publiques (articles, fiches vehicules, profils) se connectent aux flux authentifies (publication, suivi, commentaires) sur une identite automobile sombre et rouge distincte. Le projet demontre la modelisation de contenu dans Sanity, la gestion d'auth et de sessions, le contenu genere par les utilisateurs avec une structure prete pour la moderation et des pages detail pensees SEO -- le tout live en production.",
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
  },
  {
    slug: "suze-immo",
    name: "Suze Immo",
    category: "Real client website",
    status: "live",
    summary: "A live real estate client website with property presentation, contact flows, and a trust-focused design.",
    description:
      "Suze Immo is a delivered client website for a real estate professional, live at suzeimmo.com and serving a real audience today. The site presents properties with photo-forward layouts, gives buyers and sellers a clear contact path, and builds the trust signals a real estate audience expects: clean typography, fast loads, responsive behavior on every screen, and an SEO structure that makes listings and service pages findable. An administration layer on Supabase (authentication, file storage, SQL) lets the owner publish and manage listings without touching code. Built with Next.js, TypeScript, and Tailwind CSS, the project covers the full client-work cycle: understanding a non-technical client's needs, translating them into pages and flows, deploying to production, and handing over a site the client actually uses.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
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
        "Suze Immo est un site client livre pour un professionnel de l'immobilier, en ligne sur suzeimmo.com et au service d'un vrai public aujourd'hui. Le site presente les proprietes avec des mises en page axees photo, donne aux acheteurs et vendeurs un chemin de contact clair et construit les signaux de confiance qu'un public immobilier attend: typographie propre, chargements rapides, comportement responsive sur chaque ecran et une structure SEO qui rend les fiches et pages de services trouvables. Une couche d'administration sur Supabase (authentification, stockage de fichiers, SQL) permet au proprietaire de publier et gerer ses proprietes sans toucher au code. Construit avec Next.js, TypeScript et Tailwind CSS, le projet couvre le cycle complet du travail client: comprendre les besoins d'un client non technique, les traduire en pages et en flux, deployer en production et livrer un site que le client utilise vraiment.",
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
  },
  {
    slug: "kv-web-starter",
    name: "KV Web Starter",
    category: "Next.js boilerplate",
    status: "live",
    summary: "A reusable Next.js starter with auth, database, billing structure, bilingual support, and a test suite.",
    description:
      "KV Web Starter is the foundation every project on this site starts from -- a versioned, public Next.js monorepo boilerplate rather than a folder copied between projects. It ships three reusable project shapes (marketing site, booking site, SaaS/API portal) on one stack: Next.js App Router, strict TypeScript, Tailwind CSS v4 with local shadcn-style components, Prisma on PostgreSQL, Auth.js with the Prisma adapter, Zod validation, a Stripe-ready billing structure, Resend and React Email-ready messaging, and FR/EN i18n. A 50+ test Vitest suite and a CI workflow guard the base, so every product built from it starts verified instead of hopeful. The repo is public on GitHub precisely so a reviewer can inspect the foundation, compare it with the products built from it -- Luma Studio, QuotePilot, and this portfolio -- and read the maintenance discipline in the commit history.",
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
        "KV Web Starter est la fondation d'ou part chaque projet de ce site -- un boilerplate monorepo Next.js versionne et public, plutot qu'un dossier copie entre projets. Il livre trois formes de projets reutilisables (site marketing, site de reservation, portail SaaS/API) sur une seule stack: Next.js App Router, TypeScript strict, Tailwind CSS v4 avec composants locaux de style shadcn, Prisma sur PostgreSQL, Auth.js avec l'adaptateur Prisma, validation Zod, structure de facturation prete pour Stripe, messagerie prete pour Resend et React Email, et i18n FR/EN. Une suite Vitest de 50+ tests et un workflow CI gardent la base, pour que chaque produit construit dessus demarre verifie plutot qu'optimiste. Le repo est public sur GitHub precisement pour qu'un reviewer puisse inspecter la fondation, la comparer aux produits construits dessus -- Luma Studio, QuotePilot et ce portfolio -- et lire la discipline de maintenance dans l'historique des commits.",
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
      ["5", "live sites online"],
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
      ["5", "sites live en ligne"],
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
