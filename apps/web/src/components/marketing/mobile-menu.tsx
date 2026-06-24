"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavItem = { href: string; label: string };

export function MobileMenu({ items, cta }: { items: NavItem[]; cta: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex size-9 items-center justify-center text-foreground transition hover:bg-secondary/60 md:hidden"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 top-16 z-30 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <nav
            className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background/95 shadow-lg backdrop-blur-xl md:hidden"
            aria-label="Navigation mobile"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-foreground transition hover:bg-secondary/60"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 border-t border-border pt-3">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block bg-primary px-3 py-3 text-center text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  {cta}
                </Link>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
