import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Battery Energy Storage System (BESS)",
  description:
    "Grid-scale and commercial BESS solutions — LFP batteries, BMS, grid integration, and 24/7 monitoring. 93%+ efficiency, 6,000+ cycle life. Scalable from 50 kWh to 100+ MWh.",
  openGraph: {
    title: "BESS Solutions | Saaphzone Technologies",
    description:
      "Intelligent battery energy storage systems for peak shaving, renewable integration, industrial backup power, and grid frequency regulation.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
