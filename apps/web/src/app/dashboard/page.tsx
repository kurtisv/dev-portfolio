import { getCurrentLocale } from "@/lib/locale";

const copy = {
  fr: {
    label: "Tableau de bord",
    title: "Centre de controle",
    stats: [
      ["Modules live", "9"],
      ["Etapes du parcours", "8"],
      ["Langues supportees", "FR / EN"],
      ["Scenario demo", "Actif"],
    ],
  },
  en: {
    label: "Dashboard",
    title: "Control center",
    stats: [
      ["Live modules", "9"],
      ["Journey steps", "8"],
      ["Supported languages", "FR / EN"],
      ["Demo scenario", "Active"],
    ],
  },
} as const;

export default async function DashboardPage() {
  const locale = await getCurrentLocale();
  const t = copy[locale];

  return (
    <main className="px-6 py-10 text-foreground">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {t.label}
          </p>
          <h1 className="mt-3 text-3xl font-semibold">{t.title}</h1>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.stats.map(([label, value]) => (
            <section key={label} className="border bg-card p-5">
              <p className="text-sm text-muted-foreground">{label}</p>
              <p className="mt-3 text-2xl font-semibold">{value}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
