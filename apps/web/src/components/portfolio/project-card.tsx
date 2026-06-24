import Image from "next/image";
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
    <article className="project-card-accent group flex h-full flex-col border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_50px_rgba(14,23,21,0.12)]">
      {project.previewImage ? (
        <div className="relative h-52 w-full overflow-hidden border-b border-border bg-muted">
          <Image
            src={project.previewImage}
            alt={`${project.name} preview`}
            fill
            className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ) : (
        <div className="relative flex h-52 flex-col justify-between overflow-hidden border-b border-border bg-[#111a17] p-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/30">
            {project.category}
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
              Stack
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.stack.slice(0, 5).map((item) => (
                <span
                  key={item}
                  className="border border-white/10 bg-white/[0.06] px-2 py-0.5 font-mono text-[10px] text-white/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <span className="absolute right-4 top-4 text-6xl font-bold tracking-tighter text-white/[0.04]">
            {project.name.slice(0, 2).toUpperCase()}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
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
      {copy.ecosystemRole ? (
        <div className="mt-4 border-l-2 border-primary/45 bg-background/70 px-3 py-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
            {labels.role}
          </p>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            {copy.ecosystemRole}
          </p>
        </div>
      ) : null}
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
      </div>
    </article>
  );
}
