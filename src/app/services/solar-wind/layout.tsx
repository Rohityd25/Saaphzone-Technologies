import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";

export const metadata: Metadata = {
  title: "Solar & Wind Energy",
  description:
    "Turnkey solar PV, wind turbine, and hybrid renewable energy plants — rooftop, ground-mounted, floating solar, and wind farms. 85 MW installed capacity across India.",
  openGraph: {
    title: "Solar & Wind Energy | Saaphzone Technologies",
    description:
      "Turnkey solar PV and wind energy solutions with 25-year performance guarantee. 5–7 year payback. Pan-India project delivery.",
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
