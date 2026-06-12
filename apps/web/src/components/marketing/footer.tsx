import Link from "next/link";

import { aboutProfile, pageCopy, profile } from "@/data/portfolio";
import { getCurrentLocale } from "@/lib/locale";

export async function Footer() {
  const locale = await getCurrentLocale();
  const t = pageCopy[locale].nav;

  return (
    <footer className="border-t border-border bg-[#122019] text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 text-sm sm:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div>
          <p className="font-semibold text-white">{aboutProfile.fullName}</p>
          <p className="mt-3 max-w-md leading-6 text-slate-400">
            {locale === "fr" ? profile.introFr : profile.intro}
          </p>
          <a
            href={`mailto:${aboutProfile.email}`}
            className="mt-4 inline-block font-medium text-slate-200 hover:text-white"
          >
            {aboutProfile.email}
          </a>
        </div>
        <div className="grid gap-2 text-slate-400">
          <Link href="/projects">{t.projects}</Link>
          <Link href="/about">{t.about}</Link>
          <Link href="/cv">{t.cv}</Link>
          <Link href="/stack">{t.stack}</Link>
          <Link href="/process">{t.process}</Link>
        </div>
        <div className="grid gap-2 text-slate-400">
          <Link href="https://github.com/kurtisv">GitHub</Link>
          <Link href="/projects/speedzone">SpeedZone</Link>
          <Link href="/projects/kv-web-starter">KV Web Starter</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
