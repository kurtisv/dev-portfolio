import type { Metadata } from "next";

import { ProjectCard } from "@/components/portfolio/project-card";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { featuredProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio projects, client websites, SaaS portals, dashboards, and app work.",
};

export default function ProjectsPage() {
  return (
    <MarketingPageShell>
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Projects"
          title="Work that shows different product surfaces and real delivery habits."
          description="This page is the index for portfolio builds, live websites, private client contexts, and application work."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>
    </MarketingPageShell>
  );
}
