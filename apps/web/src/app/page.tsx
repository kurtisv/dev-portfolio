import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, GitBranch, Layers3, MousePointer2 } from "lucide-react";

import { MarketingPageShell } from "@/components/marketing/page-shell";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ProofStrip } from "@/components/portfolio/proof-strip";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Button } from "@/components/ui/button";
import {
  getProjectsInEcosystemOrder,
  pageCopy,
  publicPortfolioProjects,
  profile,
  stackGroups,
  stackGroupsFr,
  testimonial,
} from "@/data/portfolio";
import { getCurrentLocale } from "@/lib/locale";

export default async function Home() {
  const locale = await getCurrentLocale();
  const t = pageCopy[locale].home;
  const ecosystemProjects = getProjectsInEcosystemOrder();
  const visibleProjects = ecosystemProjects.slice(0, 5);
  const projectRail = [...ecosystemProjects, ...ecosystemProjects];
  const principles = locale === "fr" ? profile.principlesFr : profile.principles;
  const stack = locale === "fr" ? stackGroupsFr : stackGroups;
  const t_testimonial = testimonial[locale];
  const signature = {
    en: {
      availability: "Open for focused product work",
      cockpit: "Recruiter cockpit",
      branch: "Staged branches",
      shipped: "Live builds",
      proof: "Review path",
      motion: "Subtle motion, readable proof, accessible structure.",
      route: "Inspect work",
      quality: ["Typed content", "Production deploys", "FR/EN review"],
      rail: "Portfolio surface",
      railLive: "Live",
      railDetails: "Details",
      testSystem: "Test the system",
      testEyebrow: "Recruiter test path",
      testTitle: "Open Luma Studio and see how the public marketing entry point is built.",
      testText:
        "The portfolio highlights Luma Studio as the flagship marketing demo, alongside real launched client sites.",
      testLive: "Open live",
      testDetails: "Case note",
      testSignal: "What to verify",
      reset: "Reset demo scenario",
      scenario: "Interactive demo",
      scenarioName: "KV Portfolio Demo Flow",
      scenarioClient: "Use your own test client",
      scenarioEmail: "Use your own test email",
      scenarioProject: "Use your own project request",
      scenarioBudget: "Use your own budget range",
      testSteps: [
        "Open Luma Studio, inspect the bilingual marketing structure, the validated contact form, and the deployed build.",
      ],
      boilerplateEyebrow: "Built from my boilerplate",
      boilerplateTitle: "These portfolio sites start from the same reusable foundation.",
      boilerplateText:
        "Luma Studio and this portfolio are built from my own Next.js boilerplate. Recruiters can inspect the base repo and compare how the same foundation becomes different products.",
      boilerplateCta: "View boilerplate repo",
      boilerplateSecondary: "See build process",
    },
    fr: {
      availability: "Disponible pour projets produit cibles",
      cockpit: "Cockpit recruteur",
      branch: "Branches par etape",
      shipped: "Builds live",
      proof: "Chemin de revue",
      motion: "Motion sobre, preuves lisibles, structure accessible.",
      route: "Inspecter le travail",
      quality: ["Contenu type", "Deploys production", "Revue FR/EN"],
      rail: "Surface portfolio",
      railLive: "Live",
      railDetails: "Details",
      testSystem: "Tester le systeme",
      testEyebrow: "Plan de test recruteur",
      testTitle: "Ouvrir Luma Studio et voir comment le point d'entree marketing public est construit.",
      testText:
        "Le portfolio met en avant Luma Studio comme demo marketing principale, aux cotes des vrais sites clients lances.",
      testLive: "Ouvrir live",
      testDetails: "Fiche projet",
      testSignal: "A verifier",
      reset: "Reset demo scenario",
      scenario: "Demo interactive",
      scenarioName: "KV Portfolio Demo Flow",
      scenarioClient: "Utilise ton propre client test",
      scenarioEmail: "Utilise ton propre courriel test",
      scenarioProject: "Utilise ta propre demande de projet",
      scenarioBudget: "Utilise ta propre plage budgetaire",
      testSteps: [
        "Ouvrir Luma Studio, inspecter la structure marketing bilingue, le formulaire contact valide et le build deploye.",
      ],
      boilerplateEyebrow: "Cree depuis mon boilerplate",
      boilerplateTitle: "Ces sites portfolio partent de la meme fondation reutilisable.",
      boilerplateText:
        "Luma Studio et ce portfolio sont construits a partir de mon propre boilerplate Next.js. Un recruteur peut inspecter le repo de base et voir comment la meme fondation devient differents produits.",
      boilerplateCta: "Voir le repo boilerplate",
      boilerplateSecondary: "Voir le processus",
    },
  }[locale];
  return (
    <MarketingPageShell>
      <main>
        <section className="signature-hero border-b border-border">
          <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-primary/20 bg-card/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
                <span className="size-2 bg-accent" />
                {signature.availability}
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {t.eyebrow}
              </p>
              <h1 className="hero-wordmark mt-5 max-w-4xl text-5xl font-semibold tracking-normal text-balance sm:text-7xl">
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
                  <Link href="https://github.com/kurtisv" target="_blank">
                    {t.github} <Code2 className="size-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
                {signature.quality.map((item) => (
                  <div key={item} className="flex items-center gap-2 border border-border/80 bg-card/70 px-3 py-2 text-sm font-medium shadow-sm">
                    <CheckCircle2 className="size-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="float-soft">
              <div className="motion-card border border-foreground/15 bg-[#111a17] p-3 text-white shadow-[18px_18px_0_rgba(184,91,62,0.18),0_30px_80px_rgba(14,23,21,0.28)]">
                <div className="flex items-center justify-between border-b border-white/10 px-2 pb-3">
                  <div className="flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-[#e97452]" />
                    <span className="size-2.5 rounded-full bg-[#d6a64e]" />
                    <span className="size-2.5 rounded-full bg-[#62b889]" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.28em] text-white/50">
                    {signature.cockpit}
                  </p>
                </div>
                <div className="grid gap-4 p-4">
                  <div className="grid gap-3 sm:grid-cols-[0.85fr_1.15fr]">
                    <div className="border border-white/10 bg-white/[0.06] p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-emerald-200">
                        {signature.shipped}
                      </p>
                      <p className="mt-3 text-5xl font-semibold">{publicPortfolioProjects.length}</p>
                      <p className="mt-2 text-sm leading-6 text-white/60">{signature.motion}</p>
                    </div>
                    <div className="border border-white/10 bg-[#18241f] p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold">{signature.branch}</p>
                        <GitBranch className="size-4 text-[#f0d7b1]" />
                      </div>
                      <div className="mt-5 grid gap-3">
                        {["01", "02", "03"].map((step, index) => (
                          <div key={step} className="grid grid-cols-[2.5rem_1fr] items-center gap-3">
                            <span className="font-mono text-xs text-white/50">{step}</span>
                            <span
                              className="timeline-pulse h-2 origin-left bg-gradient-to-r from-[#62b889] via-[#f0d7b1] to-[#e97452]"
                              style={{ animationDelay: `${index * 180}ms` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-3 border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                          {signature.proof}
                        </p>
                        <p className="mt-1 font-medium">{profile.name}</p>
                      </div>
                      <div className="flex size-11 items-center justify-center bg-[#f0d7b1] text-[#111a17]">
                        <Layers3 className="size-5" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      {principles.map((principle) => (
                        <p key={principle} className="border-l border-[#f0d7b1]/35 pl-3 text-sm leading-6 text-white/70">
                          {principle}
                        </p>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/projects"
                    className="group inline-flex items-center justify-between bg-[#f0d7b1] px-4 py-3 text-sm font-semibold text-[#111a17]"
                  >
                    {signature.route}
                    <MousePointer2 className="size-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-b border-border bg-[#111a17] py-4 text-white">
          <div className="marquee-track gap-3">
            {projectRail.map((project, index) => (
              <Link
                key={`${project.slug}-${index}`}
                href={project.liveUrl ?? `/projects/${project.slug}`}
                className="group flex min-w-[286px] items-center justify-between border border-white/10 bg-white/[0.06] px-4 py-3 transition hover:border-[#f0d7b1]/60 hover:bg-white/[0.1]"
                target={project.liveUrl ? "_blank" : undefined}
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#f0d7b1]">
                    {signature.rail}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{project.name}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/55 transition group-hover:text-[#f0d7b1]">
                  {project.liveUrl ? signature.railLive : signature.railDetails}
                  <ArrowRight className="size-3" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <ProofStrip locale={locale} />

        <section className="border-b border-border bg-card/80">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {signature.boilerplateEyebrow}
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-normal text-balance sm:text-4xl">
                {signature.boilerplateTitle}
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
                {signature.boilerplateText}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Link
                href="https://github.com/kurtisv/kv-web-starter"
                className="group flex items-center justify-between border border-primary/20 bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-[#111a17]"
                target="_blank"
              >
                {signature.boilerplateCta}
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects/kv-web-starter"
                className="group flex items-center justify-between border border-border bg-background px-5 py-4 text-sm font-semibold text-foreground transition hover:border-primary/40"
              >
                {signature.boilerplateSecondary}
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/process"
                className="group flex items-center justify-between border border-border bg-background px-5 py-4 text-sm font-semibold text-foreground transition hover:border-primary/40"
              >
                {locale === "fr" ? "Voir le processus" : "See build process"}
                <GitBranch className="size-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

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

        <section className="border-y border-border bg-white/72">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow={t.stackEyebrow}
              title={t.stackTitle}
              description={t.stackDescription}
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {stack.map((group) => (
                <article key={group.title} className="border border-border bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
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

        <section className="border-y border-border bg-card/60">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {locale === "fr" ? "Temoignage client" : "Client testimonial"}
            </p>
            <blockquote className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-center">
              <p className="text-2xl font-medium leading-9 tracking-tight text-balance sm:text-3xl">
                &ldquo;{t_testimonial.quote}&rdquo;
              </p>
              <div className="border border-border bg-background p-5 shadow-sm">
                <p className="font-semibold">{t_testimonial.author}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t_testimonial.role}</p>
                <a
                  href={t_testimonial.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  {t_testimonial.site}
                  <ArrowRight className="size-3" />
                </a>
              </div>
            </blockquote>
          </div>
        </section>

        <section className="bg-[#111a17] text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f0d7b1]">
                {t.noteEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-normal text-balance sm:text-4xl">
                {t.noteTitle}
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/65">{t.noteText}</p>
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
