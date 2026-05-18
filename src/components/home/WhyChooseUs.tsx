"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Factory, Leaf, Clock } from "lucide-react";

const REASONS = [
  {
    Icon: Cpu,
    title: "Smart Technology",
    desc: "AI-driven monitoring and IoT sensors deliver real-time environmental data and predictive alerts.",
  },
  {
    Icon: ShieldCheck,
    title: "Regulatory Compliance",
    desc: "Full alignment with CPCB, MoEFCC, and international ISO standards ensures zero legal risk.",
  },
  {
    Icon: Factory,
    title: "Industrial Expertise",
    desc: "Sector-specific solutions built on 15+ years of field experience across 40+ industries.",
  },
  {
    Icon: Leaf,
    title: "Sustainability Focus",
    desc: "Every solution is designed to minimise environmental footprint and maximise long-term impact.",
  },
  {
    Icon: Clock,
    title: "24/7 Monitoring",
    desc: "Round-the-clock remote monitoring with instant alert notifications and dedicated support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      aria-label="Why Choose Saaphzone"
      style={{ padding: "5rem 1.5rem", background: "#f8faff" }}
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
            Our Advantage
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
            Why Choose Saaphzone?
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "#64748b",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            We combine technical excellence with field-proven reliability to deliver
            clean-tech solutions that last.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {REASONS.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(29,78,216,0.1)" }}
              style={{
                background: "white",
                border: "1.5px solid #e2e8f0",
                borderRadius: "16px",
                padding: "1.75rem",
                transition: "border-color 0.25s ease",
                cursor: "default",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <Icon size={22} color="white" />
              </div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#0f172a",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  marginBottom: "0.5rem",
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.65 }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
