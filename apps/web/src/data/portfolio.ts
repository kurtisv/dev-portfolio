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
  },
  {
    slug: "reserveflow",
    name: "ReserveFlow",
    category: "Booking and availability system",
    status: "live",
    ecosystemRole:
      "Converts accepted quotes into scheduled work with availability logic and booking management.",
    summary:
      "A service booking system with a public booking flow, availability logic, service catalog, and operational dashboards.",
    description:
      "ReserveFlow turns the shared boilerplate into a service-business booking system: a service catalog with duration and price metadata, staff availability, a booking request and confirmation flow, booking status management, and dashboard metrics for upcoming work.",
    stack: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Auth.js"],
    highlights: [
      "Public booking flow with availability logic",
      "Service catalog with duration and price metadata",
      "Operational dashboard for upcoming bookings",
    ],
    recruiterValue:
      "Shows appointment operations beyond generic dashboards: availability rules, booking lifecycle, and email-ready confirmation structure.",
    buildNotes: [
      "Availability logic computes open slots from staff schedules.",
      "Booking statuses flow from request to confirmation to completion.",
      "Hands confirmed clients to ClientHub through the shared ecosystem data.",
    ],
    fr: {
      category: "Systeme de reservation et disponibilites",
      summary:
        "Un systeme de reservation de services avec flux public, logique de disponibilites, catalogue de services et dashboards operationnels.",
      description:
        "ReserveFlow transforme le boilerplate partage en systeme de reservation pour entreprises de services: catalogue avec duree et prix, disponibilites du personnel, flux de demande et confirmation, gestion des statuts et metriques dashboard pour le travail a venir.",
      highlights: [
        "Flux de reservation public avec logique de disponibilites",
        "Catalogue de services avec duree et prix",
        "Dashboard operationnel des reservations a venir",
      ],
      recruiterValue:
        "Montre des operations de rendez-vous au-dela des dashboards generiques: regles de disponibilite, cycle de vie des reservations et structure de confirmation par courriel.",
      buildNotes: [
        "La logique de disponibilites calcule les plages libres depuis les horaires.",
        "Les statuts vont de la demande a la confirmation puis la completion.",
        "Transmet les clients confirmes a ClientHub via les donnees partagees.",
      ],
      ecosystemRole:
        "Convertit les soumissions acceptees en travail planifie avec disponibilites et gestion des reservations.",
    },
    liveUrl: "https://reserveflow-psi.vercel.app",
    repoUrl: "https://github.com/kurtisv/reserveflow",
  },
  {
    slug: "clienthub",
    name: "ClientHub",
    category: "Client portal showcase",
    status: "live",
    ecosystemRole:
      "Centralizes the ongoing client relationship: project status, files, milestones, and messages in one portal.",
    summary:
      "A client portal presented as a calm, premium 3D workspace: projects, files, milestones, and messages in one surface.",
    description:
      "ClientHub is the client-portal showcase of the ecosystem. Its hero reads as a sober 3D client room rather than a technical scene: a central project card with status and progress, supporting signals for files and milestones, and a short navigation path to the case study and inspectable surfaces.",
    stack: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "CSS 3D"],
    highlights: [
      "Sober 3D client-room hero with clear hierarchy",
      "Central project card with status and progress",
      "Files, milestones, and messages as work signals",
    ],
    recruiterValue:
      "Shows B2B product storytelling and visual direction: a premium portal surface that stays readable on desktop and mobile.",
    buildNotes: [
      "One of three standalone showcases with a distinct 3D metaphor.",
      "The 3D scene is pure CSS, kept sober so hierarchy stays clear.",
      "Receives confirmed clients from ReserveFlow through the shared ecosystem data.",
    ],
    fr: {
      category: "Vitrine portail client",
      summary:
        "Un portail client presente comme un workspace 3D calme et premium: projets, fichiers, jalons et messages dans une seule surface.",
      description:
        "ClientHub est la vitrine portail client de l'ecosysteme. Son hero se lit comme un espace client 3D sobre plutot qu'une scene technique: carte projet centrale avec statut et progression, signaux secondaires pour fichiers et jalons, et navigation courte vers l'etude de cas et les surfaces inspectables.",
      highlights: [
        "Hero 3D sobre type espace client avec hierarchie claire",
        "Carte projet centrale avec statut et progression",
        "Fichiers, jalons et messages comme signaux de travail reel",
      ],
      recruiterValue:
        "Montre la narration produit B2B et la direction visuelle: une surface portail premium qui reste lisible sur desktop et mobile.",
      buildNotes: [
        "Une des trois vitrines autonomes avec sa propre metaphore 3D.",
        "La scene 3D est en CSS pur, gardee sobre pour la hierarchie.",
        "Recoit les clients confirmes de ReserveFlow via les donnees partagees.",
      ],
      ecosystemRole:
        "Centralise la relation client en cours: statut projet, fichiers, jalons et messages dans un seul portail.",
    },
    liveUrl: "https://clienthub-five.vercel.app",
    repoUrl: "https://github.com/kurtisv/clienthub",
  },
  {
    slug: "commercekit",
    name: "CommerceKit",
    category: "Commerce flow showcase",
    status: "live",
    ecosystemRole:
      "Adds the commerce side of the ecosystem: products, checkout, orders, and revenue tracking.",
    summary:
      "A Stripe-ready commerce product showing the full chain: catalog, checkout, orders, and a fulfillment cockpit.",
    description:
      "CommerceKit shows the complete commerce chain in one product: an active catalog with inventory and prices in cents, a demo checkout flow with totals, taxes, and shipping, public order tokens with client confirmation and statuses, and an operations cockpit tracking revenue, fulfillment, and recent orders.",
    stack: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Stripe-ready"],
    highlights: [
      "Catalog with inventory, prices in cents, and categories",
      "Demo checkout with totals, taxes, and shipping",
      "Operations cockpit for revenue and fulfillment",
    ],
    recruiterValue:
      "Shows commerce data modeling end to end: product, checkout, payment-ready structure, order lifecycle, and fulfillment in a recruiter-readable product object.",
    buildNotes: [
      "Order tokens give clients a public confirmation surface without auth.",
      "Checkout is structured for Stripe Checkout to drop in.",
      "Second of three standalone showcases, with a 3D product-shelf hero.",
    ],
    fr: {
      category: "Vitrine flux commerce",
      summary:
        "Un produit commerce pret pour Stripe montrant la chaine complete: catalogue, checkout, commandes et cockpit de fulfillment.",
      description:
        "CommerceKit montre la chaine commerce complete dans un seul produit: catalogue actif avec inventaire et prix en cents, flux checkout demo avec totaux, taxes et livraison, tokens de commande publics avec confirmation client et statuts, et un cockpit operations qui suit revenu, fulfillment et commandes recentes.",
      highlights: [
        "Catalogue avec inventaire, prix en cents et categories",
        "Checkout demo avec totaux, taxes et livraison",
        "Cockpit operations pour revenu et fulfillment",
      ],
      recruiterValue:
        "Montre la modelisation commerce de bout en bout: produit, checkout, structure prete pour paiement, cycle de commande et fulfillment dans un objet produit lisible par un recruteur.",
      buildNotes: [
        "Les tokens de commande donnent une surface de confirmation publique sans auth.",
        "Le checkout est structure pour accueillir Stripe Checkout.",
        "Deuxieme des trois vitrines autonomes, avec un hero 3D type etagere produit.",
      ],
      ecosystemRole:
        "Ajoute le volet commerce de l'ecosysteme: produits, checkout, commandes et suivi du revenu.",
    },
    liveUrl: "https://commercekit.vercel.app",
    repoUrl: "https://github.com/kurtisv/commercekit",
  },
  {
    slug: "eventpass",
    name: "EventPass",
    category: "Event registration showcase",
    status: "live",
    ecosystemRole:
      "Covers events: registration, check-in, and an operations agenda connected to the same shared data.",
    summary:
      "An event registration and check-in product with an operations agenda, a registration pipeline, and a 3D event-card hero.",
    description:
      "EventPass handles event registration and check-in: a client event card that stays clear and premium from the hero, an operations agenda for the team, and a registration pipeline that tracks attendees from signup to check-in -- the third standalone showcase of the ecosystem.",
    stack: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "CSS 3D"],
    highlights: [
      "Readable 3D event-card hero",
      "Registration pipeline from signup to check-in",
      "Operations agenda for the event team",
    ],
    recruiterValue:
      "Shows a domain-specific operational product: registration lifecycle, check-in flows, and a visual identity distinct from the other showcases.",
    buildNotes: [
      "Third standalone showcase, with its own 3D event-card metaphor.",
      "The registration pipeline reads as lanes from signup to checked-in.",
      "Connected to the shared Supabase KV Portfolio ecosystem data.",
    ],
    fr: {
      category: "Vitrine inscription evenement",
      summary:
        "Un produit d'inscription et de check-in evenement avec agenda operationnel, pipeline d'inscriptions et hero 3D carte evenement.",
      description:
        "EventPass gere l'inscription et le check-in d'evenements: une carte evenement client claire et premium des le hero, un agenda operationnel pour l'equipe et un pipeline d'inscriptions qui suit les participants du signup au check-in -- la troisieme vitrine autonome de l'ecosysteme.",
      highlights: [
        "Hero 3D carte evenement lisible",
        "Pipeline d'inscriptions du signup au check-in",
        "Agenda operationnel pour l'equipe evenement",
      ],
      recruiterValue:
        "Montre un produit operationnel specifique a un domaine: cycle d'inscription, flux de check-in et identite visuelle distincte des autres vitrines.",
      buildNotes: [
        "Troisieme vitrine autonome, avec sa propre metaphore 3D carte evenement.",
        "Le pipeline d'inscriptions se lit en colonnes du signup au check-in.",
        "Connecte aux donnees partagees Supabase KV Portfolio.",
      ],
      ecosystemRole:
        "Couvre les evenements: inscription, check-in et agenda operationnel relies aux memes donnees partagees.",
    },
    liveUrl: "https://eventpass-nine.vercel.app",
    repoUrl: "https://github.com/kurtisv/eventpass",
  },
  {
    slug: "supportdesk-lite",
    name: "SupportDesk Lite",
    category: "Support ticketing portal",
    status: "live",
    ecosystemRole:
      "Handles post-sale support: client tickets flow into an agent dashboard with statuses and priorities.",
    summary:
      "A lightweight customer support portal: public ticket submission, agent dashboard, priorities, internal notes, and email notifications.",
    description:
      "SupportDesk Lite is a functional ticketing system for small support teams. Customers submit requests through a public form without an account; agents manage them in a protected dashboard with statuses (open, in progress, resolved, closed), priority levels, internal notes, and email notifications.",
    stack: ["Next.js", "TypeScript", "Supabase", "Auth.js", "Resend"],
    highlights: [
      "Public ticket submission without an account",
      "Agent dashboard with statuses and priorities",
      "Internal notes and email notifications",
    ],
    recruiterValue:
      "Shows a protected operational tool: auth-gated dashboard, role separation between customers and agents, and a complete ticket lifecycle.",
    buildNotes: [
      "First project of the series built on the kv-web-starter monorepo.",
      "Ticket statuses and priorities drive the agent dashboard views.",
      "Email notifications are wired through Resend.",
    ],
    fr: {
      category: "Portail support et tickets",
      summary:
        "Un portail de support client leger: soumission publique de tickets, dashboard agent, priorites, notes internes et notifications courriel.",
      description:
        "SupportDesk Lite est un systeme de tickets fonctionnel pour petites equipes de support. Les clients soumettent des demandes via un formulaire public sans compte; les agents les gerent dans un dashboard protege avec statuts (ouvert, en cours, resolu, ferme), niveaux de priorite, notes internes et notifications courriel.",
      highlights: [
        "Soumission publique de tickets sans compte",
        "Dashboard agent avec statuts et priorites",
        "Notes internes et notifications courriel",
      ],
      recruiterValue:
        "Montre un outil operationnel protege: dashboard avec auth, separation des roles clients et agents, et cycle de vie complet des tickets.",
      buildNotes: [
        "Premier projet de la serie construit sur le monorepo kv-web-starter.",
        "Statuts et priorites alimentent les vues du dashboard agent.",
        "Notifications courriel branchees via Resend.",
      ],
      ecosystemRole:
        "Gere le support apres-vente: les tickets clients arrivent dans un dashboard agent avec statuts et priorites.",
    },
    liveUrl: "https://supportdesk-lite-jet.vercel.app",
    repoUrl: "https://github.com/kurtisv/supportdesk-lite",
  },
  {
    slug: "api-meter",
    name: "API Meter",
    category: "SaaS API portal",
    status: "live",
    ecosystemRole:
      "Shows the billing-ready SaaS side of the foundation: usage metering, API keys, and developer docs.",
    summary:
      "A SaaS/API portal with usage metering, API keys, developer docs, pricing, and a demo dashboard.",
    description:
      "API Meter demonstrates the SaaS/API portal side of the boilerplate: API key management, usage metering with billing-ready events, a developer portal with documentation, a pricing concept page, and a demo dashboard -- all on production-ready Next.js foundations.",
    stack: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    highlights: [
      "API key management and usage metering",
      "Developer portal with documentation",
      "Billing-ready usage events",
    ],
    recruiterValue:
      "Shows API product thinking: keys, limits, metering, docs, and pricing presented as a coherent developer-facing portal.",
    buildNotes: [
      "Usage events are structured to be billing-ready.",
      "The developer portal exposes docs, keys, and a demo dashboard.",
      "Fourth project built from kv-web-starter.",
    ],
    fr: {
      category: "Portail SaaS API",
      summary:
        "Un portail SaaS/API avec mesure d'usage, cles API, docs developpeur, tarification et dashboard demo.",
      description:
        "API Meter demontre le volet portail SaaS/API du boilerplate: gestion de cles API, mesure d'usage avec evenements prets pour la facturation, portail developpeur avec documentation, page de tarification concept et dashboard demo -- sur des fondations Next.js production.",
      highlights: [
        "Gestion de cles API et mesure d'usage",
        "Portail developpeur avec documentation",
        "Evenements d'usage prets pour la facturation",
      ],
      recruiterValue:
        "Montre une vision produit API: cles, limites, mesure, docs et tarification presentees comme un portail developpeur coherent.",
      buildNotes: [
        "Les evenements d'usage sont structures pour la facturation.",
        "Le portail developpeur expose docs, cles et dashboard demo.",
        "Quatrieme projet construit depuis kv-web-starter.",
      ],
      ecosystemRole:
        "Montre le volet SaaS pret pour facturation de la fondation: mesure d'usage, cles API et docs developpeur.",
    },
    liveUrl: "https://api-meter.vercel.app",
    repoUrl: "https://github.com/kurtisv/api-meter",
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
  },
];

