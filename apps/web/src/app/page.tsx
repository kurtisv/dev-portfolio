import Link from "next/link";
import { ArrowRight, Code2, Layers3 } from "lucide-react";

import { ProjectCard } from "@/components/portfolio/project-card";
import { ProofStrip } from "@/components/portfolio/proof-strip";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { Button } from "@/components/ui/button";
import {
  featuredProjects,
  pageCopy,
  profile,
  stackGroups,
  stackGroupsFr,
  upcomingProjects,
  upcomingProjectsFr,
} from "@/data/portfolio";
import { getCurrentLocale } from "@/lib/locale";

export default async function Home() {
  const locale = await getCurrentLocale();
  const t = pageCopy[locale].home;
  const visibleProjects = featuredProjects.slice(0, 4);
  const principles = locale === "fr" ? profile.principlesFr : profile.principles;
  const stack = locale === "fr" ? stackGroupsFr : stackGroups;
  const nextItems = locale === "fr" ? upcomingProjectsFr : upcomingProjects;

  return (
    <MarketingPageShell>
      <main>
        <section className="border-b border-border bg-[linear-gradient(135deg,#f7f6f1_0%,#efe7d5_48%,#dce9df_100%)]">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                {t.eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-normal text-balance sm:text-7xl">
                {t.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                {locale === "fr" ? profile.introFr : profile.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/projects">
                    {t.projects} <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="https://github.com/kurtisv">
                    {t.github} <Code2 className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="border border-border bg-card/90 p-6 shadow-xl">
              <div className="flex items-center gap-3 border-b border-border pb-5">
                <div className="flex size-11 items-center justify-center bg-primary text-primary-foreground">
                  <Layers3 className="size-5" />
                </div>
                <div>
                  <p className="font-semibold">{profile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {locale === "fr" ? profile.roleFr : profile.role}
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-4">
                {principles.map((principle) => (
                  <p key={principle} className="border-l border-border pl-4 text-sm leading-6">
                    {principle}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProofStrip locale={locale} />

        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow={t.selectedEyebrow}
            title={t.selectedTitle}
            description={t.selectedDescription}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} locale={locale} />
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow={t.stackEyebrow}
              title={t.stackTitle}
              description={t.stackDescription}
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {stack.map((group) => (
                <article key={group.title} className="border border-border bg-background p-5">
                  <h3 className="font-semibold">{group.title}</h3>
                  <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow={t.nextEyebrow}
            title={t.nextTitle}
          />
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {nextItems.map((item) => (
              <div key={item} className="border border-border bg-card p-5 text-sm text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#122019] text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                {t.noteEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-normal text-balance sm:text-4xl">
                {t.noteTitle}
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                {t.noteText}
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href="/process">{t.noteCta}</Link>
            </Button>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
