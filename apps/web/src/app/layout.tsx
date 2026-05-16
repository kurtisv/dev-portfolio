import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
