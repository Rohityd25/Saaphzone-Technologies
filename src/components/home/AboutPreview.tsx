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
      style={{ padding: "6rem 1.5rem", background: "#ffffff" }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
    </section>
  );
}
