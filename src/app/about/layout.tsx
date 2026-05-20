import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Saaphzone Technologies — our story, mission, vision, core values, milestones, leadership team, and certifications. India's trusted clean-tech partner since 2018.",
  openGraph: {
    title: "About Saaphzone Technologies",
    description:
      "From a pollution control startup to India's trusted clean-tech company — 350+ projects, 40+ industries, 85 MW renewable capacity.",
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
