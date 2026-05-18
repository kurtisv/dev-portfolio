import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { MarketingPageShell } from "@/components/marketing/page-shell";
import { Button } from "@/components/ui/button";
import {
  ecosystemNarrative,
  getProjectBySlug,
  getProjectCopy,
  publicPortfolioProjects,
} from "@/data/portfolio";
import { getCurrentLocale } from "@/lib/locale";

export function generateStaticParams() {
  return publicPortfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const locale = await getCurrentLocale();

  if (!project) {
    notFound();
  }
  const copy = getProjectCopy(project, locale);
  const labels = {
    en: {
      back: "Back to projects",
      status: "Status",
      live: "Live site",
      repo: "GitHub",
      recruiter: "Recruiter value",
      notes: "Build notes",
      stack: "Stack",
      ecosystem: "Role in the ecosystem",
      connected: "Connected modules",
    },
    fr: {
      back: "Retour aux projets",
      status: "Statut",
      live: "Site live",
      repo: "GitHub",
      recruiter: "Valeur recruteur",
      notes: "Notes de build",
      stack: "Stack",
      ecosystem: "Role dans l'ecosysteme",
      connected: "Modules relies",
    },
  }[locale];
  const ecosystem = ecosystemNarrative[locale];
  const connectedProjects = (project.ecosystemLinks ?? [])
    .map((linkedSlug) => getProjectBySlug(linkedSlug))
    .filter((linkedProject): linkedProject is NonNullable<typeof linkedProject> => Boolean(linkedProject));

  return (
    <MarketingPageShell>
      <main>
        <section className="border-b border-border bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              {labels.back}
            </Link>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.85fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  {copy.category}
                </p>
                <h1 className="mt-4 text-5xl font-semibold tracking-normal text-balance sm:text-6xl">
                  {project.name}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                  {copy.description}
                </p>
              </div>
              <aside className="border border-border bg-background p-6 shadow-sm">
                <p className="text-sm font-medium text-muted-foreground">{labels.status}</p>
                <p className="mt-2 text-xl font-semibold capitalize">{project.status}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.liveUrl ? (
                    <Button asChild>
                      <Link href={project.liveUrl} target="_blank">
                        {labels.live} <ArrowUpRight className="size-4" />
                      </Link>
                    </Button>
                  ) : null}
                  {project.repoUrl ? (
                    <Button asChild variant="secondary">
                      <Link href={project.repoUrl} target="_blank">
                        {labels.repo} <ArrowUpRight className="size-4" />
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </aside>
            </div>
          </div>
        </section>

        {copy.ecosystemRole ? (
          <section className="border-b border-border bg-[#111a17] text-white">
            <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f0d7b1]">
                  {labels.ecosystem}
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-normal text-balance">
                  {project.name} {locale === "fr" ? "dans KV Portfolio" : "inside KV Portfolio"}
                </h2>
                <p className="mt-4 leading-7 text-white/68">{copy.ecosystemRole}</p>
                <p className="mt-5 border-l border-[#f0d7b1]/50 pl-3 text-sm font-semibold text-[#f0d7b1]">
                  {ecosystem.database}
                </p>
              </div>
              <div className="border border-white/10 bg-white/[0.06] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
                  {labels.connected}
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {connectedProjects.map((linkedProject) => {
                    const linkedCopy = getProjectCopy(linkedProject, locale);
                    return (
                      <Link
                        key={linkedProject.slug}
                        href={`/projects/${linkedProject.slug}`}
                        className="group border border-white/10 bg-[#18241f] p-4 transition hover:border-[#f0d7b1]/60"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#f0d7b1]">
                          {linkedCopy.category}
                        </p>
                        <p className="mt-2 font-semibold">{linkedProject.name}</p>
                        <p className="mt-2 text-xs leading-5 text-white/58">{linkedCopy.summary}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">{labels.recruiter}</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              {copy.recruiterValue}
            </p>
          </div>
          <div className="grid gap-4">
            <article className="border border-border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold">{labels.notes}</h2>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted-foreground">
                {copy.buildNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </article>
            <article className="border border-border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold">{labels.stack}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="bg-secondary px-2.5 py-1 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
