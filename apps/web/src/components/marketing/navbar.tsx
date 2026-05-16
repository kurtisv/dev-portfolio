import Link from "next/link";

import { LanguageSwitcher } from "@/components/portfolio/language-switcher";
import { Button } from "@/components/ui/button";
import { pageCopy } from "@/data/portfolio";
import { getCurrentLocale } from "@/lib/locale";

export async function Navbar() {
  const locale = await getCurrentLocale();
  const t = pageCopy[locale].nav;
  const navItems = [
    { href: "/projects", label: t.projects },
    { href: "/about", label: t.about },
    { href: "/services", label: t.services },
    { href: "/stack", label: t.stack },
    { href: "/process", label: t.process },
    { href: "/contact", label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 shadow-[0_12px_30px_rgba(14,23,21,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 text-base font-semibold">
          <span className="flex size-9 items-center justify-center bg-primary text-sm text-primary-foreground shadow-[4px_4px_0_#b85b3e]">
            KV
          </span>
          <span>
            Kurtis V.
            <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Portfolio
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-border/80 bg-card/70 p-1 shadow-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher current={locale} />
          <Button asChild size="sm">
            <Link href="/contact">{t.cta}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
