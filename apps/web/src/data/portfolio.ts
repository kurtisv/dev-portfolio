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
  previewImage?: string;
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
  name: "Kurtis Verres",
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
    status: "live",
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
      "Real-time shared feed — guests join via QR code, no account required",
      "6 event themes (wedding, birthday, corporate...) recolor the entire app via Zustand",
      "Admin moderation queue, role-based UI, and Cloudflare Workers edge backend",
    ],
    recruiterValue:
      "Shows native mobile development beyond a basic screen: real-time data, role-based access, hardware APIs (camera, gallery, haptics, deep links), and a Cloudflare Workers edge backend — all production-shaped without a managed cloud.",
    buildNotes: [
      "JWT-based event sessions with distinct admin and guest roles.",
      "Event type maps to an accent palette (wedding, birthday, corporate…) applied globally at navigation level via Zustand.",
      "Cloudflare Workers + R2 for photo upload, feed API, and admin token flow.",
    ],
    previewImage: "https://image.thum.io/get/width/1200/crop/800/noanimate/https://eventpic-web.vercel.app",
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
    liveUrl: "https://eventpic-web.vercel.app",
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
    highlights: [
      "Complete bilingual site (FR/EN) with per-section localization",
      "Real photo treatment, editorial design, case study page documenting decisions",
      "Validated contact form (Zod server action), SEO structure, strict TypeScript",
    ],
    recruiterValue:
      "Demonstrates the full client marketing site lifecycle: visual direction, bilingual editorial structure, a Zod-validated contact action wired to Resend, SEO structure, and production deployment — all from the same boilerplate foundation as every other portfolio product.",
    buildNotes: [
      "FR/EN localization applied per-section with a clean switcher — same i18n pattern the boilerplate ships.",
      "Contact form is a Zod server action wired to Resend: validation, email delivery, and error handling in one file.",
      "Case study page documents the design rationale so a reviewer reads the decisions, not just the result.",
    ],
    previewImage: "https://image.thum.io/get/width/1200/crop/800/noanimate/https://luma-studio-ruddy.vercel.app",
    fr: {
      category: "Site marketing premium",
      summary: "Un site marketing bilingue pour studio interieur avec services, portfolio, formulaires de contact et structure SEO.",
      description:
        "Luma Studio est un site marketing bilingue complet pour un studio d'architecture interieure, construit pour prouver que la fondation kv-web-starter peut devenir un site de marque soigne et pas seulement des dashboards. Il livre de vraies pages -- accueil, services, realisations, a propos, etude de cas et contact -- avec un design editorial calme, un vrai traitement photographique et un commutateur FR/EN qui localise chaque section. Le formulaire de contact passe par une action serveur validee avec Zod et prete pour l'envoi via Resend. Sous la surface, le niveau d'ingenierie du starter est maintenu: TypeScript strict, structure semantique prete pour le SEO, passes d'accessibilite et la configuration Vitest et CI heritee. La page etude de cas documente les decisions de design, pour qu'un reviewer puisse lire pourquoi le site a cette apparence au lieu de seulement voir le resultat.",
      highlights: ["Support FR/EN", "Images reelles", "Structure SEO et marketing"],
      recruiterValue:
        "Demontre le cycle complet d'un site marketing client: direction visuelle, structure editoriale bilingue, action contact validee Zod couplee a Resend, structure SEO et deploy production — tout depuis la meme fondation boilerplate que les autres projets du portfolio.",
      buildNotes: [
        "Localisation FR/EN appliquee par section — meme pattern i18n que le boilerplate.",
        "Le formulaire contact est une action serveur Zod couplee a Resend: validation, livraison email et gestion d'erreurs en un seul fichier.",
        "Page etude de cas documente le raisonnement design — un reviewer lit les decisions, pas seulement le resultat.",
      ],
    },
    liveUrl: "https://luma-studio-ruddy.vercel.app",
    repoUrl: "https://github.com/kurtisv/luma-studio",
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
    highlights: [
      "Live map with real government price data + price history and trend prediction",
      "Subscription billing with Stripe webhooks, Supabase backend, EAS production builds",
      "Smart route planner finds cheapest stations along a real itinerary",
    ],
    recruiterValue:
      "Shows cross-platform mobile development, real-time data integration, map workflows, and product thinking beyond web demos.",
    buildNotes: [
      "Government open-data feed with price-freshness logic: stale data falls back gracefully instead of showing wrong prices.",
      "Stripe subscription billing with payment webhooks, Supabase user accounts, and EAS production builds for iOS and Android.",
      "Price prediction engine runs a daily trend estimate from historical data — a feature layer on top of raw data display.",
    ],
    previewImage: "https://image.thum.io/get/width/1200/crop/800/noanimate/https://gasmobile-web.vercel.app",
    fr: {
      category: "Application mobile",
      summary: "Une app mobile React Native pour trouver des stations, comparer les prix carburant et predire les tendances de prix.",
      description:
        "GasMobile est une app React Native de qualite production pour trouver des stations-service et payer son essence moins cher au Quebec. La carte montre les stations proches avec leurs prix en direct; chaque fiche station compare son prix a la moyenne regionale avec un badge de confiance clair, liste chaque type de carburant et affiche l'historique des prix avec la tendance des derniers jours. Un moteur de prediction estime ou s'en vont les prix, pour savoir s'il faut faire le plein aujourd'hui ou attendre. Un compte debloque les favoris et les trajets intelligents qui trouvent les stations les moins cheres le long d'un vrai itineraire. Le cote produit est tout aussi reel: abonnements avec webhooks de paiement, backend Supabase, contenu editorial Sanity, integration de donnees ouvertes gouvernementales avec logique de fraicheur des prix et fallbacks quand les donnees sont vieilles ou incompletes, et builds EAS de production pour iOS et Android. UX d'abord en francais, construite pour un vrai public.",
      highlights: ["Cartes en temps reel", "Moteur de prediction prix", "Contenu Sanity"],
      recruiterValue:
        "Montre le developpement mobile multiplateforme, l'integration de donnees en temps reel, les flux cartes et une vision produit au-dela des demos web.",
      buildNotes: [
        "Donnees gouvernementales open data avec logique de fraicheur: si les donnees sont perimees, l'app tombe en fallback au lieu d'afficher des prix errones.",
        "Abonnements Stripe avec webhooks paiement, comptes Supabase et builds EAS production iOS et Android.",
        "Moteur de prediction: estime la tendance journaliere des prix depuis l'historique — une couche feature au-dessus de l'affichage brut.",
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
    highlights: [
      "Google OAuth via NextAuth, vehicle profiles with photos, follow and comment system",
      "Sanity CMS powers editorial articles alongside user-generated garage content",
      "Full auth + user-generated content + CMS on a single live platform",
    ],
    recruiterValue:
      "Shows a richer product surface than a landing page: auth, content modeling, user-generated listings, comments, and a domain-specific visual direction.",
    buildNotes: [
      "Google OAuth via NextAuth handles sessions across public (articles, vehicle pages, owner profiles) and authenticated (post, follow, comment) surfaces in the same app.",
      "Sanity content modeling: editorial articles and user-generated garage listings coexist in one content layer with distinct schemas.",
      "The dark/red automotive identity is intentional — proves the boilerplate produces distinct brands, not cookie-cutter clones.",
    ],
    previewImage: "https://image.thum.io/get/width/1200/crop/800/noanimate/https://cardream-phi.vercel.app",
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
        "Google OAuth via NextAuth gere les sessions sur les surfaces publiques (articles, fiches) et authentifiees (publication, suivi, commentaires) dans la meme app.",
        "Modelisation Sanity: articles editoriaux et contenu garage genere par les utilisateurs coexistent dans une meme couche avec des schemas distincts.",
        "L'identite sombre/rouge automobile est intentionnelle — prouve que le boilerplate produit des marques distinctes, pas des clones.",
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
    highlights: [
      "Live real client site — in production at suzeimmo.com since 2024",
      "Admin panel (Supabase auth + storage) lets the client manage listings without code",
      "Photo-forward layouts, SEO structure, responsive — built for a non-technical client",
    ],
    recruiterValue:
      "Shows real client website context and the ability to work on functional business sites that need trust, conversion, SEO, and responsive UI.",
    buildNotes: [
      "Supabase admin layer: the client publishes and manages listings through auth-protected storage and SQL without touching code.",
      "Covers the full client-work cycle: brief, design, build, deploy, and handoff to a non-technical owner.",
      "Live at suzeimmo.com — reviewers can visit the actual delivered product, not a demo.",
    ],
    previewImage: "https://image.thum.io/get/width/1200/crop/800/noanimate/https://suzeimmo.com",
    fr: {
      category: "Site client reel",
      summary: "Un site client immobilier live avec presentation de proprietes, flux de contact et design oriente confiance.",
      description:
        "Suze Immo est un site client livre pour un professionnel de l'immobilier, en ligne sur suzeimmo.com et au service d'un vrai public aujourd'hui. Le site presente les proprietes avec des mises en page axees photo, donne aux acheteurs et vendeurs un chemin de contact clair et construit les signaux de confiance qu'un public immobilier attend: typographie propre, chargements rapides, comportement responsive sur chaque ecran et une structure SEO qui rend les fiches et pages de services trouvables. Une couche d'administration sur Supabase (authentification, stockage de fichiers, SQL) permet au proprietaire de publier et gerer ses proprietes sans toucher au code. Construit avec Next.js, TypeScript et Tailwind CSS, le projet couvre le cycle complet du travail client: comprendre les besoins d'un client non technique, les traduire en pages et en flux, deployer en production et livrer un site que le client utilise vraiment.",
      highlights: ["Contexte client", "Site d'affaires", "Structure orientee SEO"],
      recruiterValue:
        "Montre un contexte client reel et la capacite a livrer des sites fonctionnels qui demandent confiance, conversion, SEO et UI responsive.",
      buildNotes: [
        "Couche admin Supabase: le client publie et gere ses proprietes via stockage protege par auth et SQL, sans toucher au code.",
        "Couvre le cycle complet du travail client: brief, design, construction, deploy et livraison a un proprietaire non technique.",
        "Live sur suzeimmo.com — les reviewers visitent le produit livre, pas une demo.",
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
      "KV Web Starter is the foundation every project on this site starts from -- a versioned, public Next.js monorepo boilerplate rather than a folder copied between projects. It ships three reusable project shapes (marketing site, booking site, SaaS/API portal) on one stack: Next.js App Router, strict TypeScript, Tailwind CSS v4 with local shadcn-style components, Prisma on PostgreSQL, Auth.js with the Prisma adapter, Zod validation, a Stripe-ready billing structure, Resend and React Email-ready messaging, and FR/EN i18n. A 50+ test Vitest suite and a CI workflow guard the base, so every product built from it starts verified instead of hopeful. The repo is public on GitHub precisely so a reviewer can inspect the foundation, compare it with the products built from it -- Luma Studio, SpeedZone, and this portfolio -- and read the maintenance discipline in the commit history.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Supabase", "Auth.js", "Zod"],
    highlights: [
      "50+ Vitest tests + CI workflow — every product built from it starts verified",
      "3 reusable project shapes: marketing site, booking site, SaaS/API portal",
      "Auth.js + Prisma + Stripe + Resend + FR/EN i18n out of the box",
    ],
    recruiterValue:
      "Shows systems thinking: instead of rebuilding the same foundation each project, I maintain a versioned boilerplate that every product in this portfolio inherits from.",
    buildNotes: [
      "Three distinct products from the same codebase: Luma Studio (marketing site), SpeedZone (community platform), and this portfolio.",
      "50+ Vitest tests and a CI workflow guard the base — every product built from it starts verified, not hopeful.",
      "Public GitHub repo: read the commit history and compare the boilerplate against each product built from it.",
    ],
    previewImage: "https://opengraph.githubassets.com/1/kurtisv/kv-web-starter",
    fr: {
      category: "Boilerplate Next.js",
      summary: "Un starter Next.js reutilisable avec auth, base de donnees, structure facturation, support bilingue et suite de tests.",
      description:
        "KV Web Starter est la fondation d'ou part chaque projet de ce site -- un boilerplate monorepo Next.js versionne et public, plutot qu'un dossier copie entre projets. Il livre trois formes de projets reutilisables (site marketing, site de reservation, portail SaaS/API) sur une seule stack: Next.js App Router, TypeScript strict, Tailwind CSS v4 avec composants locaux de style shadcn, Prisma sur PostgreSQL, Auth.js avec l'adaptateur Prisma, validation Zod, structure de facturation prete pour Stripe, messagerie prete pour Resend et React Email, et i18n FR/EN. Une suite Vitest de 50+ tests et un workflow CI gardent la base, pour que chaque produit construit dessus demarre verifie plutot qu'optimiste. Le repo est public sur GitHub precisement pour qu'un reviewer puisse inspecter la fondation, la comparer aux produits construits dessus -- Luma Studio, SpeedZone et ce portfolio -- et lire la discipline de maintenance dans l'historique des commits.",
      highlights: ["Auth + BDD prets hors de la boite", "i18n FR/EN integre", "50+ tests qui passent"],
      recruiterValue:
        "Montre une pensee systeme: plutot que de reconstruire la meme base a chaque projet, je maintiens un boilerplate versionne dont chaque produit de ce portfolio herite.",
      buildNotes: [
        "Trois produits distincts depuis la meme codebase: Luma Studio (site marketing), SpeedZone (plateforme communautaire) et ce portfolio.",
        "50+ tests Vitest et un workflow CI gardent la base — chaque produit construit dessus demarre verifie, pas optimiste.",
        "Repo GitHub public: lire l'historique des commits et comparer le boilerplate a chaque produit construit dessus.",
      ],
    },
    repoUrl: "https://github.com/kurtisv/kv-web-starter",
  },
  {
    slug: "meridian",
    name: "Meridian",
    category: "Personal finance web app",
    status: "live",
    summary: "A zero-based envelope budget tracker with CSV bank import, auto-assignment rules, and immutable monthly snapshots.",
    description:
      "Meridian is a personal finance web app built around zero-based budgeting: every dollar of income is assigned to a named envelope (Groceries, Rent, Dining, Savings) before the month begins. Transactions are imported from real bank CSV exports -- the parser auto-detects TD Bank, RBC, and Desjardins formats, normalizes field names, extracts merchant names from raw description strings, and sorts the ledger chronologically. An assignment rules engine learns as you work: check a checkbox while assigning a transaction and Meridian saves the pattern -- next time 'Tim Hortons' always maps to Food without touching the interface. At month end, a freeze action takes an immutable snapshot of every envelope's allocation, spending, and rolled-over surplus. Locked months cannot be edited -- they are permanent budget records. Rolled-over surplus from frozen months carries forward automatically into the next month's available balance. The dashboard shows live progress bars per envelope, a Recharts savings trend chart across the last six locked months, and a horizontal bar chart of top spending categories. All data is isolated per user via Supabase row-level security policies.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Recharts", "papaparse", "Zod"],
    highlights: [
      "CSV import auto-detects TD / RBC / Desjardins format -- no manual column mapping",
      "Assignment rules engine: save once, auto-assign forever on matching merchants",
      "Immutable monthly snapshots with rolled-over surplus tracking",
    ],
    recruiterValue:
      "Shows data normalization across multiple real-world input formats, a pattern-matching rules engine, immutability constraints on financial records, and Recharts dashboard visualization -- all wired to a Supabase RLS-secured backend.",
    buildNotes: [
      "Bank CSV normalization: each format (TD, RBC, Desjardins) has its own header detection and field extractor -- a strategy pattern that makes adding future banks trivial.",
      "Rules engine matches on normalized merchant name first, then falls back to the first three words of the raw description. Rules are upserted on conflict so duplicates never accumulate.",
      "Monthly freeze reads the previous month's locked surplus and carries it into the new snapshot row -- roll-over is computed at freeze time, not stored as mutable state.",
    ],
    previewImage: "https://opengraph.githubassets.com/1/kurtisv/meridian",
    fr: {
      category: "Application web finances personnelles",
      summary: "Un gestionnaire de budget par enveloppes avec importation CSV bancaire, regles d'attribution automatique et instantanes mensuels immuables.",
      description:
        "Meridian est une application web de finances personnelles basee sur le budget a base zero: chaque dollar de revenu est attribue a une enveloppe nommee (epicerie, loyer, restauration, epargne) avant le debut du mois. Les transactions sont importees depuis de vrais exports CSV bancaires -- le parseur detecte automatiquement les formats TD Bank, RBC et Desjardins, normalise les noms de champs, extrait les noms de commercants depuis les descriptions brutes et trie le registre chronologiquement. Un moteur de regles apprend au fil de l'utilisation: cocher une case lors de l'attribution d'une transaction et Meridian sauvegarde le pattern -- la prochaine fois, 'Tim Hortons' ira toujours dans Alimentation sans toucher l'interface. En fin de mois, une action de gel cree un instantane immuable de l'allocation, des depenses et du surplus reporte de chaque enveloppe. Les mois geles ne peuvent etre modifies -- ce sont des registres budgetaires permanents. Le surplus reporte des mois geles est automatiquement reintegre dans le solde disponible du mois suivant.",
      highlights: [
        "Import CSV detecte automatiquement le format TD / RBC / Desjardins",
        "Moteur de regles: sauvegarder une fois, attribuer automatiquement pour toujours",
        "Instantanes mensuels immuables avec suivi du surplus reporte",
      ],
      recruiterValue:
        "Montre la normalisation de donnees sur plusieurs formats reels, un moteur de correspondance de patterns, des contraintes d'immuabilite sur les registres financiers et la visualisation Recharts -- le tout securise par les politiques RLS Supabase.",
      buildNotes: [
        "Normalisation CSV bancaire: chaque format (TD, RBC, Desjardins) a sa propre detection d'en-tetes et extracteur de champs -- un pattern strategie qui rend l'ajout de futures banques trivial.",
        "Le moteur de regles correspond d'abord au nom de commercant normalise, puis se rabat sur les trois premiers mots de la description brute.",
        "Le gel mensuel lit le surplus verrouille du mois precedent et le reintegre dans la nouvelle ligne d'instantane -- le report est calcule au moment du gel, pas stocke comme etat mutable.",
      ],
    },
    repoUrl: "https://github.com/kurtisv/meridian",
  },
  {
    slug: "casebook",
    name: "Casebook",
    category: "Incident post-mortem tool",
    status: "live",
    summary: "A structured post-mortem editor with a drag-and-drop timeline, contributing factors checklist, and one-click PDF or Markdown export.",
    description:
      "Casebook is a web tool for writing incident post-mortems that actually get read. It enforces structure without friction: a drag-and-drop timeline lets engineers reconstruct the event sequence and reorder events as the story becomes clearer. A pre-loaded contributing factors checklist covers Human, Process, and Technical categories so reviewers think beyond the immediate cause. Action items are assigned and tracked with a cycle-click status toggle. The narrative section is a full Tiptap rich-text editor, auto-saved on blur, stored as Tiptap JSON. At any point you can export -- a formatted PDF for stakeholders or a Markdown file for the docs system. The export engine generates both formats from the same structured data: Markdown via string assembly, PDF via @react-pdf/renderer with severity color badges, a timeline table, factor checkboxes, and a footer. All data is isolated per user via Supabase row-level security.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Tiptap", "@dnd-kit", "@react-pdf/renderer", "Zod"],
    highlights: [
      "Drag-and-drop timeline with @dnd-kit sortable -- no position drift on reorder",
      "Pre-seeded contributing factors checklist: Human / Process / Technical with custom row support",
      "Dual export: @react-pdf/renderer PDF and Markdown from the same structured data",
    ],
    recruiterValue:
      "Shows server actions, route groups with protected layouts, rich-text editing with Tiptap JSON persistence, drag-and-drop with @dnd-kit, and server-side PDF generation -- all in a single cohesive tool.",
    buildNotes: [
      "Tiptap content is stored as JSON.stringify(editor.getJSON()) in a text column -- parsed back on load and deserialized into the editor's content prop. Blur triggers the save so there are no debounce races.",
      "PDF generation runs server-side in a Next.js route handler via renderToBuffer -- the same Supabase queries that power the page also drive the export, so the PDF is always consistent with what the user sees.",
      "@dnd-kit reorder calls reorderTimelineEvents which fires parallel Supabase updates for each new position index -- optimistic UI updates client-side first.",
    ],
    previewImage: "https://opengraph.githubassets.com/1/kurtisv/casebook",
    fr: {
      category: "Outil de post-mortem d'incidents",
      summary: "Un editeur de post-mortem structure avec une chronologie glisser-deposer, une liste de facteurs contributifs et un export PDF ou Markdown en un clic.",
      description:
        "Casebook est un outil web pour ecrire des post-mortems d'incidents qui seront reellement lus. Il impose une structure sans friction: une chronologie glisser-deposer permet aux ingenieurs de reconstruire la sequence des evenements et de les reordonner. Une liste de facteurs contributifs pre-chargee couvre les categories Humain, Processus et Technique. Les elements d'action sont assignes et suivis avec un toggle de statut. La section narrative est un editeur riche Tiptap, sauvegarde automatiquement, stocke en JSON. A tout moment, vous pouvez exporter un PDF formate pour les parties prenantes ou un fichier Markdown pour la documentation.",
      highlights: [
        "Chronologie glisser-deposer avec @dnd-kit -- pas de derive de position au reordonnancement",
        "Liste de facteurs contributifs pre-chargee: Humain / Processus / Technique avec support de lignes personnalisees",
        "Export double: PDF @react-pdf/renderer et Markdown depuis les memes donnees structurees",
      ],
      recruiterValue:
        "Montre les server actions, les route groups avec layouts proteges, l'edition riche avec persistance JSON Tiptap, le drag-and-drop avec @dnd-kit et la generation PDF cote serveur.",
      buildNotes: [
        "Le contenu Tiptap est stocke comme JSON.stringify(editor.getJSON()) dans une colonne texte -- parse au chargement et deserialise dans la prop content de l'editeur.",
        "La generation PDF tourne cote serveur dans un route handler Next.js via renderToBuffer.",
        "@dnd-kit reorder appelle reorderTimelineEvents qui lance des mises a jour Supabase paralleles pour chaque nouvel index de position.",
      ],
    },
    repoUrl: "https://github.com/kurtisv/casebook",
  },
  {
    slug: "fieldlog",
    name: "Fieldlog",
    category: "Field inspection tool",
    status: "live",
    summary: "A field inspection logging tool with custom templates, GPS capture, structured responses, and PDF report export.",
    description:
      "Fieldlog is a web tool for teams that inspect physical sites: electrical safety inspections, property walkthroughs, equipment checks. Inspectors build reusable templates with named fields -- short text, number, yes/no, multi-choice, or textarea -- marking each as required or optional. When starting an inspection, the inspector selects a template, names the site, and optionally captures GPS coordinates from the browser Geolocation API. The form renders the template fields in sequence, enforcing required fields before submission. Boolean fields toggle Yes/No buttons rather than a checkbox. Multi-choice fields render as chip toggles rather than a dropdown. On submit, the inspection is locked with a timestamp and coordinates. From the detail view, a PDF report is generated server-side via @react-pdf/renderer, including site info, GPS coordinates, all field responses, notes, and a generation timestamp.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "@react-pdf/renderer", "Zod", "Geolocation API"],
    highlights: [
      "Custom template builder: any mix of text, number, boolean, select, and textarea fields",
      "GPS capture via browser Geolocation API at inspection start -- stored with the record",
      "Server-side PDF export via @react-pdf/renderer with all responses and coordinates",
    ],
    recruiterValue:
      "Shows dynamic form rendering from a stored JSON schema, browser Geolocation API integration, and server-side PDF generation -- in a domain (field inspections) that is instantly understandable to technical recruiters.",
    buildNotes: [
      "Template fields are stored as JSONB in Supabase. The inspection form reads the field schema at render time and builds the input components dynamically -- adding a new field type means adding one case to the renderer.",
      "GPS capture is gated behind a user action button (not auto-requested on page load) to avoid permission prompt friction. The coordinates are stored as separate latitude and longitude columns, not a string.",
      "PDF is generated in the Next.js API route, not the browser. renderToBuffer returns a Node.js Buffer; wrapping it in new Uint8Array() satisfies the BodyInit constraint for NextResponse.",
    ],
    previewImage: "https://opengraph.githubassets.com/1/kurtisv/fieldlog",
    fr: {
      category: "Outil d'inspection terrain",
      summary: "Un outil de journalisation d'inspections terrain avec des modeles personnalises, capture GPS, reponses structurees et export PDF.",
      description:
        "Fieldlog est un outil web pour les equipes qui inspectent des sites physiques. Les inspecteurs construisent des modeles reutilisables avec des champs nommes -- texte court, nombre, oui/non, choix multiple ou zone de texte. Au moment de l'inspection, ils selectionnent un modele, nomment le site et capturent optionnellement les coordonnees GPS depuis l'API Geolocation du navigateur. Le formulaire rend les champs du modele en sequence en imposant les champs obligatoires avant la soumission. Un rapport PDF est genere cote serveur via @react-pdf/renderer.",
      highlights: [
        "Constructeur de modeles personnalises: tout melange de champs texte, nombre, booleen, selection et zone de texte",
        "Capture GPS via l'API Geolocation du navigateur -- stockee avec l'enregistrement",
        "Export PDF cote serveur via @react-pdf/renderer avec toutes les reponses et coordonnees",
      ],
      recruiterValue:
        "Montre le rendu dynamique de formulaires depuis un schema JSON stocke, l'integration de l'API Geolocation et la generation PDF cote serveur.",
      buildNotes: [
        "Les champs de modele sont stockes en JSONB dans Supabase. Le formulaire lit le schema au moment du rendu et construit les composants dynamiquement.",
        "La capture GPS est declenchee par un bouton utilisateur, pas automatiquement, pour eviter les frictions de permission.",
        "Le PDF est genere dans le route handler Next.js via renderToBuffer, pas dans le navigateur.",
      ],
    },
    repoUrl: "https://github.com/kurtisv/fieldlog",
  },
  {
    slug: "gridlock",
    name: "Gridlock",
    category: "Resource scheduler",
    status: "live",
    summary: "A weekly calendar grid for booking rooms, equipment, or any shared resource -- with server-enforced conflict detection.",
    description:
      "Gridlock is a visual resource scheduler. Resources (rooms, equipment, staff) appear as columns across a weekly calendar. Each row is one hour. Clicking any cell opens a booking form: title, booker name, duration (30 min to 4 h), and optional notes. Before the booking is saved, the server queries for any existing booking on the same resource that overlaps the requested time window. If there is a conflict, the save is rejected with the conflicting booking title returned to the UI. Confirmed bookings render as colored blocks at their exact vertical position -- the top offset is computed from the difference in minutes between the booking start and midnight, multiplied by 64px per hour. Booking height is computed from duration in minutes. The Resources page shows this-week booking count and total booked hours per resource, computed server-side at render time.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "date-fns", "Zod"],
    highlights: [
      "Pixel-accurate booking blocks: top and height computed from time difference in minutes x (64/60)",
      "Server-enforced conflict detection using overlapping interval query before every save",
      "Per-resource utilization stats: booking count and total hours computed at render time",
    ],
    recruiterValue:
      "Shows interval overlap queries, pixel-precise calendar rendering from time arithmetic, and a clean separation between the visual grid (client) and the conflict check (server action).",
    buildNotes: [
      "Conflict detection uses a half-open interval query: starts_at < requested_end AND ends_at > requested_start. This catches all overlap cases without needing a stored duration column.",
      "The calendar grid renders resources as columns and hours as rows. Booking top offset = differenceInMinutes(start, midnight) * (64/60). Booking height = duration_in_minutes * (64/60). This makes each hour exactly 64px tall regardless of zoom.",
      "Week navigation pushes a ?week= query param so the URL is shareable and the schedule page is a server component that fetches fresh data on each load.",
    ],
    previewImage: "https://opengraph.githubassets.com/1/kurtisv/gridlock",
    fr: {
      category: "Planificateur de ressources",
      summary: "Une grille de calendrier hebdomadaire pour reserver des salles, equipements ou toute ressource partagee -- avec detection de conflits appliquee cote serveur.",
      description:
        "Gridlock est un planificateur de ressources visuel. Les ressources apparaissent en colonnes sur un calendrier hebdomadaire. Cliquer sur une cellule ouvre un formulaire de reservation. Avant la sauvegarde, le serveur verifie les chevauchements. Les reservations confirmes s'affichent comme des blocs colores a leur position verticale exacte. La page Ressources montre le nombre de reservations et les heures totales de la semaine par ressource.",
      highlights: [
        "Blocs de reservation pixel-precis: position calculee a partir de la difference en minutes x (64/60)",
        "Detection de conflits appliquee cote serveur avant chaque sauvegarde",
        "Stats d'utilisation par ressource: nombre de reservations et heures totales calculees au rendu",
      ],
      recruiterValue:
        "Montre les requetes de chevauchement d'intervalles, le rendu de calendrier pixel-precis et la separation entre la grille visuelle (client) et la verification de conflit (server action).",
      buildNotes: [
        "La detection de conflit utilise une requete d'intervalle semi-ouvert: starts_at < fin_demandee ET ends_at > debut_demande.",
        "La grille calendrier rend les ressources en colonnes et les heures en lignes. Top offset = differenceInMinutes * (64/60).",
        "La navigation de semaine pousse un param ?week= pour que l'URL soit partageable.",
      ],
    },
    repoUrl: "https://github.com/kurtisv/gridlock",
  },
  {
    slug: "runbook",
    name: "Runbook",
    category: "Internal tooling",
    status: "private",
    summary: "Versioned runbook editor with live step-by-step execution tracking and run history.",
    description:
      "Runbook lets ops teams write step-by-step procedures and execute them with a live checklist. Each runbook is versioned; starting a run snapshots the current version so old runs are unaffected by edits. Steps are typed (action, check, warning, info), can be required or optional, and carry estimated minutes. The run view checks off steps in real time and blocks completion until all required steps pass.",
    stack: ["Next.js 15", "TypeScript", "Supabase", "Tailwind CSS v4"],
    highlights: [
      "Versioned runbooks: each run stores a snapshot of the runbook version it was started from.",
      "Step types (action / check / warning / info) and required/optional distinction.",
      "Live checklist with per-step timestamps stored in a JSONB map keyed by step ID.",
      "Completion gated on all required steps being checked off.",
      "Run history with completed/aborted status and executor attribution.",
    ],
    recruiterValue:
      "Shows JSONB patching patterns, server action composition, and operational tooling UX -- a category recruiters rarely see in portfolios.",
    buildNotes: [
      "Checklist stored as JSONB map {stepId: {checked, checkedAt}} so individual steps can be patched without rewriting the full array.",
      "Run row stores a full snapshot of runbook name and version so history is stable across runbook edits.",
      "Status enum: active / completed / aborted -- completion gated client-side before the server action fires.",
    ],
    fr: {
      category: "Outillage interne",
      summary: "Editeur de runbooks versiones avec suivi d'execution pas a pas et historique des runs.",
      description:
        "Runbook permet aux equipes ops de rediger des procedures etape par etape et de les executer avec une checklist live. Chaque runbook est versionne; demarrer un run prend un snapshot de la version courante, donc les anciens runs ne sont pas affectes par les modifications. Les etapes ont un type (action, verification, avertissement, info), peuvent etre obligatoires ou optionnelles, et portent un temps estime. La vue de run coche les etapes en temps reel et bloque la completion jusqu'a ce que toutes les etapes requises soient validees.",
      highlights: [
        "Runbooks versiones: chaque run stocke un snapshot de la version du runbook au moment du lancement.",
        "Types d'etapes (action / verification / avertissement / info) et distinction obligatoire/optionnel.",
        "Checklist live avec timestamps par etape stockes dans une map JSONB indexee par ID d'etape.",
        "Completion bloquee tant que toutes les etapes requises ne sont pas cochees.",
        "Historique des runs avec statut complete/abandonne et attribution de l'executeur.",
      ],
      recruiterValue:
        "Montre les patterns de patch JSONB, la composition d'actions serveur et l'UX d'outillage operationnel -- une categorie rarement vue dans les portfolios.",
      buildNotes: [
        "Checklist stockee comme map JSONB {stepId: {checked, checkedAt}} pour patcher les etapes individuellement sans reecrire tout le tableau.",
        "Le run stocke un snapshot complet du nom et de la version du runbook pour que l'historique reste stable apres modification.",
        "Enum de statut: active / completed / aborted -- completion bloquee cote client avant que l'action serveur se declenche.",
      ],
    },
    repoUrl: "https://github.com/kurtisv/runbook",
  },
  {
    slug: "strata",
    name: "Strata",
    category: "Property management",
    status: "private",
    summary: "Multi-unit property manager with tenant tracking, lease dates, and maintenance request pipeline.",
    description:
      "Strata is a landlord dashboard for managing multi-unit buildings. Units store status (vacant, occupied, maintenance), floor, bedrooms, bathrooms, rent, and notes. Each unit can have multiple tenants with full lease date tracking. Maintenance requests flow through an open / in-progress / resolved / closed pipeline and can be filtered by status. The units grid shows live tenant names and open request counts at a glance.",
    stack: ["Next.js 15", "TypeScript", "Supabase", "Tailwind CSS v4"],
    highlights: [
      "Unit cards show real-time occupancy status, tenant names, and open request count in a compact grid.",
      "Tenant records carry lease start/end, monthly rent, contact info, and free-form notes.",
      "Maintenance requests have a 4-step status pipeline (open -> in_progress -> resolved -> closed) with one-click advancement.",
      "Status filter bar lets the landlord focus on open or in-progress issues only.",
      "Modal forms with full CRUD for units, tenants, and requests -- no separate pages needed.",
    ],
    recruiterValue:
      "Property management is a real-world vertical with clear data relationships; this project shows multi-table Supabase design, server actions with Zod validation, and status-machine UX in a compact app.",
    buildNotes: [
      "Supabase join queries return 'never' without defined Relationships -- cast via 'as unknown as Type[]' in server components.",
      "updateTenant strips unit_id before passing to Supabase because the Update type excludes FK columns.",
      "Status advancement done with a Record<RequestStatus, RequestStatus | null> lookup table; null means the request is terminal.",
    ],
    fr: {
      category: "Gestion immobiliere",
      summary: "Gestionnaire multi-unite avec suivi des locataires, dates de bail et pipeline de demandes de maintenance.",
      description:
        "Strata est un tableau de bord pour proprietaires gerant des immeubles multi-logements. Les unites stockent le statut (vacant, occupe, maintenance), l'etage, le nombre de chambres, la salle de bain, le loyer et des notes. Chaque unite peut avoir plusieurs locataires avec suivi complet des dates de bail. Les demandes de maintenance progressent dans un pipeline ouvert / en cours / resolu / ferme et peuvent etre filtrees par statut. La grille des unites affiche les noms des locataires et le nombre de demandes ouvertes en un coup d'oeil.",
      highlights: [
        "Les cartes d'unite montrent le statut d'occupation en temps reel, les noms des locataires et le nombre de demandes ouvertes.",
        "Les fiches locataires incluent debut/fin de bail, loyer mensuel, coordonnees et notes libres.",
        "Les demandes de maintenance ont un pipeline en 4 etapes (ouvert -> en cours -> resolu -> ferme) avec avancement en un clic.",
        "La barre de filtre de statut permet de se concentrer sur les problemes ouverts ou en cours.",
        "Formulaires modaux avec CRUD complet pour les unites, locataires et demandes -- pas de pages separees.",
      ],
      recruiterValue:
        "La gestion immobiliere est un secteur concret avec des relations de donnees claires; ce projet montre la conception multi-table Supabase, les actions serveur avec validation Zod et l'UX machine a etats dans une app compacte.",
      buildNotes: [
        "Les requetes join Supabase retournent 'never' sans Relationships definies -- cast via 'as unknown as Type[]' dans les composants serveur.",
        "updateTenant retire unit_id avant de passer a Supabase car le type Update exclut les colonnes FK.",
        "L'avancement de statut se fait via une table de correspondance Record<RequestStatus, RequestStatus | null>; null signifie que la demande est terminale.",
      ],
    },
    repoUrl: "https://github.com/kurtisv/strata",
  },
  {
    slug: "waveline",
    name: "Waveline",
    category: "Content management",
    status: "private",
    summary: "Podcast and audio content manager with show organization, episode show notes, and a 4-stage publish workflow.",
    description:
      "Waveline is a dashboard for podcast producers to manage shows and episodes from draft to publication. Episodes move through a 4-stage pipeline: draft -> ready -> published -> archived. Each episode has a title, description, audio URL with an in-page HTML5 player, duration, episode and season numbers, and a markdown-style show notes area. The episode detail page doubles as an editor -- all fields are editable inline without leaving the page.",
    stack: ["Next.js 15", "TypeScript", "Supabase", "Tailwind CSS v4"],
    highlights: [
      "4-stage publish pipeline (draft / ready / published / archived) with one-click status advancement.",
      "Shows group episodes; episode list can be filtered by status.",
      "Inline episode editor -- no separate edit page; the detail view toggles between read and edit modes.",
      "Audio URL stored and rendered as an HTML5 <audio> player directly in the detail view.",
      "Duration stored in seconds and formatted as H:MM:SS or MM:SS for display.",
      "Slug auto-generated from title on creation for feed-ready identifiers.",
    ],
    recruiterValue:
      "Podcast management is a clean domain for showing content state machines, inline editing UX, and media handling without a CMS dependency.",
    buildNotes: [
      "Episode status stored as a DB enum; advancement uses a Record<EpisodeStatus, EpisodeStatus | null> lookup -- null means terminal.",
      "published_at is set server-side when status transitions to 'published', not by the user.",
      "Slug auto-generated via slugify() at create time; not updated on title edits to avoid breaking external references.",
    ],
    fr: {
      category: "Gestion de contenu",
      summary: "Gestionnaire de podcasts avec organisation par emissions, notes d'episode et workflow de publication en 4 etapes.",
      description:
        "Waveline est un tableau de bord pour les producteurs de podcasts qui permet de gerer les emissions et les episodes du brouillon a la publication. Les episodes passent par un pipeline en 4 etapes: brouillon -> pret -> publie -> archive. Chaque episode a un titre, une description, une URL audio avec lecteur HTML5, une duree, un numero d'episode et de saison, et un espace pour les notes d'emission au format markdown. La page de detail de l'episode fait aussi office d'editeur -- tous les champs sont modifiables en ligne sans quitter la page.",
      highlights: [
        "Pipeline de publication en 4 etapes (brouillon / pret / publie / archive) avec avancement en un clic.",
        "Les emissions regroupent les episodes; la liste peut etre filtree par statut.",
        "Editeur d'episode integre -- pas de page d'edition separee; la vue de detail bascule entre lecture et edition.",
        "URL audio stockee et rendue comme lecteur HTML5 <audio> directement dans la vue de detail.",
        "Duree stockee en secondes et formatee en H:MM:SS ou MM:SS pour l'affichage.",
        "Slug genere automatiquement depuis le titre a la creation pour des identifiants prets pour le flux.",
      ],
      recruiterValue:
        "La gestion de podcasts est un domaine propre pour montrer les machines d'etat de contenu, l'UX d'edition integree et la gestion des medias sans dependance a un CMS.",
      buildNotes: [
        "Le statut des episodes est stocke comme enum en base; l'avancement utilise une table Record<EpisodeStatus, EpisodeStatus | null> -- null signifie terminal.",
        "published_at est defini cote serveur lors de la transition vers 'published', pas par l'utilisateur.",
        "Le slug est genere automatiquement via slugify() a la creation; non mis a jour lors des modifications de titre pour eviter de casser les references externes.",
      ],
    },
    repoUrl: "https://github.com/kurtisv/waveline",
  },
  {
    slug: "watchpost",
    name: "Watchpost",
    category: "Content planning",
    status: "private",
    summary: "Social media content planner with platform tagging, status pipeline, monthly calendar, and post scheduling.",
    description:
      "Watchpost is a content planning dashboard for managing social media posts across multiple platforms. Each post carries the full copy, target platforms (Twitter, Instagram, LinkedIn, Facebook, TikTok, YouTube), a 5-stage status pipeline, tags, schedule datetime, and internal notes. The calendar view renders all scheduled posts on a month grid with color-coded status badges. Posts can be filtered by status in the list view.",
    stack: ["Next.js 15", "TypeScript", "Supabase", "Tailwind CSS v4"],
    highlights: [
      "Multi-platform tagging: each post can target any combination of 7 platforms stored as a Postgres array.",
      "5-stage status pipeline: idea / draft / scheduled / published / cancelled.",
      "Monthly calendar view renders all scheduled posts on their scheduled date.",
      "Status and platform filters in the list view for quick triage.",
      "Tags stored as a text[] array and displayed as chips.",
    ],
    recruiterValue:
      "Shows Postgres array columns used for multi-select attributes, a custom calendar grid built from date-fns math (no calendar library), and a content workflow with real domain complexity.",
    buildNotes: [
      "Platforms stored as a Postgres enum array: extractPlatforms() reads checkbox form fields named platform_{name} to build the array before insert.",
      "Tags parsed from a comma-separated text input into a text[] at the server action level.",
      "Calendar grid built with getCalendarDays() using eachDayOfInterval from startOfWeek(monthStart) to endOfWeek(monthEnd) -- always 35 or 42 cells.",
    ],
    fr: {
      category: "Planification de contenu",
      summary: "Planificateur de contenu social avec etiquetage de plateforme, pipeline de statut, calendrier mensuel et planification.",
      description:
        "Watchpost est un tableau de bord de planification de contenu pour gerer les publications sur les reseaux sociaux sur plusieurs plateformes. Chaque publication porte le texte complet, les plateformes cibles (Twitter, Instagram, LinkedIn, Facebook, TikTok, YouTube), un pipeline de statut en 5 etapes, des tags, une date/heure programmee et des notes internes. La vue calendrier affiche toutes les publications programmees sur une grille mensuelle avec des badges de statut codes par couleur.",
      highlights: [
        "Etiquetage multi-plateforme: chaque publication peut cibler n'importe quelle combinaison de 7 plateformes stockees sous forme de tableau Postgres.",
        "Pipeline de statut en 5 etapes: idee / brouillon / programme / publie / annule.",
        "La vue calendrier mensuelle affiche toutes les publications programmees a leur date.",
        "Filtres de statut et de plateforme dans la vue liste pour un tri rapide.",
        "Tags stockes sous forme de tableau text[] et affiches sous forme de chips.",
      ],
      recruiterValue:
        "Montre les colonnes de tableaux Postgres pour les attributs a selection multiple, une grille calendrier construite avec les maths de date-fns (pas de bibliotheque calendrier), et un workflow de contenu avec une vraie complexite de domaine.",
      buildNotes: [
        "Plateformes stockees sous forme de tableau d'enum Postgres: extractPlatforms() lit les champs de cases a cocher nommes platform_{name} pour construire le tableau avant l'insertion.",
        "Tags analyses depuis une saisie texte separee par des virgules dans un text[] au niveau de l'action serveur.",
        "Grille calendrier construite avec getCalendarDays() en utilisant eachDayOfInterval de startOfWeek(monthStart) a endOfWeek(monthEnd) -- toujours 35 ou 42 cellules.",
      ],
    },
    repoUrl: "https://github.com/kurtisv/watchpost",
  },
  {
    slug: "pressroom",
    name: "Pressroom",
    category: "Communications",
    status: "private",
    summary: "Press release manager with a 5-stage approval workflow, inline editor, and media contact database.",
    description:
      "Pressroom is a communications dashboard for teams managing press releases and media outreach. Releases move through a 5-stage approval pipeline: draft -> review -> approved -> distributed -> archived. The release detail page doubles as an editor -- the body is a large textarea editable inline. A separate media contact database stores journalists and editors by outlet, role, email, and phone. Distributed_at is set automatically server-side when the release reaches the distributed stage.",
    stack: ["Next.js 15", "TypeScript", "Supabase", "Tailwind CSS v4"],
    highlights: [
      "5-stage press release pipeline: draft / review / approved / distributed / archived.",
      "Release body is a large text area -- no rich text dependency, formatted for copy-paste into wire services.",
      "distributed_at timestamp set server-side automatically when status reaches 'distributed'.",
      "Media contact database with outlet, role, email, and phone; searchable by name.",
      "Status filter lets the team triage drafts vs. approved vs. distributed at a glance.",
    ],
    recruiterValue:
      "Communications tooling is an underrepresented domain in developer portfolios; this project shows multi-step approval workflow logic and a contact CRM alongside a content editor in a production-ready stack.",
    buildNotes: [
      "STATUS_NEXT lookup table drives the advance-status pattern: same approach as Waveline and Runbook -- null means terminal.",
      "distributed_at written by the server action (not the user) to guarantee an accurate audit trail.",
      "contact_ids stored as uuid[] on the release row for future batch-email linking without a join table.",
    ],
    fr: {
      category: "Communications",
      summary: "Gestionnaire de communiques de presse avec workflow d'approbation en 5 etapes, editeur integre et base de contacts medias.",
      description:
        "Pressroom est un tableau de bord de communication pour les equipes qui gerent les communiques de presse et les relations medias. Les communiques passent par un pipeline d'approbation en 5 etapes: brouillon -> revision -> approuve -> distribue -> archive. La page de detail du communique fait aussi office d'editeur -- le corps est une grande zone de texte modifiable en ligne. Une base de contacts medias separee stocke les journalistes et redacteurs en chef par organe de presse, role, email et telephone.",
      highlights: [
        "Pipeline de communique de presse en 5 etapes: brouillon / revision / approuve / distribue / archive.",
        "Le corps du communique est une grande zone de texte -- pas de dependance en texte riche, formate pour copier-coller vers les services de fil.",
        "L'horodatage distributed_at est defini automatiquement cote serveur lorsque le statut atteint 'distribue'.",
        "Base de contacts medias avec organe de presse, role, email et telephone.",
        "Le filtre de statut permet a l'equipe de trier les brouillons vs approuves vs distribues d'un coup d'oeil.",
      ],
      recruiterValue:
        "L'outillage de communication est un domaine sous-represente dans les portfolios de developpeurs; ce projet montre la logique de workflow d'approbation multi-etapes et un CRM de contacts aux cotes d'un editeur de contenu dans une stack prete pour la production.",
      buildNotes: [
        "La table de correspondance STATUS_NEXT conduit le pattern advance-status: meme approche que Waveline et Runbook -- null signifie terminal.",
        "distributed_at ecrit par l'action serveur (pas l'utilisateur) pour garantir une piste d'audit precise.",
        "contact_ids stockes comme uuid[] sur la ligne du communique pour une future liaison d'email en lot sans table de jointure.",
      ],
    },
    repoUrl: "https://github.com/kurtisv/pressroom",
  },
  {
    slug: "patchwork",
    name: "Patchwork",
    category: "Developer tooling",
    status: "private",
    summary: "Versioned changelog manager where teams write typed change entries (feature / fix / security / breaking) grouped under release records.",
    description:
      "Patchwork is a structured changelog tool for software teams. Each release has a version string (semver), an optional title, a summary, and a status of draft or published. Under each release, teams write individual change entries typed as feature, fix, improvement, deprecation, security, or breaking. Entries are ordered positionally within their release and displayed grouped by type. Publishing a release sets a server-stamped published_at timestamp so the audit trail cannot be tampered with client-side. The release list shows entry counts at a glance. The detail page is a single view that handles both the release metadata editor and the entry list with inline add and delete -- no separate edit page or modal routing.",
    stack: ["Next.js 15", "TypeScript", "Supabase", "Tailwind CSS v4"],
    highlights: [
      "6 entry types (feature / fix / improvement / deprecation / security / breaking) stored as a Postgres enum.",
      "Entries grouped by type on the detail page -- the same visual structure as GitHub Releases.",
      "Position-ordered entries: each new entry gets last_position + 1 via a server-side query.",
      "published_at set server-side at publish time -- not editable by the user.",
      "Single detail page handles both the release meta editor and inline entry CRUD.",
    ],
    recruiterValue:
      "Changelog tooling is a real internal tool domain; this project shows Postgres enum arrays, position-ordered inserts, server-stamped audit fields, and grouped display from a single joined query -- without any external library dependency.",
    buildNotes: [
      "Entry type is a Postgres enum (entry_type); position is an integer column with an index on (release_id, position) for ordered fetches.",
      "createEntry queries the last position for the release before inserting at last + 1 -- avoids gaps and conflicts without a trigger.",
      "The detail page fetches via an API route (/api/releases/:id) that joins entries ordered by position -- client state is reloaded after each mutation.",
    ],
    fr: {
      category: "Outillage developpeur",
      summary: "Gestionnaire de changelog versionne ou les equipes ecrivent des entrees typees (feature / fix / security / breaking) groupees par release.",
      description:
        "Patchwork est un outil de changelog structure pour les equipes logicielles. Chaque release a une version (semver), un titre optionnel, un resume et un statut brouillon ou publie. Sous chaque release, les equipes ecrivent des entrees typees: feature, fix, improvement, deprecation, security ou breaking. Les entrees sont ordonnees et affichees groupees par type. La publication d'une release definit un published_at cote serveur pour que la piste d'audit ne puisse pas etre modifiee cote client. La page de detail gere a la fois l'editeur de metadonnees et la liste des entrees avec ajout et suppression en ligne.",
      highlights: [
        "6 types d'entrees (feature / fix / improvement / deprecation / security / breaking) stockes comme enum Postgres.",
        "Entrees groupees par type sur la page de detail -- meme structure visuelle que GitHub Releases.",
        "Entrees ordonnees par position: chaque nouvelle entree recoit last_position + 1 via une requete cote serveur.",
        "published_at defini cote serveur au moment de la publication -- non modifiable par l'utilisateur.",
        "Page de detail unique pour l'editeur de release et le CRUD d'entrees en ligne.",
      ],
      recruiterValue:
        "L'outillage de changelog est un domaine d'outil interne reel; ce projet montre les enums Postgres, les insertions ordonnees par position, les champs d'audit estampilles cote serveur et l'affichage groupe depuis une requete jointe unique.",
      buildNotes: [
        "Le type d'entree est un enum Postgres (entry_type); la position est une colonne entiere avec un index sur (release_id, position).",
        "createEntry interroge la derniere position de la release avant d'inserer a last + 1 -- evite les trous sans trigger.",
        "La page de detail charge via une route API (/api/releases/:id) qui joint les entrees ordonnees par position.",
      ],
    },
    repoUrl: "https://github.com/kurtisv/patchwork",
  },
];

