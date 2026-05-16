import Link from "next/link";
import { CheckCircle2, ExternalLink, GitBranch, ShieldCheck } from "lucide-react";

import { MarketingPageShell } from "@/components/marketing/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrentLocale } from "@/lib/locale";

const copy = {
  en: {
    badge: "Repository notes",
    title: "How this portfolio is built and reviewed.",
    intro:
      "This page gives recruiters a quick technical reading path: what changed, how the project is structured, and which checks were run before deployment.",
    primary: "View projects",
    secondary: "GitHub repository",
    sections: [
      {
        title: "Branch history",
        items: [
          "Each feature was built on a separate branch and merged into main after verification.",
          "The build log records the foundation, content structure, project showcase, design polish, deployment, and bilingual polish steps.",
          "Commits are scoped so a reviewer can follow the work without reading unrelated churn.",
        ],
      },
      {
        title: "Quality checks",
        items: [
          "Lint, TypeScript, unit tests, and production build are kept green before deployment.",
          "Public portfolio routes stay crawlable while admin and API utility routes stay out of search focus.",
          "Project cards include live links and repository links where public code is available.",
        ],
      },
      {
        title: "Code shape",
        items: [
          "Portfolio content lives in typed data structures so pages can stay small and consistent.",
          "FR/EN text is centralized around shared copy objects and a cookie-backed language switcher.",
          "Design tokens are held in CSS variables for a calm, coherent theme.",
        ],
      },
    ],
  },
  fr: {
    badge: "Notes du repo",
    title: "Comment ce portfolio est construit et verifie.",
    intro:
      "Cette page donne au recruteur un chemin de lecture technique: ce qui a change, comment le projet est structure, et quels controles ont ete lances avant le deploiement.",
    primary: "Voir les projets",
    secondary: "Repo GitHub",
    sections: [
      {
        title: "Historique de branches",
        items: [
          "Chaque fonctionnalite a ete construite sur une branche separee puis fusionnee dans main apres verification.",
          "Le journal de build documente les etapes: fondation, contenu, projets, design, deploiement et bilingue.",
          "Les commits restent limites afin qu'un reviewer puisse suivre le travail sans bruit inutile.",
        ],
      },
      {
        title: "Controles qualite",
        items: [
          "Lint, TypeScript, tests unitaires et build production restent verts avant deploiement.",
          "Les routes publiques du portfolio restent indexables, tandis que les routes admin et utilitaires sont exclues du crawl.",
          "Les cartes de projets affichent les liens live et les repos publics disponibles.",
        ],
      },
      {
        title: "Structure du code",
        items: [
          "Le contenu portfolio vit dans des structures typees pour garder les pages petites et coherentes.",
          "Les textes FR/EN sont centralises avec un switcher de langue base sur cookie.",
          "Les tokens CSS gardent un theme calme, harmonieux et professionnel.",
        ],
      },
    ],
  },
} as const;

export default async function DocsPage() {
  const locale = await getCurrentLocale();
  const t = copy[locale];

  return (
    <MarketingPageShell>
      <main>
        <section className="border-b bg-secondary/30">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <Badge>{t.badge}</Badge>
              <h1 className="mt-5 text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
                {t.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{t.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/projects">
                    <ExternalLink className="size-4" />
                    {t.primary}
                  </Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="https://github.com/kurtisv/dev-portfolio" target="_blank">
                    <GitBranch className="size-4" />
                    {t.secondary}
                  </Link>
                </Button>
              </div>
            </div>
            <Card className="border-primary/20 bg-background/85 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-base">
                  <ShieldCheck className="size-4 text-primary" />
                  dev-portfolio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 text-sm text-muted-foreground">
                  <li>Next.js App Router</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Vercel deployment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-4 px-6 py-14 lg:grid-cols-3">
          {t.sections.map((section) => (
            <Card key={section.title} className="border-border/80 bg-card/90 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 text-sm leading-6 text-muted-foreground">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </MarketingPageShell>
  );
}
