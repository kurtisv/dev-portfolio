import type { Metadata } from "next";

import { ProjectCard } from "@/components/portfolio/project-card";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { getProjectsInEcosystemOrder } from "@/data/portfolio";
import { getCurrentLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio projects, client websites, SaaS portals, dashboards, and app work.",
};

const copy = {
  en: {
    eyebrow: "Projects",
    title: "Portfolio projects — real sites, a marketing demo, a mobile app, and the boilerplate foundation.",
    description:
      "Five shipped projects across different verticals: a client real estate site, an automotive platform, a mobile gas price app, a bilingual marketing demo, and the Next.js starter that powers them all.",
  },
  fr: {
    eyebrow: "Projets",
    title: "Projets portfolio — vrais sites, une demo marketing, une app mobile et la fondation boilerplate.",
    description:
      "Cinq projets livres dans differents domaines: un site client immobilier, une plateforme auto, une app mobile de prix carburant, une demo marketing bilingue et le starter Next.js qui les alimente tous.",
  },
} as const;

export default async function ProjectsPage() {
  const locale = await getCurrentLocale();
  const t = copy[locale];
  const orderedProjects = getProjectsInEcosystemOrder();

  return (
    <MarketingPageShell>
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {orderedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </div>
      </main>
    </MarketingPageShell>
  );
}
