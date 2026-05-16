import { MarketingPageShell } from "@/components/marketing/page-shell";
import { Section } from "@/components/marketing/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  ["Quels types de projets sont presentes?", "Des sites, interfaces metier et API qui montrent le passage de l'idee au deploiement."],
  ["Pourquoi garder des routes techniques?", "Elles rendent visible la capacite a structurer un vrai produit au-dela d'une page vitrine."],
  ["Le portfolio est-il bilingue?", "Oui. Le contenu principal est disponible en francais et en anglais pour les recruteurs."],
];

export default function FaqPage() {
  return (
    <MarketingPageShell>
      <Section>
        <h1 className="text-4xl font-semibold">FAQ</h1>
        <Accordion className="mt-8">
          {faqs.map(([question, answer]) => (
            <AccordionItem key={question}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </MarketingPageShell>
  );
}
