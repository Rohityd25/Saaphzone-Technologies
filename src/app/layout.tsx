import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Saaphzone Technologies — Coming Soon",
    template: "%s | Saaphzone Technologies",
  },
  description:
    "Saaphzone Technologies — Advanced environmental solutions for a cleaner tomorrow. Website launching soon.",
  keywords: [
    "Saaphzone Technologies",
    "pollution control",
    "solid waste management",
    "clean tech India",
    "environmental solutions",
  ],
  openGraph: {
    title: "Saaphzone Technologies — Coming Soon",
    description: "Advanced environmental solutions — launching soon.",
    type: "website",
    locale: "en_IN",
    siteName: "Saaphzone Technologies",
  },
  robots: { index: true, follow: true },
};

// Root layout — no Navbar/Footer (Coming Soon page is standalone)
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
