import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Pollution Mitigation System",
  description:
    "Advanced industrial air pollution control — bag filters, ESP, wet scrubbers, dust collectors, CEMS, and regulatory compliance support. Bringing your emissions below every CPCB limit.",
  openGraph: {
    title: "Air Pollution Mitigation | Saaphzone Technologies",
    description:
      "Filtration, scrubbing, dust collection, and 24/7 emission monitoring systems that bring industrial emissions below every regulatory limit.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
