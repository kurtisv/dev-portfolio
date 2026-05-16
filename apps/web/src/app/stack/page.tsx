import type { Metadata } from "next";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { stackGroups } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Stack",
  description: "Technologies and engineering practices used across the portfolio.",
};

export default function StackPage() {
  return (
    <MarketingPageShell>
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Stack"
          title="Modern TypeScript product development with practical deployment habits."
          description="The stack is intentionally focused on tools that help ship real products quickly while keeping the codebase reviewable."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {stackGroups.map((group) => (
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
