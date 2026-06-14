"use server";

import { z } from "zod";

import { ContactConfirmationEmail } from "@/emails/contact-confirmation";
import { ContactNotificationEmail } from "@/emails/contact-notification";
import { sendTransactionalEmail } from "@/lib/email/resend";
import { aboutProfile } from "@/data/portfolio";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  projectType: z.string().optional(),
  message: z.string().min(10),
});

export async function sendContactMessage(formData: FormData) {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    projectType: formData.get("projectType") || undefined,
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return;
  }

  const { name, email, projectType, message } = parsed.data;

  await Promise.all([
    sendTransactionalEmail({
      to: aboutProfile.email,
      subject: `Portfolio contact from ${name}`,
      react: (
        <ContactNotificationEmail
          name={name}
          email={email}
          projectType={projectType}
          message={message}
        />
      ),
    }),
    sendTransactionalEmail({
      to: email,
      subject: "Portfolio message received",
      react: <ContactConfirmationEmail name={name} />,
    }),
  ]);
}
