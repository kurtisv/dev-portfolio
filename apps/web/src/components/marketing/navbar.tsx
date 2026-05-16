import Link from "next/link";

import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/stack", label: "Stack" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
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
        <Button asChild size="sm">
          <Link href="/contact">Work together</Link>
        </Button>
      </div>
    </header>
  );
}
