import type { Metadata } from "next";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: "About Kurtis V. and the development work behind the portfolio.",
};

export default function AboutPage() {
  return (
    <MarketingPageShell>
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="About"
          title="A developer profile built around shipped work and clear execution."
          description={profile.intro}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {profile.principles.map((principle) => (
            <article key={principle} className="border border-border bg-card p-6 shadow-sm">
              <p className="text-lg font-medium leading-7">{principle}</p>
            </article>
          ))}
        </div>
      </main>
    </MarketingPageShell>
  );
}
