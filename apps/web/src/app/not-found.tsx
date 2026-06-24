import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MarketingPageShell } from "@/components/marketing/page-shell";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <MarketingPageShell>
      <main className="flex min-h-[calc(100svh-4rem)] items-center justify-center px-6">
        <div className="mx-auto max-w-lg text-center">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            404
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal sm:text-5xl">
            Page introuvable
          </h1>
          <p className="mt-4 leading-7 text-muted-foreground">
            Cette URL n&apos;existe pas dans le portfolio. Retourne à l&apos;accueil ou consulte les projets.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/">
                Accueil <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/projects">Projets</Link>
            </Button>
          </div>
        </div>
      </main>
    </MarketingPageShell>
  );
}
