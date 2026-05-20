"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ── word-by-word reveal (triggered on scroll) ── */
function RevealWords({
  text,
  baseDelay = 0,
  stagger = 0.055,
  style,
}: {
  text: string;
  baseDelay?: number;
  stagger?: number;
  style?: React.CSSProperties;
}) {
  const words = text.split(" ");
  return (
    <span style={{ display: "inline", ...style }} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", lineHeight: "inherit" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.58,
              delay: baseDelay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </span>
  );
}

export default function AboutPreview() {
  return (
    <section
      aria-label="About Saaphzone"
      style={{ padding: "5rem 1.5rem", background: "#f8faff" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* ── Left content ── */}
          <div>
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
              Who We Are
            </motion.span>

            {/* Headline with word reveal */}
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                color: "#0f172a",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              <RevealWords
                text="India's Trusted Clean-Tech Partner Since 2018"
                baseDelay={0.05}
                stagger={0.05}
              />
            </h2>

            {/* Body paragraphs — fade-in with blur */}
            {[
              "Saaphzone Technologies is a leading environmental solutions company headquartered in Noida, UP. We help industries meet regulatory compliance while significantly reducing their environmental footprint.",
              "From cement plants and steel mills to municipalities and solar farms, our solutions span the full spectrum of clean technology — backed by field-tested expertise and 350+ successful projects.",
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.65,
                  delay: 0.15 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  fontSize: "1rem",
                  color: "#475569",
                  lineHeight: 1.75,
                  marginBottom: "1rem",
                }}
              >
                {para}
              </motion.p>
            ))}

            {/* Mission & Vision */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {[
                {
                  label: "Mission",
                  text: "To make clean technology accessible and practical for every industry in India.",
                  color: "#1d4ed8",
                },
                {
                  label: "Vision",
                  text: "An India where industrial growth and environmental sustainability coexist seamlessly.",
                  color: "#0369a1",
                },
              ].map(({ label, text, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
                >
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.45, delay: 0.38 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      width: 4,
                      minHeight: 44,
                      borderRadius: "2px",
                      background: color,
                      flexShrink: 0,
                      marginTop: 2,
                      transformOrigin: "top",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {label}
                    </p>
                    <p style={{ fontSize: "0.9375rem", color: "#475569", lineHeight: 1.6 }}>{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/about"
                id="about-learn-more-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8125rem 1.625rem",
                  background: "#1d4ed8",
                  color: "white",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: "all 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: "0 4px 14px rgba(29,78,216,0.25)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#1e40af";
                  el.style.transform = "translateY(-3px) scale(1.02)";
                  el.style.boxShadow = "0 10px 26px rgba(29,78,216,0.38)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#1d4ed8";
                  el.style.transform = "translateY(0) scale(1)";
                  el.style.boxShadow = "0 4px 14px rgba(29,78,216,0.25)";
                }}
              >
                Learn More About Us <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>

          {/* ── Right — Graphic ── */}
          <motion.div
            initial={{ opacity: 0, x: 36, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="about-visual"
          >
            <AboutVisual />
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-visual {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

function AboutVisual() {
  const cards = [
    { label: "Projects Done", val: "350+", color: "#eff6ff", text: "#1d4ed8" },
    { label: "Industries", val: "40+", color: "#f0f9ff", text: "#0369a1" },
    { label: "CO₂ Reduced", val: "120K T", color: "#eef2ff", text: "#4338ca" },
    { label: "Capacity MW", val: "85+", color: "#ecfeff", text: "#0e7490" },
  ];

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          background: "white",
          borderRadius: "20px",
          padding: "2rem",
          boxShadow: "0 8px 40px rgba(29,78,216,0.12)",
          border: "1.5px solid #e2e8f0",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          {cards.map(({ label, val, color, text }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.48, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.04, transition: { duration: 0.22 } }}
              style={{
                background: color,
                borderRadius: "12px",
                padding: "1.25rem",
                textAlign: "center",
                cursor: "default",
              }}
            >
              <p
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 800,
                  color: text,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}
              >
                {val}
              </p>
              <p style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 500 }}>{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            padding: "1rem",
            background: "#f8faff",
            borderRadius: "12px",
          }}
        >
          {["ISO 9001:2015", "CPCB Certified", "MoEFCC Approved"].map((cert, i) => (
            <motion.span
              key={cert}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
              style={{
                background: "white",
                border: "1px solid #dbeafe",
                color: "#1d4ed8",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.3125rem 0.75rem",
                borderRadius: "100px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              ✓ {cert}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          bottom: -20,
          right: -20,
          background: "#1d4ed8",
          borderRadius: "16px",
          padding: "1rem 1.25rem",
          boxShadow: "0 8px 24px rgba(29,78,216,0.35)",
          color: "white",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            lineHeight: 1,
          }}
        >
          6+
        </p>
        <p style={{ fontSize: "0.75rem", opacity: 0.85, marginTop: "0.2rem" }}>
          Years of
          <br />
          Excellence
        </p>
      </motion.div>
    </div>
  );
}
