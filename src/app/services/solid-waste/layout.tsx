import type { Metadata } from "next";

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
  return <>{children}</>;
}
