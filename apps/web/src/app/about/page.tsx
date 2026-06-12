import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, FileText, Globe2, Mail, MapPin } from "lucide-react";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { Button } from "@/components/ui/button";
import { aboutProfile, profile } from "@/data/portfolio";
import { getCurrentLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "About",
  description: "About Kurtis Verres: telecom technician with a hybrid IT and web development profile.",
};

const copy = {
  en: {
    eyebrow: "About",
    experienceEyebrow: "Experience",
    skillsEyebrow: "Key skills",
    skillsTitle: "Field reliability on one side, shipped web products on the other.",
    languagesTitle: "Languages",
    principlesEyebrow: "How I work",
    principlesTitle: "The same discipline in the field and in the code.",
    cvCta: "View resume",
    contactCta: "Contact",
  },
  fr: {
    eyebrow: "Profil",
    experienceEyebrow: "Experience",
    skillsEyebrow: "Competences cles",
    skillsTitle: "La fiabilite terrain d'un cote, des produits web livres de l'autre.",
    languagesTitle: "Langues",
    principlesEyebrow: "Ma facon de travailler",
    principlesTitle: "La meme discipline sur le terrain et dans le code.",
    cvCta: "Voir le CV",
    contactCta: "Contact",
  },
} as const;

export default async function AboutPage() {
  const locale = await getCurrentLocale();
  const t = copy[locale];
  const p = aboutProfile[locale];
  const principles = locale === "fr" ? profile.principlesFr : profile.principles;

  return (
    <MarketingPageShell>
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{t.eyebrow}</p>
            <h1 className="font-display mt-4 text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
              {aboutProfile.fullName}
            </h1>
            <p className="mt-3 text-lg font-medium text-primary">{p.role}</p>
            <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">{p.intro}</p>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{p.objective}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/cv">
                  {t.cvCta} <FileText className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contact">
                  {t.contactCta} <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="grid gap-3 border border-border bg-card p-6 shadow-sm">
            <p className="flex items-center gap-3 text-sm font-medium">
              <MapPin className="size-4 text-primary" /> {aboutProfile.location}
            </p>
            <a
              href={`mailto:${aboutProfile.email}`}
              className="flex items-center gap-3 text-sm font-medium text-primary hover:underline"
            >
              <Mail className="size-4" /> {aboutProfile.email}
            </a>
            <p className="flex items-center gap-3 text-sm font-medium">
              <Briefcase className="size-4 text-primary" /> {p.experience.company}
            </p>
            <div className="mt-2 border-t border-border pt-4">
              <p className="flex items-center gap-3 text-sm font-semibold">
                <Globe2 className="size-4 text-primary" /> {t.languagesTitle}
              </p>
              <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                {p.languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <section className="mt-16">
          <SectionHeading eyebrow={t.experienceEyebrow} title={p.experience.title} description={`${p.experience.company} | ${p.experience.period}`} />
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {p.experience.bullets.map((bullet) => (
              <li key={bullet} className="border border-border bg-card p-4 text-sm leading-6 text-muted-foreground shadow-sm">
                {bullet}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <SectionHeading eyebrow={t.skillsEyebrow} title={t.skillsTitle} />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {p.skillGroups.map((group) => (
              <article key={group.title} className="border border-border bg-card p-5 shadow-sm">
                <h2 className="font-semibold">{group.title}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading eyebrow={t.principlesEyebrow} title={t.principlesTitle} />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {principles.map((principle) => (
              <article key={principle} className="border border-border bg-card p-6 shadow-sm">
                <p className="text-lg font-medium leading-7">{principle}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
