import type { Metadata } from "next";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";

export const metadata: Metadata = {
  title: "Process",
  description: "Development process and Git workflow used for the portfolio.",
};

const steps = [
  "Create a branch for each meaningful step.",
  "Implement one coherent slice of the product.",
  "Run lint, typecheck, tests, and build where practical.",
  "Commit and push the working step.",
  "Merge back into main before starting the next branch.",
];

export default function ProcessPage() {
  return (
    <MarketingPageShell>
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Process"
          title="The repository is intentionally built to show progression."
          description="This site is not a one-shot dump. The build is staged so a reviewer can see how features were planned, implemented, verified, and merged."
        />
        <div className="mt-10 grid gap-4">
          {steps.map((step, index) => (
            <article key={step} className="grid gap-3 border border-border bg-card p-5 md:grid-cols-[120px_1fr]">
              <p className="font-mono text-sm text-emerald-700">0{index + 1}</p>
              <p className="font-medium">{step}</p>
            </article>
          ))}
        </div>
      </main>
    </MarketingPageShell>
  );
}
