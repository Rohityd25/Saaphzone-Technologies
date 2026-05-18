"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    category: "Air Pollution Control",
    categoryColor: "#1d4ed8",
    title: "Dust Suppression System — Cement Plant, Rajasthan",
    description:
      "Installed a multi-stage ESP and wet scrubber system, reducing particulate matter by 94% across 4 production lines.",
    bg: "#dbeafe",
    emoji: "🏭",
  },
  {
    category: "Solid Waste Management",
    categoryColor: "#0369a1",
    title: "Waste-to-Energy Plant — Municipal Corporation, UP",
    description:
      "Designed and commissioned a 15 TPD waste processing facility converting MSW to compost and energy pellets.",
    bg: "#bae6fd",
    emoji: "♻️",
  },
  {
    category: "Solar & Wind Energy",
    categoryColor: "#0e7490",
    title: "5 MW Hybrid Solar-Wind Farm — Gujarat",
    description:
      "Integrated solar PV array with small wind turbines and BESS for 24/7 renewable power supply to an industrial cluster.",
    bg: "#a5f3fc",
    emoji: "⚡",
  },
];

export default function Projects() {
  return (
    <section
      aria-label="Featured Projects"
      style={{ padding: "5rem 1.5rem", background: "white" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
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
            Case Studies
          </span>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0f172a",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            Featured Projects
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {PROJECTS.map(({ category, categoryColor, title, description, bg, emoji }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                background: "white",
                border: "1.5px solid #e2e8f0",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "default",
              }}
              whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(29,78,216,0.12)" }}
            >
              {/* Visual header */}
              <div
                style={{
                  background: bg,
                  height: "140px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "4rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <span style={{ position: "relative", zIndex: 1 }}>{emoji}</span>
              </div>

              <div style={{ padding: "1.5rem" }}>
                <span
                  style={{
                    display: "inline-block",
                    background: `${categoryColor}14`,
                    color: categoryColor,
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.625rem",
                    borderRadius: "100px",
                    marginBottom: "0.75rem",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {category}
                </span>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    marginBottom: "0.625rem",
                    lineHeight: 1.35,
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.65 }}>
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
