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
    title: "Portfolio projects — real sites, live products, mobile apps, and the boilerplate foundation.",
    description:
      "Seven shipped projects: live sites built from one boilerplate, the EventPic and GasMobile mobile apps, real client launches, and the Next.js starter that powers them all.",
  },
  fr: {
    eyebrow: "Projets",
    title: "Projets portfolio — vrais sites, produits live, apps mobiles et la fondation boilerplate.",
    description:
      "Sept projets livres: des sites live construits depuis un seul boilerplate, les apps mobiles EventPic et GasMobile, de vrais lancements clients et le starter Next.js qui les alimente tous.",
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
