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
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
