import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#122019] text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 text-sm sm:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div>
          <p className="font-semibold text-white">Kurtis V.</p>
          <p className="mt-3 max-w-md leading-6 text-slate-400">
            Full-stack developer building practical web products, client sites,
            SaaS portals, and mobile-adjacent applications.
          </p>
        </div>
        <div className="grid gap-2 text-slate-400">
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/stack">Stack</Link>
          <Link href="/process">Process</Link>
        </div>
        <div className="grid gap-2 text-slate-400">
          <Link href="https://github.com/kurtisv">GitHub</Link>
          <Link href="/projects/api-meter">API Meter</Link>
          <Link href="/projects/luma-studio">Luma Studio</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
