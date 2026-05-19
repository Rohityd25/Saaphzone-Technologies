import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Saaphzone Technologies for a free consultation on environmental solutions, renewable energy, BESS, and pollution control. Based in Noida, India.",
  openGraph: {
    title: "Contact Saaphzone Technologies",
    description:
      "Reach out to our clean-tech experts for solid waste management, air pollution control, BESS, and solar & wind energy projects.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
