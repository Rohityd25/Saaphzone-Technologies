"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const DIRECTOR = {
  name: "Mr. Rahul Sharma",
  phone: "+91 98765 43210",
  designation: "Director, Saaphzone Technologies",
  bio: "Over 15 years of expertise in clean technology, industrial pollution control, and sustainable energy solutions — driving Saaphzone's mission of a greener tomorrow.",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function DirectorCard() {
  return (
    <section
      aria-label="Director Introduction"
      style={{
        background: "linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)",
        padding: "4rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "20px",
            padding: "2.5rem",
            maxWidth: "820px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              marginBottom: "0.375rem",
            }}
          >
            Leadership
          </p>
          <h2
            style={{
              color: "white",
              fontSize: "1.75rem",
              fontWeight: 800,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              marginBottom: "0.25rem",
              lineHeight: 1.2,
            }}
          >
            {DIRECTOR.name}
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "0.9rem",
              fontWeight: 500,
              marginBottom: "1rem",
            }}
          >
            {DIRECTOR.designation}
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
            }}
          >
            {DIRECTOR.bio}
          </p>
          <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
            <a
              href={`tel:${DIRECTOR.phone.replace(/\s/g, "")}`}
              id="director-phone"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "white",
                color: "#1d4ed8",
                padding: "0.5rem 1.125rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.9rem",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 18px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              <Phone size={16} /> {DIRECTOR.phone}
            </a>
            <a
              href="mailto:director@saaphzone.com"
              id="director-email"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(255,255,255,0.12)",
                color: "white",
                padding: "0.5rem 1.125rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.9rem",
                border: "1px solid rgba(255,255,255,0.25)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.2)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.12)")
              }
            >
              <Mail size={16} /> director@saaphzone.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
