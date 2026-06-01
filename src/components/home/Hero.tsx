"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";

/* ─── animation helpers ─────────────────────────────────── */

/** Split a string into words, each wrapped in a clip container for a "slide-up" reveal */
function SplitWords({
  text,
  baseDelay = 0,
  stagger = 0.06,
  className,
  style,
}: {
  text: string;
  baseDelay?: number;
  stagger?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const words = text.split(" ");
  return (
    <span
      className={className}
      style={{ display: "inline", ...style }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block" }}>
          <span
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "bottom",
              lineHeight: "inherit",
            }}
          >
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.62,
                delay: baseDelay + i * stagger,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

const floatingShapes = [
  { size: 320, x: "70%", y: "-10%", opacity: 0.06, delay: 0 },
  { size: 200, x: "85%", y: "50%", opacity: 0.08, delay: 0.5 },
  { size: 160, x: "5%", y: "70%", opacity: 0.05, delay: 1 },
  { size: 100, x: "55%", y: "80%", opacity: 0.07, delay: 1.5 },
];

/* ─── component ─────────────────────────────────────────── */

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(145deg, #f8faff 0%, #eff6ff 50%, #dbeafe 100%)",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Parallax blobs */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          y: bgY,
          pointerEvents: "none",
        }}
      >
        {floatingShapes.map((s, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -18, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
            style={{
              position: "absolute",
              width: s.size,
              height: s.size,
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(29,78,216,${s.opacity * 1.5}), rgba(59,130,246,${s.opacity}))`,
              left: s.x,
              top: s.y,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </motion.div>

      {/* Grid dot pattern */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(29,78,216,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "4rem 1.5rem",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* ── Left content ── */}
          <div>

            {/* Headline with split-word reveal */}
            <h1
              style={{
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1.25rem",
                color: "#0f172a",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              <SplitWords text="Innovating for a" baseDelay={0.18} stagger={0.07} />
              {" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline",
                }}
              >
                <SplitWords text="Cleaner & Sustainable" baseDelay={0.42} stagger={0.065} />
              </span>
              {" "}
              <SplitWords text="Tomorrow" baseDelay={0.72} stagger={0.08} />
            </h1>

            {/* Paragraph — fade + slide up with blur */}
            <motion.p
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: "1.125rem",
                color: "#475569",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
                maxWidth: "520px",
              }}
            >
              Saaphzone Technologies delivers advanced environmental solutions —
              from pollution control to renewable energy systems — engineered for
              India&apos;s industrial scale.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <Link
                href="#services"
                id="hero-explore-btn"
                onClick={(e) => { e.preventDefault(); scrollToServices(); }}
                className="hero-btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  background: "#1d4ed8",
                  color: "white",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "1rem",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  boxShadow: "0 4px 20px rgba(29,78,216,0.3)",
                  transition: "all 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#1e40af";
                  el.style.transform = "translateY(-3px) scale(1.02)";
                  el.style.boxShadow = "0 10px 28px rgba(29,78,216,0.42)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#1d4ed8";
                  el.style.transform = "translateY(0) scale(1)";
                  el.style.boxShadow = "0 4px 20px rgba(29,78,216,0.3)";
                }}
              >
                Explore Solutions <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                id="hero-contact-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  background: "white",
                  color: "#1d4ed8",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "1rem",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  border: "1.5px solid #1d4ed8",
                  transition: "all 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#eff6ff";
                  el.style.transform = "translateY(-3px) scale(1.02)";
                  el.style.boxShadow = "0 8px 20px rgba(29,78,216,0.12)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "white";
                  el.style.transform = "translateY(0) scale(1)";
                  el.style.boxShadow = "none";
                }}
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              style={{
                display: "flex",
                gap: "2rem",
                marginTop: "3rem",
                flexWrap: "wrap",
              }}
            >
              {[
                { num: "350+", label: "Projects" },
                { num: "40+", label: "Industries" },
                { num: "85 MW", label: "Renewable" },
              ].map(({ num, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.1, duration: 0.45, ease: "easeOut" }}
                >
                  <p
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "#1d4ed8",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      lineHeight: 1,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {num}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 500 }}>{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right — Hero Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hero-illustration"
            style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}
          >
            <HeroImage />
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.25rem",
            cursor: "pointer",
          }}
          onClick={scrollToServices}
        >
          <span style={{ fontSize: "0.75rem", color: "#94a3b8", fontWeight: 500, letterSpacing: "0.04em" }}>
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={20} color="#94a3b8" />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(0.85); }
        }
        .hero-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-illustration {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ─── hero image subcomponent ───────────────────────────── */
function HeroImage() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 520,
        borderRadius: "24px",
        overflow: "hidden",
        boxShadow: "0 24px 64px rgba(29,78,216,0.18), 0 4px 16px rgba(0,0,0,0.10)",
      }}
    >
      <Image
        src="/hero-cleantech.png"
        alt="Saaphzone clean technology facility with solar panels and wind turbines"
        width={520}
        height={380}
        style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
        priority
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "50%",
          background: "linear-gradient(to top, rgba(15,23,42,0.55), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Live monitoring card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
          right: "1rem",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "14px",
          padding: "0.875rem 1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.875rem",
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "10px",
            background: "rgba(29,78,216,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontSize: "1.1rem",
          }}
        >
          ⚡
        </div>
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.75)",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "0.2rem",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Live Monitoring
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              color: "white",
              fontWeight: 700,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            PM2.5: 24 μg/m³ &nbsp;·&nbsp; Output: 3.2 MW ↑ +4%
          </p>
        </div>
        <motion.span
          animate={{ opacity: [1, 0.3, 1], scale: [1, 0.85, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#4ade80",
            display: "inline-block",
            boxShadow: "0 0 8px #4ade80",
            flexShrink: 0,
          }}
        />
      </motion.div>
    </div>
  );
}
