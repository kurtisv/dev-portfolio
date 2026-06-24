import type { Metadata } from "next";

import { ContactForm } from "@/components/portfolio/contact-form";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { getCurrentLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kurtis Verres about web products, portfolio work, or client projects.",
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
    formText: "Short and specific is enough. I'll reply to your email directly.",
    name: "Name",
    projectType: "Project type",
    placeholder: "Website, dashboard, API, mobile app",
    message: "Message",
    submit: "Send message",
    success: "Message sent!",
    successDetail: "I'll get back to you within 48 hours.",
    errorValidation: "Please fill in all required fields correctly.",
    errorSend: "Something went wrong. Please try again or email me directly.",
  },
  fr: {
    eyebrow: "Contact",
    title: "Dis-moi ce qui doit être construit, amélioré ou livré.",
    description:
      "Les meilleurs projets ont un problème utilisateur clair, un scope pratique et un niveau de qualité qui rend le code révisable.",
    noteOne: "Contexte utile : objectif produit, délai, stack actuelle et ce qui existe déjà.",
    noteTwo:
      "Bon fit : sites Next.js, dashboards SaaS, portails API, nettoyage produit et portfolios prêts à déployer.",
    formTitle: "Message projet",
    formText: "Court et spécifique suffit. Je répondrai directement à ton email.",
    name: "Nom",
    projectType: "Type de projet",
    placeholder: "Site, dashboard, API, app mobile",
    message: "Message",
    submit: "Envoyer",
    success: "Message envoyé !",
    successDetail: "Je te réponds sous 48 heures.",
    errorValidation: "Merci de remplir tous les champs obligatoires correctement.",
    errorSend: "Une erreur s'est produite. Réessaie ou écris-moi directement par email.",
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
              <p className="border-l border-border pl-4">{t.noteOne}</p>
              <p className="border-l border-border pl-4">{t.noteTwo}</p>
            </div>
          </div>
          <ContactForm copy={t} />
        </section>
      </main>
    </MarketingPageShell>
  );
}
