import type { Metadata } from "next";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { stackGroups, stackGroupsFr } from "@/data/portfolio";
import { getCurrentLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Stack",
  description: "Technologies and engineering practices used across the portfolio.",
};

const copy = {
  en: {
    eyebrow: "Stack",
    title: "Modern TypeScript product development with practical deployment habits.",
    description:
      "The stack is intentionally focused on tools that help ship real products quickly while keeping the codebase reviewable.",
  },
  fr: {
    eyebrow: "Stack",
    title: "Developpement produit TypeScript moderne avec de bonnes habitudes de deploiement.",
    description:
      "La stack reste concentree sur les outils qui aident a livrer vite tout en gardant un code revisable.",
  },
} as const;

export default async function StackPage() {
  const locale = await getCurrentLocale();
  const t = copy[locale];
  const groups = locale === "fr" ? stackGroupsFr : stackGroups;

  return (
    <MarketingPageShell>
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {groups.map((group) => (
            <article key={group.title} className="border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold">{group.title}</h2>
              <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>
    </MarketingPageShell>
  );
}
