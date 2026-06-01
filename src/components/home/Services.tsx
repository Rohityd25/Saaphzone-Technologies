"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Recycle, Wind, BatteryFull, Sun, ArrowRight, Code2 } from "lucide-react";

const SERVICES = [
  {
    id: "solid-waste",
    Icon: Recycle,
    title: "Solid Waste Management",
    description:
      "End-to-end waste processing — collection, segregation, treatment, and safe disposal systems for industries and municipalities.",
    href: "/services/solid-waste",
    accent: "#1d4ed8",
    bg: "#eff6ff",
    image: "/service-solid-waste.png",
  },
  {
    id: "air-pollution",
    Icon: Wind,
    title: "Air Pollution Mitigation",
    description:
      "Advanced filtration, scrubbers, and dust-collection systems that bring industrial emissions well within regulatory limits.",
    href: "/services/air-pollution",
    accent: "#0369a1",
    bg: "#f0f9ff",
    image: "/service-air-pollution.png",
  },
  {
    id: "bess",
    Icon: BatteryFull,
    title: "Battery Energy Storage",
    description:
      "Grid-scale and commercial BESS solutions for reliable, intelligent energy storage that maximises renewable utilisation.",
    href: "/services/bess",
    accent: "#4338ca",
    bg: "#eef2ff",
    image: "/service-bess.png",
  },
  {
    id: "solar-wind",
    Icon: Sun,
    title: "Solar & Wind Energy",
    description:
      "Turnkey solar PV, wind turbine, and hybrid renewable energy plants engineered for maximum yield and long-term ROI.",
    href: "/services/solar-wind",
    accent: "#0e7490",
    bg: "#ecfeff",
    image: "/service-solar-wind.png",
  },
  {
    id: "software-development",
    Icon: Code2,
    title: "Software Development",
    description:
      "Custom environmental tracking software, IoT telemetry integration, and enterprise compliance reporting dashboards.",
    href: "/services/software-development",
    accent: "#0891b2",
    bg: "#ecfeff",
    image: "/service-software-dev.png",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Our Services"
      style={{ padding: "5rem 1.5rem", background: "white" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#eff6ff",
              color: "#1d4ed8",
              fontSize: "0.8rem",
              fontWeight: 700,
              padding: "0.375rem 0.875rem",
              borderRadius: "100px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "0.875rem",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            What We Do
          </span>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0f172a",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              marginBottom: "0.875rem",
              letterSpacing: "-0.02em",
            }}
          >
            Our Core Services
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "#64748b",
              maxWidth: "540px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Comprehensive environmental solutions designed to meet India&apos;s
            toughest industrial and regulatory challenges.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {SERVICES.map(({ id, Icon, title, description, href, accent, bg, image }) => (
            <motion.div
              key={id}
              variants={cardAnim}
              style={{
                background: "white",
                border: "1.5px solid #e2e8f0",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
              }}
              whileHover={{
                y: -6,
                boxShadow: `0 16px 40px rgba(29,78,216,0.12)`,
                borderColor: accent,
              }}
            >
              {/* Service Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 160,
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                {/* Color overlay on hover target */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(to bottom, transparent 40%, ${accent}33)`,
                    pointerEvents: "none",
                  }}
                />
                {/* Icon badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "0.75rem",
                    left: "0.75rem",
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    background: bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                  }}
                >
                  <Icon size={22} color={accent} />
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: "1.25rem 1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 700,
                      color: "#0f172a",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#64748b",
                      lineHeight: 1.65,
                    }}
                  >
                    {description}
                  </p>
                </div>

                <Link
                  href={href}
                  id={`service-${id}-link`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    color: accent,
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    transition: "gap 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.gap = "0.625rem";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.gap = "0.375rem";
                  }}
                >
                  Learn More <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
