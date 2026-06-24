import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { Button } from "@/components/ui/button";
import { serviceAreas, serviceAreasFr } from "@/data/portfolio";
import { getCurrentLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Services",
  description: "Development services and project types represented in the portfolio.",
};

const copy = {
  en: {
    eyebrow: "Services",
    title: "The work is centered on practical product development.",
    description:
      "This page frames the portfolio from a client or recruiter perspective: what kind of problems the work is meant to solve.",
    ctaEyebrow: "Ready to start?",
    ctaTitle: "Describe your project and I'll tell you if it's a good fit.",
    cta: "Contact",
  },
  fr: {
    eyebrow: "Services",
    title: "Le travail est centré sur du développement produit concret.",
    description:
      "Cette page présente le portfolio du point de vue client ou recruteur : quels problèmes le travail cherche à résoudre.",
    ctaEyebrow: "Prêt à démarrer ?",
    ctaTitle: "Décris ton projet et je te dis si c'est un bon fit.",
    cta: "Prendre contact",
  },
} as const;

export default async function ServicesPage() {
  const locale = await getCurrentLocale();
  const t = copy[locale];
  const areas = locale === "fr" ? serviceAreasFr : serviceAreas;

  return (
    <MarketingPageShell>
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {areas.map((area) => (
            <article key={area.title} className="border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold">{area.title}</h2>
              <p className="mt-4 leading-7 text-muted-foreground">{area.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 border border-primary/20 bg-card p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {t.ctaEyebrow}
          </p>
          <p className="mt-3 text-2xl font-semibold">{t.ctaTitle}</p>
          <div className="mt-6">
            <Button asChild size="lg">
              <Link href="/contact">
                {t.cta} <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </MarketingPageShell>
  );
}
