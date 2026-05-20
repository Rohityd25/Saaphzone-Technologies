"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

/* word-split reveal for the headline */
function RevealWords({
  text,
  baseDelay = 0,
  stagger = 0.055,
}: {
  text: string;
  baseDelay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  return (
    <span aria-label={text} style={{ display: "inline" }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", lineHeight: "inherit" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{
              duration: 0.6,
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

export default function CTABanner() {
  return (
    <section
      aria-label="Call to Action"
      style={{
        background: "linear-gradient(135deg, #1d4ed8 0%, #1e40af 60%, #1e3a8a 100%)",
        padding: "5rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decor blobs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.06), transparent)",
          top: "-150px",
          right: "10%",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.05), transparent)",
          bottom: "-100px",
          left: "5%",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Animated icon with pulsing ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            marginBottom: "1.5rem",
          }}
        >
          {/* Pulsing ring */}
          <motion.div
            animate={{ scale: [1, 1.35, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            style={{
              position: "absolute",
              inset: -10,
              borderRadius: "26px",
              border: "2px solid rgba(255,255,255,0.3)",
            }}
          />
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "18px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MessageSquare size={30} color="white" />
          </div>
        </motion.div>

        {/* Headline — word split reveal */}
        <h2
          style={{
            fontSize: "clamp(1.875rem, 5vw, 3rem)",
            fontWeight: 800,
            color: "white",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
            lineHeight: 1.2,
          }}
        >
          <RevealWords text="Ready to Build a Greener Future?" baseDelay={0.1} stagger={0.06} />
        </h2>

        {/* Paragraph — blur-fade reveal */}
        <motion.p
          initial={{ opacity: 0, y: 14, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.65, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "1.125rem",
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
            maxWidth: "520px",
            margin: "0 auto 2.5rem",
          }}
        >
          Let&apos;s discuss your environmental challenges. Our experts are ready
          to design a tailored solution for your industry — from site assessment
          to commissioning.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/contact"
            id="cta-contact-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.9375rem 2rem",
              background: "white",
              color: "#1d4ed8",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1rem",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: "all 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: "0 4px 18px rgba(0,0,0,0.15)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(-3px) scale(1.02)";
              el.style.boxShadow = "0 10px 32px rgba(0,0,0,0.28)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(0) scale(1)";
              el.style.boxShadow = "0 4px 18px rgba(0,0,0,0.15)";
            }}
          >
            Get in Touch <ArrowRight size={18} />
          </Link>

          <Link
            href="#services"
            id="cta-services-btn"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.9375rem 2rem",
              background: "transparent",
              color: "white",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1rem",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              border: "1.5px solid rgba(255,255,255,0.45)",
              transition: "all 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(255,255,255,0.12)";
              el.style.borderColor = "rgba(255,255,255,0.75)";
              el.style.transform = "translateY(-3px) scale(1.02)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.borderColor = "rgba(255,255,255,0.45)";
              el.style.transform = "translateY(0) scale(1)";
            }}
          >
            Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
