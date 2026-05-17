import type { Metadata } from "next";

import { ProjectCard } from "@/components/portfolio/project-card";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { ecosystemFlow, ecosystemNarrative, featuredProjects } from "@/data/portfolio";
import { getCurrentLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio projects, client websites, SaaS portals, dashboards, and app work.",
};

const copy = {
  en: {
    eyebrow: "Projects",
    title: "A connected product ecosystem built from one reusable foundation.",
    description:
      "These projects are organized as a company operating system, not a loose gallery: public brand, sales, booking, delivery, commerce, events, support, and API usage.",
    mapTitle: "How the modules work together",
  },
  fr: {
    eyebrow: "Projets",
    title: "Un ecosysteme produit connecte construit depuis une fondation reutilisable.",
    description:
      "Ces projets sont organises comme un systeme d'entreprise, pas comme une galerie: marque publique, ventes, reservation, livraison, commerce, evenements, support et usage API.",
    mapTitle: "Comment les modules se completent",
  },
} as const;

export default async function ProjectsPage() {
  const locale = await getCurrentLocale();
  const t = copy[locale];
  const ecosystem = ecosystemNarrative[locale];
  const flow = ecosystemFlow[locale];

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
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </div>
      </main>
    </MarketingPageShell>
  );
}
