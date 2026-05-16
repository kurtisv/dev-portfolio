import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { PortfolioProject } from "@/data/portfolio";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="group flex h-full flex-col border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-emerald-700">{project.category}</p>
          <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
        </div>
        <span className="border border-border bg-background px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {project.status}
        </span>
      </div>
      <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">
        {project.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 3).map((item) => (
          <span key={item} className="bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
            {item}
          </span>
        ))}
      </div>
      <Link
        href={`/projects/${project.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
      >
        View case note <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}
