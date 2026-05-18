"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

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
      {/* Background decor */}
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
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: "18px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              marginBottom: "1.5rem",
            }}
          >
            <MessageSquare size={30} color="white" />
          </div>

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
            Ready to Build a Greener Future?
          </h2>
          <p
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
          </p>

          <div
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
                transition: "all 0.25s ease",
                boxShadow: "0 4px 18px rgba(0,0,0,0.15)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 28px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 18px rgba(0,0,0,0.15)";
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
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.7)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.45)";
              }}
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
