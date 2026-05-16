import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getProjectCopy, pageCopy, type PortfolioProject } from "@/data/portfolio";
import type { Locale } from "@/i18n/config";

export function ProjectCard({
  project,
  locale = "en",
}: {
  project: PortfolioProject;
  locale?: Locale;
}) {
  const copy = getProjectCopy(project, locale);
  const labels = pageCopy[locale].projectCard;

  return (
    <article className="project-card-accent group flex h-full flex-col border border-border bg-card p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_50px_rgba(14,23,21,0.12)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">{copy.category}</p>
          <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
        </div>
        <span className="border border-border bg-background/85 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {project.status}
        </span>
      </div>
      <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">
        {copy.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 3).map((item) => (
          <span key={item} className="bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 border border-foreground/15 bg-foreground px-3 py-1.5 text-sm font-semibold text-background transition hover:bg-primary"
        >
          {labels.details} <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5" />
        </Link>
        {project.liveUrl ? (
          <Link
            href={project.liveUrl}
            className="inline-flex items-center gap-2 border border-primary/25 bg-secondary/70 px-3 py-1.5 text-sm font-semibold text-primary transition hover:border-primary"
          >
            {labels.live} <ArrowUpRight className="size-4" />
          </Link>
        ) : null}
        {project.repoUrl ? (
          <Link
            href={project.repoUrl}
            className="inline-flex items-center gap-2 px-2 py-1.5 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
          >
            {labels.repo} <ArrowUpRight className="size-4" />
          </Link>
        ) : null}
      </div>
    </article>
  );
}
