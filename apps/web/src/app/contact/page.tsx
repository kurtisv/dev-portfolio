import type { Metadata } from "next";

import { sendContactMessage } from "@/app/actions/contact";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getCurrentLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kurtis V. about web products, portfolio work, or client projects.",
};

const copy = {
  en: {
    eyebrow: "Contact",
    title: "Tell me what needs to be built, improved, or shipped.",
    description:
      "The best projects have a clear user problem, a practical scope, and enough quality bar to make the code worth reviewing.",
    noteOne: "Useful context: product goal, timeline, current stack, and what already exists.",
    noteTwo:
      "Best fit: Next.js websites, SaaS dashboards, API portals, product cleanup, and deployment-ready portfolio work.",
    formTitle: "Project message",
    formText:
      "Short and specific is enough. The form is wired through the portfolio contact action and can be connected to Resend.",
    name: "Name",
    projectType: "Project type",
    placeholder: "Website, dashboard, API, mobile app",
    message: "Message",
    submit: "Send message",
  },
  fr: {
    eyebrow: "Contact",
    title: "Dis-moi ce qui doit etre construit, ameliore ou livre.",
    description:
      "Les meilleurs projets ont un probleme utilisateur clair, un scope pratique et un niveau de qualite qui rend le code revisable.",
    noteOne: "Contexte utile: objectif produit, delai, stack actuelle et ce qui existe deja.",
    noteTwo:
      "Bon fit: sites Next.js, dashboards SaaS, portails API, nettoyage produit et portfolios prets a deployer.",
    formTitle: "Message projet",
    formText:
      "Court et specifique suffit. Le formulaire utilise l'action contact du portfolio et peut etre connecte a Resend.",
    name: "Nom",
    projectType: "Type de projet",
    placeholder: "Site, dashboard, API, app mobile",
    message: "Message",
    submit: "Envoyer",
  },
} as const;

export default async function ContactPage() {
  const locale = await getCurrentLocale();
  const t = copy[locale];

  return (
    <MarketingPageShell>
      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow={t.eyebrow}
              title={t.title}
              description={t.description}
            />
            <div className="mt-8 grid gap-4 text-sm text-muted-foreground">
              <p className="border-l border-border pl-4">
                {t.noteOne}
              </p>
              <p className="border-l border-border pl-4">
                {t.noteTwo}
              </p>
            </div>
          </div>
          <div className="border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{t.formTitle}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.formText}
            </p>
            <Form action={sendContactMessage} className="mt-6">
              <FormField>
                <Label htmlFor="name">{t.name}</Label>
                <Input id="name" name="name" required />
              </FormField>
              <FormField>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" required type="email" />
              </FormField>
              <FormField>
                <Label htmlFor="projectType">{t.projectType}</Label>
                <Input id="projectType" name="projectType" placeholder={t.placeholder} />
              </FormField>
              <FormField>
                <Label htmlFor="message">{t.message}</Label>
                <Textarea id="message" name="message" required />
              </FormField>
              <Button type="submit">{t.submit}</Button>
            </Form>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
