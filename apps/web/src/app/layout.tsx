import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { getCurrentLocale } from "@/lib/locale";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: {
    default: "Kurtis Verres — Full-stack developer portfolio",
    template: "%s | Kurtis Verres",
  },
  description:
    "Portfolio de Kurtis Verres — developpeur full-stack base a Laval, QC. Sites clients livres, apps mobiles React Native, SaaS Next.js et boilerplate open-source.",
  openGraph: {
    title: "Kurtis Verres — Developer Portfolio",
    description:
      "Live client sites, React Native mobile apps, and shipped SaaS products built with Next.js, TypeScript, and Tailwind. Based in Laval, QC.",
    type: "website",
    locale: "fr_CA",
    alternateLocale: "en_US",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCurrentLocale();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
