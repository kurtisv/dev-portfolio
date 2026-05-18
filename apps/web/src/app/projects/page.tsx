import type { Metadata } from "next";

import { ProjectCard } from "@/components/portfolio/project-card";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { ecosystemFlow, ecosystemNarrative, getProjectsInEcosystemOrder } from "@/data/portfolio";
import { getCurrentLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio projects, client websites, SaaS portals, dashboards, and app work.",
};

const copy = {
  en: {
    eyebrow: "Projects",
    title: "A focused portfolio path built from one reusable foundation.",
    description:
      "The public portfolio now keeps the cleanest recruiter path: public brand, sales, booking, support, and API activity.",
    mapTitle: "How the modules work together",
    cardCta: "Module to inspect",
    dataIn: "Receives",
    dataOut: "Sends forward",
  },
  fr: {
    eyebrow: "Projets",
    title: "Un parcours portfolio cible construit depuis une fondation reutilisable.",
    description:
      "Le portfolio public garde maintenant le chemin recruteur le plus clair: marque publique, vente, rendez-vous, support et activite API.",
    mapTitle: "Comment les modules se completent",
    cardCta: "Module a inspecter",
    dataIn: "Recoit",
    dataOut: "Transmet",
  },
} as const;

const handoffCopy = {
  en: [
    ["Public visitor, project interest", "Qualified lead for QuotePilot"],
    ["Luma request, budget, scope", "Accepted quote and next booking need"],
    ["Qualified quote and service type", "Confirmed appointment and customer context"],
    ["Booking, accepted quote, and customer need", "Resolved ticket and customer health"],
    ["Lead, quote, booking, and support events", "Usage, errors, limits, and technical proof"],
  ],
  fr: [
    ["Visiteur public, interet projet", "Lead qualifie pour QuotePilot"],
    ["Demande Luma, budget, portee", "Soumission acceptee et besoin de rendez-vous"],
    ["Soumission qualifiee et type de service", "Rendez-vous confirme et contexte client"],
    ["Rendez-vous, soumission acceptee et besoin client", "Ticket resolu et sante client"],
    ["Evenements lead, soumission, rendez-vous et support", "Usage, erreurs, limites et preuve technique"],
  ],
} as const;

export default async function ProjectsPage() {
  const locale = await getCurrentLocale();
  const t = copy[locale];
  const ecosystem = ecosystemNarrative[locale];
  const flow = ecosystemFlow[locale];
  const orderedProjects = getProjectsInEcosystemOrder();
  const handoffs = handoffCopy[locale];

  return (
    <MarketingPageShell>
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />
        <section className="mt-10 border border-border bg-card p-5 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {ecosystem.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-normal">{t.mapTitle}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {ecosystem.description}
              </p>
              <p className="mt-4 border-l-2 border-primary/50 pl-3 text-sm font-semibold text-primary">
                {ecosystem.database}
              </p>
            </div>
            <div className="grid gap-3">
              {flow.map((item) => (
                <div key={item.step} className="grid gap-3 border border-border bg-background p-4 sm:grid-cols-[3rem_1fr]">
                  <span className="font-mono text-sm font-semibold text-primary">{item.step}</span>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="mt-10 grid gap-5">
          {flow.map((item, index) => {
            const project = orderedProjects.find((entry) => entry.slug === item.projects[0]);
            if (!project) return null;
            const handoff = handoffs[index];

            return (
              <article key={item.step} className="grid gap-5 border border-border bg-card p-5 shadow-sm lg:grid-cols-[0.72fr_1.28fr]">
                <div className="border border-primary/15 bg-background p-5">
                  <p className="font-mono text-sm font-semibold text-primary">{item.step}</p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-normal">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  <div className="mt-5 grid gap-3 text-sm">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{t.dataIn}</p>
                      <p className="mt-1 font-medium">{handoff[0]}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{t.dataOut}</p>
                      <p className="mt-1 font-medium">{handoff[1]}</p>
                    </div>
                  </div>
                  <p className="mt-5 border-l-2 border-primary/40 pl-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {t.cardCta}
                  </p>
                </div>
                <ProjectCard project={project} locale={locale} />
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {orderedProjects.slice(8).map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </div>
      </main>
    </MarketingPageShell>
  );
}
