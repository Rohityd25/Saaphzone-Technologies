import Hero from "@/components/home/Hero";
import DirectorCard from "@/components/home/DirectorCard";
import Services from "@/components/home/Services";
import AboutPreview from "@/components/home/AboutPreview";

import WhyChooseUs from "@/components/home/WhyChooseUs";
import Projects from "@/components/home/Projects";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DirectorCard />
      <Services />
      <AboutPreview />

      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <CTABanner />
    </>
  );
}
