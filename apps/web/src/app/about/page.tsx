import type { Metadata } from "next";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { profile } from "@/data/portfolio";
import { getCurrentLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "About",
  description: "About Kurtis V. and the development work behind the portfolio.",
};

const copy = {
  en: {
    eyebrow: "About",
    title: "A developer profile built around shipped work and clear execution.",
  },
  fr: {
    eyebrow: "Profil",
    title: "Un profil developpeur construit autour de projets livres et d'une execution claire.",
  },
} as const;

export default async function AboutPage() {
  const locale = await getCurrentLocale();
  const t = copy[locale];
  const principles = locale === "fr" ? profile.principlesFr : profile.principles;

  return (
    <MarketingPageShell>
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={locale === "fr" ? profile.introFr : profile.intro}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {principles.map((principle) => (
            <article key={principle} className="border border-border bg-card p-6 shadow-sm">
              <p className="text-lg font-medium leading-7">{principle}</p>
            </article>
          ))}
        </div>
      </main>
    </MarketingPageShell>
  );
}
