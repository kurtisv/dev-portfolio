import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { MarketingPageShell } from "@/components/marketing/page-shell";
import { PrintButton } from "@/components/portfolio/print-button";
import { aboutProfile } from "@/data/portfolio";
import { getCurrentLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "CV",
  description: "Resume of Kurtis Verres: telecom technician with a hybrid IT and web development profile.",
};

const copy = {
  en: {
    print: "Print / Save as PDF",
    profile: "Professional profile",
    skills: "Key skills",
    experience: "Experience",
    projects: "Technical projects",
    projectsNote: "Each project below is documented in detail, with screenshots and live links, in the portfolio.",
    projectsCta: "See all projects",
    education: "Education",
    educationItems: ["AEC in computer science"],
    languages: "Languages",
    qualities: "Professional qualities",
    qualitiesItems: [
      "Analytical mindset",
      "Autonomy",
      "Rigor",
      "Customer service",
      "Stress management",
      "Fast adaptation",
      "Technical popularization",
    ],
    projectItems: [
      {
        name: "Suze Immo (real estate platform)",
        tech: "React / Supabase / Storage / Auth / SQL",
        href: "/projects/suze-immo",
        bullets: [
          "Delivered for a real client and live today at suzeimmo.com.",
          "Web interface to display, manage, and publish real estate listings.",
          "Authentication, file storage, and SQL data layer through Supabase.",
        ],
      },
      {
        name: "GasMobile (GasSaver)",
        tech: "React Native / Expo / APIs / mapping",
        href: "/projects/gasmobile",
        bullets: [
          "Mobile app showing gas stations, fuel prices, and location data on a live map.",
          "Government data APIs, geolocation, search, routing, and dynamic data display.",
          "Debugged build, data, mobile performance, and API issues end to end.",
        ],
      },
      {
        name: "EventPic (event photo app)",
        tech: "React Native / Cloudflare Workers / R2",
        href: "/projects/eventpic",
        bullets: [
          "Real-time shared photo feed for private events with QR code invitations.",
          "Per-event theming, admin moderation, and a Cloudflare Workers edge backend.",
        ],
      },
      {
        name: "Luma Studio (marketing site)",
        tech: "Next.js / TypeScript / Tailwind / Prisma / Stripe",
        href: "/projects/luma-studio",
        bullets: [
          "Full SaaS marketing and booking platform built on the kv-web-starter boilerplate.",
          "Bilingual (FR/EN), Stripe subscriptions, validated contact form, production deploy.",
        ],
      },
      {
        name: "SpeedZone (car dealership site)",
        tech: "Next.js / TypeScript / Tailwind",
        href: "/projects/speedzone",
        bullets: [
          "Bilingual car dealership website with inventory browsing and contact flow.",
          "Built in parallel with Luma Studio to demonstrate the boilerplate's adaptability.",
        ],
      },
      {
        name: "kv-web-starter (open-source boilerplate)",
        tech: "Next.js / TypeScript / Tailwind / Prisma / Stripe / Resend",
        href: "/projects/kv-web-starter",
        bullets: [
          "Production-ready Next.js boilerplate used as the foundation for all portfolio web projects.",
          "Auth, billing, email, i18n, and dashboard — open-source on GitHub.",
        ],
      },
    ],
  },
  fr: {
    print: "Imprimer / Enregistrer en PDF",
    profile: "Profil professionnel",
    skills: "Competences cles",
    experience: "Experience professionnelle",
    projects: "Projets techniques",
    projectsNote: "Chaque projet ci-dessous est documente en detail, avec captures et liens live, dans le portfolio.",
    projectsCta: "Voir tous les projets",
    education: "Formation",
    educationItems: ["AEC en informatique"],
    languages: "Langues",
    qualities: "Qualites professionnelles",
    qualitiesItems: [
      "Esprit d'analyse",
      "Autonomie",
      "Rigueur",
      "Service client",
      "Gestion du stress",
      "Adaptation rapide",
      "Vulgarisation technique",
    ],
    projectItems: [
      {
        name: "Suze Immo (plateforme immobiliere)",
        tech: "React / Supabase / Storage / Auth / SQL",
        href: "/projects/suze-immo",
        bullets: [
          "Livre pour un vrai client, en ligne aujourd'hui sur suzeimmo.com.",
          "Interface web pour afficher, gerer et publier des proprietes immobilieres.",
          "Authentification, stockage de fichiers et couche SQL via Supabase.",
        ],
      },
      {
        name: "GasMobile (GasSaver)",
        tech: "React Native / Expo / API / cartographie",
        href: "/projects/gasmobile",
        bullets: [
          "App mobile affichant stations-service, prix d'essence et donnees de localisation sur carte.",
          "API de donnees gouvernementales, geolocalisation, recherche, itineraires et affichage dynamique.",
          "Debogage de bout en bout: builds, donnees, performances mobiles et appels API.",
        ],
      },
      {
        name: "EventPic (app photo evenement)",
        tech: "React Native / Cloudflare Workers / R2",
        href: "/projects/eventpic",
        bullets: [
          "Fil photo partage en temps reel pour evenements prives avec invitations QR.",
          "Theme par evenement, moderation admin et backend edge Cloudflare Workers.",
        ],
      },
      {
        name: "Luma Studio (site marketing)",
        tech: "Next.js / TypeScript / Tailwind / Prisma / Stripe",
        href: "/projects/luma-studio",
        bullets: [
          "Plateforme marketing et reservation SaaS construite sur le boilerplate kv-web-starter.",
          "Bilingue FR/EN, abonnements Stripe, formulaire de contact valide, deploy production.",
        ],
      },
      {
        name: "SpeedZone (site concessionnaire auto)",
        tech: "Next.js / TypeScript / Tailwind",
        href: "/projects/speedzone",
        bullets: [
          "Site bilingue pour concessionnaire auto avec navigation inventaire et flux de contact.",
          "Construit en parallele de Luma Studio pour demontrer l'adaptabilite du boilerplate.",
        ],
      },
      {
        name: "kv-web-starter (boilerplate open-source)",
        tech: "Next.js / TypeScript / Tailwind / Prisma / Stripe / Resend",
        href: "/projects/kv-web-starter",
        bullets: [
          "Boilerplate Next.js production-ready, base de tous les projets web du portfolio.",
          "Auth, facturation, email, i18n et dashboard — open-source sur GitHub.",
        ],
      },
    ],
  },
} as const;

function CvSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 break-inside-avoid">
      <h2 className="border-b border-border pb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default async function CvPage() {
  const locale = await getCurrentLocale();
  const t = copy[locale];
  const p = aboutProfile[locale];

  return (
    <MarketingPageShell>
      <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20 print:max-w-none print:px-0 print:py-0">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <h1 className="font-display text-4xl font-semibold tracking-normal sm:text-5xl">
              {aboutProfile.fullName}
            </h1>
            <p className="mt-2 font-medium text-primary">{p.role}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {aboutProfile.location} | {aboutProfile.email}
            </p>
          </div>
          <PrintButton label={t.print} />
        </div>

        <CvSection title={t.profile}>
          <p className="leading-7 text-muted-foreground">{p.intro}</p>
          <p className="mt-3 leading-7 text-muted-foreground">{p.objective}</p>
        </CvSection>

        <CvSection title={t.skills}>
          <div className="grid gap-5 sm:grid-cols-2">
            {p.skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-semibold">{group.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{group.items.join(", ")}</p>
              </div>
            ))}
            <div>
              <h3 className="font-semibold">{t.qualities}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{t.qualitiesItems.join(", ")}</p>
            </div>
          </div>
        </CvSection>

        <CvSection title={t.experience}>
          <h3 className="text-lg font-semibold">{p.experience.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {p.experience.company} | {p.experience.period}
          </p>
          <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm leading-6 text-muted-foreground">
            {p.experience.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </CvSection>

        <CvSection title={t.projects}>
          <p className="text-sm leading-6 text-muted-foreground">{t.projectsNote}</p>
          <div className="mt-5 grid gap-6">
            {t.projectItems.map((project) => (
              <div key={project.name} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <span className="text-sm text-muted-foreground">{project.tech}</span>
                </div>
                <ul className="mt-2 grid list-disc gap-1.5 pl-5 text-sm leading-6 text-muted-foreground">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <Link
                  href={project.href}
                  className="no-print mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  {t.projectsCta} <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </CvSection>

        <CvSection title={t.education}>
          <ul className="grid gap-2 text-sm leading-6 text-muted-foreground">
            {t.educationItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CvSection>

        <CvSection title={t.languages}>
          <p className="text-sm leading-6 text-muted-foreground">{p.languages.join(" | ")}</p>
        </CvSection>
      </main>
    </MarketingPageShell>
  );
}
