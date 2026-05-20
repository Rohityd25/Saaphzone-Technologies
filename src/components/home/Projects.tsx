"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PROJECTS = [
  {
    category: "Air Pollution Control",
    categoryColor: "#1d4ed8",
    title: "Dust Suppression System — Cement Plant, Rajasthan",
    description:
      "Installed a multi-stage ESP and wet scrubber system, reducing particulate matter by 94% across 4 production lines.",
    image: "/project-cement-plant.png",
  },
  {
    category: "Solid Waste Management",
    categoryColor: "#0369a1",
    title: "Waste-to-Energy Plant — Municipal Corporation, UP",
    description:
      "Designed and commissioned a 15 TPD waste processing facility converting MSW to compost and energy pellets.",
    image: "/project-waste-energy.png",
  },
  {
    category: "Solar & Wind Energy",
    categoryColor: "#0e7490",
    title: "5 MW Hybrid Solar-Wind Farm — Gujarat",
    description:
      "Integrated solar PV array with small wind turbines and BESS for 24/7 renewable power supply to an industrial cluster.",
    image: "/project-solar-wind-farm.png",
  },
];

export default function Projects() {
  return (
    <section
      aria-label="Featured Projects"
      style={{ padding: "5rem 1.5rem", background: "white" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
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
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0f172a",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            Featured Projects
          </motion.h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {PROJECTS.map(({ category, categoryColor, title, description, image }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.62,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(29,78,216,0.14)" }}
              style={{
                background: "white",
                border: "1.5px solid #e2e8f0",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "default",
                transition: "border-color 0.25s ease",
              }}
            >
              {/* Project image with zoom on hover */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 200,
                  overflow: "hidden",
                }}
                className={`project-img-wrap-${i}`}
              >
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </motion.div>

                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(15,23,42,0.38) 0%, transparent 60%)",
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                />

                {/* Category badge on the image */}
                <motion.span
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  style={{
                    position: "absolute",
                    top: "0.75rem",
                    left: "0.75rem",
                    display: "inline-block",
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(6px)",
                    color: categoryColor,
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.625rem",
                    borderRadius: "100px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    zIndex: 2,
                    border: `1px solid ${categoryColor}33`,
                  }}
                >
                  {category}
                </motion.span>
              </div>

              {/* Card body */}
              <div style={{ padding: "1.5rem" }}>
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

                {/* Bottom accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    marginTop: "1.25rem",
                    height: 2,
                    borderRadius: "1px",
                    background: `linear-gradient(90deg, ${categoryColor}, ${categoryColor}44)`,
                    transformOrigin: "left",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
