import type { Metadata } from "next";
import { getCurrentLocale } from "@/lib/locale";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kurtis V. - Full-stack developer portfolio",
    template: "%s | Kurtis V.",
  },
  description:
    "Full-stack developer portfolio showing practical web apps, SaaS portals, client sites, and product-focused development work.",
  openGraph: {
    title: "Kurtis V. - Developer Portfolio",
    description:
      "A portfolio of shipped Next.js, TypeScript, SaaS, dashboard, marketing, and mobile product work.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCurrentLocale();

  return (
    <html lang={locale} className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