export function getProjectBySlug(slug: string) {
  return publicPortfolioProjects.find((project) => project.slug === slug);
}

export const ecosystemOrder = [
  "eventpic",
  "luma-studio",
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
      ["10", "projects shipped across the portfolio"],
      ["5", "live sites online"],
      ["2", "mobile apps included"],
      ["1", "live real client site"],
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
      ["10", "projets livres dans le portfolio"],
      ["5", "sites live en ligne"],
      ["2", "apps mobiles incluses"],
      ["1", "vrai site client live"],
    ],
  },
} as const;

export const testimonial = {
  en: {
    quote:
      "Kurtis built my real estate website from scratch. The result is clean, professional, and loads fast. I can manage my property listings myself without touching any code. He explained everything clearly and the handoff was smooth.",
    author: "Suze",
    role: "Real estate professional",
    site: "suzeimmo.com",
    siteUrl: "https://suzeimmo.com",
  },
  fr: {
    quote:
      "Kurtis a construit mon site immobilier de A a Z. Le resultat est propre, professionnel et rapide. Je peux gerer mes proprietes moi-meme sans toucher au code. Il a bien explique chaque etape et la livraison s'est faite sans friction.",
    author: "Suze",
    role: "Professionnelle de l'immobilier",
    site: "suzeimmo.com",
    siteUrl: "https://suzeimmo.com",
  },
} as const;

export const ecosystemNarrative = {
  en: {
    eyebrow: "Focused portfolio",
    title: "The public portfolio keeps only finished work.",
    description:
      "The visible portfolio centers on six complete projects: two mobile apps (EventPic, GasMobile), three web products built from the same boilerplate (Luma Studio, SpeedZone, this portfolio), and a delivered real estate client site (Suze Immo). The kv-web-starter foundation underpins all three web products.",
    database: "Shared database: Supabase KV Portfolio",
    foundation: "Foundation: kv-web-starter boilerplate",
    cta: "Explore the path",
  },
  fr: {
    eyebrow: "Portfolio cible",
    title: "Le portfolio public garde seulement le travail termine.",
    description:
      "Le portfolio visible se concentre sur six projets complets: deux apps mobiles (EventPic, GasMobile), trois produits web construits depuis le meme boilerplate (Luma Studio, SpeedZone, ce portfolio) et un site client immobilier livre (Suze Immo). La fondation kv-web-starter soutient les trois produits web.",
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
