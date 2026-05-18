"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const STATS = [
  { value: 350, suffix: "+", label: "Projects Completed" },
  { value: 40, suffix: "+", label: "Industries Served" },
  { value: 120000, suffix: "T", label: "CO₂ Reduced (tonnes)" },
  { value: 85, suffix: " MW", label: "Renewable Capacity" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;
    let current = 0;
    const increment = target / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [isInView, target]);

  const display =
    target >= 1000
      ? (count / 1000).toFixed(count >= target ? 0 : 1) + "K"
      : count.toLocaleString();

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      aria-label="Company Statistics"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        padding: "5rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(29,78,216,0.2), transparent)",
          top: "-200px",
          right: "-100px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span
            style={{
              display: "inline-block",
              background: "rgba(59,130,246,0.15)",
              color: "#93c5fd",
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
            Our Impact
          </span>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "white",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            Numbers That Speak for Themselves
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {STATS.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "2.5rem 1.5rem",
                textAlign: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  fontWeight: 800,
                  color: "#60a5fa",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  lineHeight: 1,
                  marginBottom: "0.75rem",
                }}
              >
                <CountUp target={value} suffix={suffix} />
              </p>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                }}
              >
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
