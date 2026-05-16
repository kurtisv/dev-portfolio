import type { Metadata } from "next";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { serviceAreas } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Services",
  description: "Development services and project types represented in the portfolio.",
};

export default function ServicesPage() {
  return (
    <MarketingPageShell>
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Services"
          title="The work is centered on practical product development."
          description="This page frames the portfolio from a client or recruiter perspective: what kind of problems the work is meant to solve."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {serviceAreas.map((area) => (
            <article key={area.title} className="border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold">{area.title}</h2>
              <p className="mt-4 leading-7 text-muted-foreground">{area.description}</p>
            </article>
          ))}
        </div>
      </main>
    </MarketingPageShell>
  );
}
