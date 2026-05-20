"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Anil Mehta",
    company: "Mehta Steel Industries, Jharkhand",
    initials: "AM",
    quote:
      "Saaphzone's air pollution control system brought our emission levels well within CPCB norms. Their team was professional and efficient from day one — minimal downtime, maximum results.",
  },
  {
    name: "Priya Nair",
    company: "GreenBuild Constructions, Kerala",
    initials: "PN",
    quote:
      "The solid waste management solution from Saaphzone has significantly reduced our landfill dependency. Excellent ROI within the first year. Highly recommend their end-to-end service.",
  },
  {
    name: "Rajesh Gupta",
    company: "Apex Chemicals Ltd., Gujarat",
    initials: "RG",
    quote:
      "From consultation to commissioning, the BESS project was seamlessly managed. Our energy costs dropped by 30% in the first six months — well ahead of the projected timeline.",
  },
  {
    name: "Sneha Patel",
    company: "Suncrest Agro Industries, Maharashtra",
    initials: "SP",
    quote:
      "Our 2 MW solar plant by Saaphzone has been generating clean energy consistently. The live monitoring dashboard gives us full visibility at all times. Outstanding support team.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<"left" | "right">("right");
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setDir("right");
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5500);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timer.current) clearInterval(timer.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const go = (index: number, direction: "left" | "right") => {
    setDir(direction);
    setActive(index);
    startTimer();
  };

  const prev = () => go((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length, "left");
  const next = () => go((active + 1) % TESTIMONIALS.length, "right");

  return (
    <section
      aria-label="Client Testimonials"
      style={{ padding: "5rem 1.5rem", background: "#f8faff" }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
            Client Stories
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0f172a",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            What Our Clients Say
          </motion.h2>
        </div>

        {/* Carousel card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "2.5rem",
            border: "1.5px solid #e2e8f0",
            boxShadow: "0 4px 28px rgba(29,78,216,0.08)",
            position: "relative",
            minHeight: 260,
            overflow: "hidden",
          }}
        >
          {/* Large quote icon */}
          <Quote
            size={52}
            color="#dbeafe"
            style={{ position: "absolute", top: "1.5rem", left: "1.75rem" }}
            aria-hidden="true"
          />

          {/* Progress bar */}
          <motion.div
            key={active + "-bar"}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 5.5, ease: "linear" }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 3,
              background: "linear-gradient(90deg, #1d4ed8, #60a5fa)",
              transformOrigin: "left",
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{
                opacity: 0,
                x: dir === "right" ? 40 : -40,
                filter: "blur(4px)",
              }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{
                opacity: 0,
                x: dir === "right" ? -40 : 40,
                filter: "blur(4px)",
              }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "relative", zIndex: 1 }}
            >
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "#374151",
                  lineHeight: 1.78,
                  fontStyle: "italic",
                  marginBottom: "2rem",
                  paddingTop: "1.75rem",
                }}
              >
                &ldquo;{TESTIMONIALS[active].quote}&rdquo;
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    flexShrink: 0,
                    boxShadow: "0 4px 12px rgba(29,78,216,0.3)",
                  }}
                >
                  {TESTIMONIALS[active].initials}
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      color: "#0f172a",
                      fontSize: "0.9375rem",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {TESTIMONIALS[active].name}
                  </p>
                  <p style={{ color: "#64748b", fontSize: "0.8rem" }}>
                    {TESTIMONIALS[active].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.25rem",
            marginTop: "1.75rem",
          }}
        >
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "1.5px solid #e2e8f0",
              background: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1d4ed8",
              transition: "all 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "#1d4ed8";
              el.style.color = "white";
              el.style.transform = "scale(1.1)";
              el.style.borderColor = "#1d4ed8";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "white";
              el.style.color = "#1d4ed8";
              el.style.transform = "scale(1)";
              el.style.borderColor = "#e2e8f0";
            }}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i, i > active ? "right" : "left")}
                aria-label={`Testimonial ${i + 1}`}
                style={{
                  width: i === active ? 24 : 8,
                  height: 8,
                  borderRadius: "100px",
                  background: i === active ? "#1d4ed8" : "#dbeafe",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "1.5px solid #e2e8f0",
              background: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1d4ed8",
              transition: "all 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "#1d4ed8";
              el.style.color = "white";
              el.style.transform = "scale(1.1)";
              el.style.borderColor = "#1d4ed8";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "white";
              el.style.color = "#1d4ed8";
              el.style.transform = "scale(1)";
              el.style.borderColor = "#e2e8f0";
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
