"use client";

import { useActionState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

import { sendContactMessage, type ContactState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Copy = {
  formTitle: string;
  formText: string;
  name: string;
  projectType: string;
  placeholder: string;
  message: string;
  submit: string;
  success: string;
  successDetail: string;
  errorValidation: string;
  errorSend: string;
};

const initial: ContactState = { status: "idle" };

export function ContactForm({ copy }: { copy: Copy }) {
  const [state, action, pending] = useActionState(sendContactMessage, initial);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 border border-border bg-card p-10 text-center shadow-sm">
        <CheckCircle2 className="size-10 text-primary" />
        <div>
          <p className="text-xl font-semibold">{copy.success}</p>
          <p className="mt-2 text-sm text-muted-foreground">{copy.successDetail}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-border bg-card p-6 shadow-sm">
      <h2 className="text-xl font-semibold">{copy.formTitle}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{copy.formText}</p>

      {state.status === "error" && (
        <div className="mt-4 flex items-center gap-2 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="size-4 shrink-0" />
          {state.error === "validation" ? copy.errorValidation : copy.errorSend}
        </div>
      )}

      <Form action={action} className="mt-6">
        <FormField>
          <Label htmlFor="name">{copy.name}</Label>
          <Input id="name" name="name" required minLength={2} />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" required type="email" />
        </FormField>
        <FormField>
          <Label htmlFor="projectType">{copy.projectType}</Label>
          <Input id="projectType" name="projectType" placeholder={copy.placeholder} />
        </FormField>
        <FormField>
          <Label htmlFor="message">{copy.message}</Label>
          <Textarea id="message" name="message" required minLength={10} />
        </FormField>
        <Button type="submit" disabled={pending}>
          {pending ? "..." : copy.submit}
        </Button>
      </Form>
    </div>
  );
}
