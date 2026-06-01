import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";

export const metadata: Metadata = {
  title: "Software Development",
  description:
    "Custom environmental tracking software, IoT telemetry integration, enterprise compliance reporting dashboards, and ESG portals. Built for industries and smart cities.",
  openGraph: {
    title: "Software Development | Saaphzone Technologies",
    description:
      "Custom software and IoT telemetry solutions for environmental monitoring, ESG compliance, and real-time industrial telemetry.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full flex flex-col antialiased">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