export function getProjectBySlug(slug: string) {
  return publicPortfolioProjects.find((project) => project.slug === slug);
}

export const ecosystemOrder = [
  "eventpic",
  "luma-studio",
  "quotepilot",
  "reserveflow",
  "clienthub",
  "commercekit",
  "eventpass",
  "supportdesk-lite",
  "api-meter",
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
      cta: "Work together",
    },
    home: {
      eyebrow: "Developer portfolio",
      title: "I build web products that are useful, shipped, and easy to review.",
      projects: "View projects",
      github: "GitHub",
      selectedEyebrow: "Selected work",
      selectedTitle:
        "A portfolio centered on a connected ecosystem of live products, real client sites, and mobile apps.",
      selectedDescription:
        "Eight live ecosystem sites built from one boilerplate, two mobile apps, and real client launches -- shipped code with product depth across different verticals.",
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
      ["13", "projects shipped across the portfolio"],
      ["10", "live sites online"],
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
      cta: "Travailler ensemble",
    },
    home: {
      eyebrow: "Portfolio developpeur",
      title: "Je construis des produits web utiles, livres et faciles a reviser.",
      projects: "Voir les projets",
      github: "GitHub",
      selectedEyebrow: "Travaux selectionnes",
      selectedTitle:
        "Un portfolio centre sur un ecosysteme connecte de produits live, de vrais sites clients et d'apps mobiles.",
      selectedDescription:
        "Huit sites ecosysteme live construits depuis un seul boilerplate, deux apps mobiles et de vrais lancements clients -- du code livre avec de la profondeur produit dans differents domaines.",
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
      ["13", "projets livres dans le portfolio"],
      ["10", "sites live en ligne"],
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
    eyebrow: "Published ecosystem",
    title: "The portfolio shows the whole published ecosystem, live.",
    description:
      "Eight live sites built from kv-web-starter cover one business path -- Luma Studio attracts, QuotePilot quotes, ReserveFlow books, ClientHub serves clients, CommerceKit sells, EventPass runs events, SupportDesk Lite supports, API Meter meters -- alongside EventPic, the mobile event photo app, and the real client launches.",
    database: "Shared database: Supabase KV Portfolio",
    foundation: "Foundation: kv-web-starter boilerplate",
    cta: "Explore the path",
  },
  fr: {
    eyebrow: "Ecosysteme publie",
    title: "Le portfolio montre tout l'ecosysteme publie, en ligne.",
    description:
      "Huit sites live construits depuis kv-web-starter couvrent un meme parcours d'affaires -- Luma Studio attire, QuotePilot soumissionne, ReserveFlow reserve, ClientHub sert les clients, CommerceKit vend, EventPass gere les evenements, SupportDesk Lite supporte, API Meter mesure -- aux cotes d'EventPic, l'app mobile photo evenement, et des vrais sites clients lances.",
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
    {
      step: "03",
      title: "Book the work",
      description: "ReserveFlow schedules the accepted work with availability logic and booking management.",
      projects: ["reserveflow"],
    },
    {
      step: "04",
      title: "Serve the client",
      description: "ClientHub centralizes project status, files, milestones, and messages for the ongoing relationship.",
      projects: ["clienthub"],
    },
    {
      step: "05",
      title: "Sell and run events",
      description: "CommerceKit handles catalog, checkout, and orders; EventPass covers registration and check-in.",
      projects: ["commercekit", "eventpass"],
    },
    {
      step: "06",
      title: "Support and measure",
      description: "SupportDesk Lite handles post-sale tickets while API Meter meters usage with billing-ready events.",
      projects: ["supportdesk-lite", "api-meter"],
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
    {
      step: "03",
      title: "Reserver le travail",
      description: "ReserveFlow planifie le travail accepte avec logique de disponibilites et gestion des reservations.",
      projects: ["reserveflow"],
    },
    {
      step: "04",
      title: "Servir le client",
      description: "ClientHub centralise statut projet, fichiers, jalons et messages pour la relation en cours.",
      projects: ["clienthub"],
    },
    {
      step: "05",
      title: "Vendre et gerer les evenements",
      description: "CommerceKit gere catalogue, checkout et commandes; EventPass couvre inscription et check-in.",
      projects: ["commercekit", "eventpass"],
    },
    {
      step: "06",
      title: "Supporter et mesurer",
      description: "SupportDesk Lite gere les tickets apres-vente pendant qu'API Meter mesure l'usage avec evenements de facturation.",
      projects: ["supportdesk-lite", "api-meter"],
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
