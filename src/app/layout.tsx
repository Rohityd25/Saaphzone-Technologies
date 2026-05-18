import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";

export const metadata: Metadata = {
  title: {
    default: "Saaphzone Technologies — Clean Tech & Environmental Solutions",
    template: "%s | Saaphzone Technologies",
  },
  description:
    "Saaphzone Technologies delivers advanced environmental solutions — solid waste management, air pollution mitigation, BESS, and solar & wind energy across India.",
  keywords: [
    "Saaphzone Technologies",
    "pollution control",
    "solid waste management",
    "air pollution mitigation",
    "BESS",
    "solar energy",
    "wind energy",
    "clean tech India",
    "environmental solutions",
  ],
  openGraph: {
    title: "Saaphzone Technologies — Clean Tech & Environmental Solutions",
    description:
      "Advanced environmental solutions — from pollution control to renewable energy systems.",
    type: "website",
    locale: "en_IN",
    siteName: "Saaphzone Technologies",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
