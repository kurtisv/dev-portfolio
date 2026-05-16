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
    <article className="group flex h-full flex-col border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-emerald-700">{copy.category}</p>
          <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
        </div>
        <span className="border border-border bg-background px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
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
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground"
        >
          {labels.details} <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5" />
        </Link>
        {project.liveUrl ? (
          <Link
            href={project.liveUrl}
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700"
          >
            {labels.live} <ArrowUpRight className="size-4" />
          </Link>
        ) : null}
        {project.repoUrl ? (
          <Link
            href={project.repoUrl}
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground"
          >
            {labels.repo} <ArrowUpRight className="size-4" />
          </Link>
        ) : null}
      </div>
    </article>
  );
}
