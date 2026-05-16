import { MarketingPageShell } from "@/components/marketing/page-shell";
import { Section } from "@/components/marketing/section";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  "Des interfaces qui restent claires meme quand le produit devient plus complet.",
  "Une structure de code lisible, facile a verifier et a faire evoluer.",
  "Des projets live qui montrent le parcours complet: idee, build, repo et deploiement.",
];

export default function TestimonialsPage() {
  return (
    <MarketingPageShell>
      <Section>
        <h1 className="text-4xl font-semibold">Temoignages</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial}>
              <CardContent className="pt-6 text-sm text-muted-foreground">{testimonial}</CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </MarketingPageShell>
  );
}
