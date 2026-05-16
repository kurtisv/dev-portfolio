import type { Metadata } from "next";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { processSteps, processStepsFr } from "@/data/portfolio";
import { getCurrentLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Process",
  description: "Development process and Git workflow used for the portfolio.",
};

const copy = {
  en: {
    eyebrow: "Process",
    title: "The repository is intentionally built to show progression.",
    description:
      "This site is not a one-shot dump. The build is staged so a reviewer can see how features were planned, implemented, verified, and merged.",
  },
  fr: {
    eyebrow: "Processus",
    title: "Le repo est volontairement construit pour montrer la progression.",
    description:
      "Ce site n'est pas un seul gros commit final. Le build est decoupe pour qu'un reviewer voie comment les features sont planifiees, implementees, verifiees et mergees.",
  },
} as const;

export default async function ProcessPage() {
  const locale = await getCurrentLocale();
  const t = copy[locale];
  const steps = locale === "fr" ? processStepsFr : processSteps;

  return (
    <MarketingPageShell>
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />
        <div className="mt-10 grid gap-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="grid gap-3 border border-border bg-card p-5 md:grid-cols-[120px_1fr]"
            >
              <p className="font-mono text-sm text-emerald-700">
                0{index + 1}
              </p>
              <div>
                <h2 className="font-semibold">{step.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </MarketingPageShell>
  );
}
