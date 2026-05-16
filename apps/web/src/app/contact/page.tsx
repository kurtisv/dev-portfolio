import type { Metadata } from "next";

import { sendContactMessage } from "@/app/actions/contact";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kurtis V. about web products, portfolio work, or client projects.",
};

export default function ContactPage() {
  return (
    <MarketingPageShell>
      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Tell me what needs to be built, improved, or shipped."
              description="The best projects have a clear user problem, a practical scope, and enough quality bar to make the code worth reviewing."
            />
            <div className="mt-8 grid gap-4 text-sm text-muted-foreground">
              <p className="border-l border-border pl-4">
                Useful context: product goal, timeline, current stack, and what
                already exists.
              </p>
              <p className="border-l border-border pl-4">
                Best fit: Next.js websites, SaaS dashboards, API portals,
                product cleanup, and deployment-ready portfolio work.
              </p>
            </div>
          </div>
          <div className="border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Project message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Short and specific is enough. The form is wired through the
              starter contact action and can be connected to Resend.
            </p>
            <Form action={sendContactMessage} className="mt-6">
              <FormField>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required />
              </FormField>
              <FormField>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" required type="email" />
              </FormField>
              <FormField>
                <Label htmlFor="projectType">Project type</Label>
                <Input id="projectType" name="projectType" placeholder="Website, dashboard, API, mobile app" />
              </FormField>
              <FormField>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" required />
              </FormField>
              <Button type="submit">Send message</Button>
            </Form>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
