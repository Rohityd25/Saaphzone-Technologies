"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section
      aria-label="About Saaphzone"
      style={{
        padding: "5rem 1.5rem",
        background: "#f8faff",
      }}
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
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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
              Who We Are
            </span>
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
              India&apos;s Trusted Clean-Tech Partner Since 2018
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#475569",
                lineHeight: 1.75,
                marginBottom: "1rem",
              }}
            >
              Saaphzone Technologies is a leading environmental solutions company
              headquartered in Noida, UP. We help industries meet regulatory
              compliance while significantly reducing their environmental footprint.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "#475569",
                lineHeight: 1.75,
                marginBottom: "2rem",
              }}
            >
              From cement plants and steel mills to municipalities and solar farms,
              our solutions span the full spectrum of clean technology — backed by
              field-tested expertise and 350+ successful projects.
            </p>

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
              ].map(({ label, text, color }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 4,
                      minHeight: 44,
                      borderRadius: "2px",
                      background: color,
                      flexShrink: 0,
                      marginTop: 2,
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
                </div>
              ))}
            </div>

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
                transition: "all 0.25s ease",
                boxShadow: "0 4px 14px rgba(29,78,216,0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#1e40af";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#1d4ed8";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              Learn More About Us <ArrowRight size={17} />
            </Link>
          </motion.div>

          {/* Right — Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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
  return (
    <div style={{ position: "relative" }}>
      {/* Main card */}
      <div
        style={{
          background: "white",
          borderRadius: "20px",
          padding: "2rem",
          boxShadow: "0 8px 40px rgba(29,78,216,0.12)",
          border: "1.5px solid #e2e8f0",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
          {[
            { label: "Projects Done", val: "350+", color: "#eff6ff", text: "#1d4ed8" },
            { label: "Industries", val: "40+", color: "#f0f9ff", text: "#0369a1" },
            { label: "CO₂ Reduced", val: "120K T", color: "#eef2ff", text: "#4338ca" },
            { label: "Capacity MW", val: "85+", color: "#ecfeff", text: "#0e7490" },
          ].map(({ label, val, color, text }) => (
            <div
              key={label}
              style={{
                background: color,
                borderRadius: "12px",
                padding: "1.25rem",
                textAlign: "center",
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
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            padding: "1rem",
            background: "#f8faff",
            borderRadius: "12px",
          }}
        >
          {["ISO 9001:2015", "CPCB Certified", "MoEFCC Approved"].map((cert) => (
            <span
              key={cert}
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
            </span>
          ))}
        </div>
      </div>

      {/* Floating badge */}
      <div
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
      </div>
    </div>
  );
}
