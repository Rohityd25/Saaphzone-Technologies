import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";

export const metadata: Metadata = {
  title: "Solid Waste Management",
  description:
    "End-to-end solid waste processing systems — MSW, industrial waste, bio-medical waste, waste-to-energy, and composting. CPCB compliant, scalable from 5 TPD to 500+ TPD.",
  openGraph: {
    title: "Solid Waste Management | Saaphzone Technologies",
    description:
      "Advanced solid waste management systems for industries and municipalities — collection, segregation, treatment, and safe disposal.",
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
