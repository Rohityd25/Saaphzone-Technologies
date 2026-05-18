"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const floatingShapes = [
  { size: 320, x: "70%", y: "-10%", opacity: 0.06, delay: 0 },
  { size: 200, x: "85%", y: "50%", opacity: 0.08, delay: 0.5 },
  { size: 160, x: "5%", y: "70%", opacity: 0.05, delay: 1 },
  { size: 100, x: "55%", y: "80%", opacity: 0.07, delay: 1.5 },
];

export default function Hero() {
  const scrollToServices = () => {
    const el = document.getElementById("services");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      aria-label="Hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(145deg, #f8faff 0%, #eff6ff 50%, #dbeafe 100%)",
        overflow: "hidden",
        paddingTop: "70px",
      }}
    >
      {/* Floating decorative circles */}
      {floatingShapes.map((s, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          animate={{
            y: [0, -18, 0],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
          style={{
            position: "absolute",
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(29,78,216,${s.opacity * 1.5}), rgba(59,130,246,${s.opacity}))`,
            left: s.x,
            top: s.y,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Grid dot pattern */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(29,78,216,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

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
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(29,78,216,0.08)",
                border: "1px solid rgba(29,78,216,0.2)",
                borderRadius: "100px",
                padding: "0.375rem 0.875rem",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#1d4ed8",
                  display: "inline-block",
                  animation: "pulse 2s infinite",
                }}
              />
              <span
                style={{
                  fontSize: "0.825rem",
                  fontWeight: 600,
                  color: "#1d4ed8",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                Trusted Clean-Tech Partner across India
              </span>
            </motion.div>

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
              Innovating for a{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Cleaner & Sustainable
              </span>{" "}
              Tomorrow
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
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

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <Link
                href="#services"
                id="hero-explore-btn"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToServices();
                }}
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
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#1e40af";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 25px rgba(29,78,216,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#1d4ed8";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(29,78,216,0.3)";
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
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#eff6ff";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "white";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
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
              ].map(({ num, label }) => (
                <div key={label}>
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
                  <p style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 500 }}>
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
            className="hero-illustration"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HeroIllustration />
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          <span style={{ fontSize: "0.75rem", color: "#94a3b8", fontWeight: 500 }}>
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={20} color="#94a3b8" />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
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

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 480 }}
      aria-hidden="true"
    >
      {/* Background card */}
      <rect x="30" y="30" width="460" height="420" rx="24" fill="white" fillOpacity="0.7" />
      <rect x="30" y="30" width="460" height="420" rx="24" stroke="#dbeafe" strokeWidth="1.5" />

      {/* Factory building */}
      <rect x="90" y="200" width="120" height="180" rx="6" fill="#dbeafe" />
      <rect x="100" y="215" width="40" height="50" rx="4" fill="#bfdbfe" />
      <rect x="155" y="215" width="40" height="50" rx="4" fill="#bfdbfe" />
      <rect x="100" y="285" width="95" height="95" rx="4" fill="#93c5fd" />
      {/* Chimney */}
      <rect x="105" y="150" width="22" height="60" rx="5" fill="#1d4ed8" />
      <rect x="145" y="165" width="22" height="45" rx="5" fill="#3b82f6" />
      <rect x="180" y="155" width="18" height="55" rx="5" fill="#1d4ed8" />

      {/* Clean smoke → green particles */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={116 + i * 40}
          cy={145}
          r={8 + i * 3}
          fill="#dbeafe"
          fillOpacity={0.6 - i * 0.15}
          animate={{ cy: [145, 120 - i * 12, 145], opacity: [0.6, 0.1, 0.6] }}
          transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        />
      ))}

      {/* Solar panels */}
      <g transform="translate(260, 190)">
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={col * 38}
              y={row * 26}
              width="34"
              height="22"
              rx="3"
              fill={row === 1 && col === 1 ? "#1d4ed8" : "#3b82f6"}
              fillOpacity={0.7 + (row + col) * 0.05}
            />
          ))
        )}
      </g>

      {/* Wind turbine */}
      <line x1="400" y1="140" x2="400" y2="320" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" />
      {/* Blades */}
      {[0, 120, 240].map((deg, i) => (
        <motion.g
          key={i}
          style={{ transformOrigin: "400px 200px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          <line
            x1="400"
            y1="200"
            x2={400 + 45 * Math.cos((deg * Math.PI) / 180)}
            y2={200 + 45 * Math.sin((deg * Math.PI) / 180)}
            stroke="#1d4ed8"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </motion.g>
      ))}
      <circle cx="400" cy="200" r="8" fill="#1d4ed8" />

      {/* Battery */}
      <rect x="80" y="310" width="100" height="50" rx="8" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="2" />
      <rect x="175" y="325" width="8" height="20" rx="3" fill="#bfdbfe" />
      <rect x="88" y="318" width="55" height="34" rx="4" fill="#3b82f6" fillOpacity="0.7" />
      <text x="116" y="340" fill="white" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="Inter, sans-serif">BESS</text>

      {/* Leaf decorations */}
      <circle cx="450" cy="100" r="22" fill="#dbeafe" />
      <text x="450" y="107" fontSize="22" textAnchor="middle">🌿</text>
      <circle cx="80" cy="100" r="18" fill="#eff6ff" />
      <text x="80" y="106" fontSize="18" textAnchor="middle">♻️</text>

      {/* Ground line */}
      <line x1="60" y1="375" x2="460" y2="375" stroke="#e2e8f0" strokeWidth="2" />

      {/* Small data card */}
      <rect x="265" y="310" width="160" height="75" rx="10" fill="white" stroke="#dbeafe" strokeWidth="1.5" />
      <text x="280" y="333" fill="#1d4ed8" fontSize="10" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">LIVE MONITORING</text>
      <rect x="280" y="342" width="80" height="6" rx="3" fill="#dbeafe" />
      <rect x="280" y="342" width="62" height="6" rx="3" fill="#3b82f6" />
      <text x="280" y="363" fill="#64748b" fontSize="9" fontFamily="Inter, sans-serif">PM2.5: 24 μg/m³  ✓ Safe</text>
      <text x="280" y="377" fill="#64748b" fontSize="9" fontFamily="Inter, sans-serif">Output: 3.2 MW  ↑ +4%</text>
    </svg>
  );
}
