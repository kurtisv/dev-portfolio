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
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-base font-semibold">
          <span className="flex size-8 items-center justify-center bg-primary text-sm text-primary-foreground">
            KV
          </span>
          Kurtis V.
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
