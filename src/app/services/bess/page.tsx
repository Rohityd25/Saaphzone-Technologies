"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Battery, ChevronDown, ChevronUp, ArrowRight, Zap, ShieldCheck, BarChart2, Clock, Settings, Globe, CheckCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const keyFeatures = [
  { icon: Zap, title: "High Energy Density", desc: "Advanced lithium-ion and LFP chemistries delivering high cycle life and consistent energy output." },
  { icon: ShieldCheck, title: "Battery Management System", desc: "Intelligent BMS for real-time cell balancing, thermal management, and state-of-health monitoring." },
  { icon: BarChart2, title: "Grid Integration", desc: "Seamless integration with grid, solar, wind, and diesel gensets via bidirectional inverters." },
  { icon: Clock, title: "Long Cycle Life", desc: "6,000+ charge cycles ensuring 15+ years of reliable operation with minimal degradation." },
  { icon: Settings, title: "Modular Architecture", desc: "Scalable from 50 kWh to 100+ MWh — expandable as your energy needs grow." },
  { icon: Globe, title: "Remote Monitoring", desc: "24/7 cloud-based SCADA platform for performance tracking, diagnostics, and alert management." },
];

const techSpecs = [
  { param: "Chemistry", value: "LFP / NMC / NCA (project-specific)" },
  { param: "Capacity Range", value: "50 kWh — 100+ MWh" },
  { param: "Round-Trip Efficiency", value: "≥ 93%" },
  { param: "Cycle Life", value: "6,000+ cycles (80% DoD)" },
  { param: "Operating Temperature", value: "-20°C to +55°C" },
  { param: "Response Time", value: "< 20 ms (grid frequency response)" },
  { param: "Safety Standards", value: "IEC 62619, UL 9540, IS 16046" },
  { param: "Warranty", value: "10 years / 6,000 cycles (whichever first)" },
];

const useCases = [
  { icon: "⚡", title: "Peak Shaving", desc: "Reduce demand charges by discharging during peak grid tariff hours — cutting electricity bills by 20-40%." },
  { icon: "🔄", title: "Renewable Integration", desc: "Store excess solar or wind energy and dispatch on demand, eliminating curtailment losses." },
  { icon: "🏭", title: "Industrial Backup Power", desc: "Uninterruptible power supply for critical industrial processes with zero switchover time." },
  { icon: "🌐", title: "Grid Frequency Regulation", desc: "Sub-second response to grid frequency deviations for ancillary service markets." },
  { icon: "🏘️", title: "Microgrids", desc: "Off-grid and hybrid microgrid systems for remote communities and industrial campuses." },
  { icon: "🚗", title: "EV Charging Hubs", desc: "Buffer BESS to enable high-power EV charging without costly grid upgrades." },
];

const faqs = [
  { q: "What battery chemistry do you use?", a: "We use LFP (Lithium Iron Phosphate) as our standard chemistry for its superior safety, long cycle life, and thermal stability. NMC and other chemistries are available for specific applications requiring higher energy density." },
  { q: "How long does a BESS project take to commission?", a: "Typical commissioning timelines range from 3 months for commercial systems to 12 months for large-scale grid projects. Containerised solutions can be deployed in 6–8 weeks." },
  { q: "What is the payback period?", a: "Most commercial and industrial BESS installations achieve payback in 4–7 years through demand charge reduction, solar self-consumption, and grid arbitrage revenue." },
  { q: "Can BESS be combined with solar PV?", a: "Yes — solar+storage is our most popular configuration. We design optimised hybrid systems that maximise self-consumption and provide backup power during grid outages." },
  { q: "Do you provide O&M services?", a: "Yes. We offer comprehensive annual maintenance contracts including remote monitoring, preventive maintenance, cell replacement, and firmware updates." },
];

const howItWorksSteps = [
  { step: "01", title: "Site Assessment", desc: "Our engineers analyse your load profile, grid connection, and renewable assets to design an optimised BESS." },
  { step: "02", title: "System Design", desc: "Custom engineering of capacity, chemistry, BMS configuration, and grid integration architecture." },
  { step: "03", title: "Manufacturing & Testing", desc: "Factory acceptance testing (FAT) ensures every unit meets our strict quality and safety standards." },
  { step: "04", title: "Installation & Commissioning", desc: "Full turnkey deployment with civil works, electrical integration, and system commissioning." },
  { step: "05", title: "Live Monitoring", desc: "24/7 SCADA monitoring with Saaphzone's cloud platform — real-time alerts, performance reports, and remote diagnostics." },
];

export default function BESSPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div style={{ paddingTop: "80px" }}>

      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(145deg,#f0f7ff 0%,#e8f2ff 50%,#dbeafe 100%)", padding: "5rem 1.5rem 0", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle,rgba(29,78,216,.07) 1px,transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "flex-end" }} className="bess-hero-grid">
          {/* Left text */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ paddingBottom: "5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(29,78,216,.08)", border: "1px solid rgba(29,78,216,.2)", borderRadius: "100px", padding: "0.375rem 0.875rem", marginBottom: "1.25rem" }}>
              <Battery size={14} color="#1d4ed8" />
              <span style={{ fontSize: "0.825rem", fontWeight: 600, color: "#1d4ed8", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Our Services</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem,4.5vw,3.1rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: "-0.02em", maxWidth: 680, marginBottom: "1.25rem", lineHeight: 1.15 }}>
              Battery Energy Storage<br />System <span style={{ color: "#1d4ed8" }}>(BESS)</span>
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#475569", lineHeight: 1.75, maxWidth: 560, marginBottom: "2rem" }}>
              Grid-scale and commercial BESS solutions for reliable, intelligent energy storage. Maximise renewable utilisation, reduce demand charges, and ensure uninterrupted power supply.
            </p>
            {/* Stats row */}
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              {[{ num: "93%+", label: "Efficiency" }, { num: "6,000+", label: "Cycle Life" }, { num: "<20ms", label: "Response" }].map(({ num, label }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "1.6rem", fontWeight: 800, color: "#1d4ed8", fontFamily: "'Plus Jakarta Sans',sans-serif", lineHeight: 1, marginBottom: "0.2rem" }}>{num}</p>
                  <p style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</p>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", background: "#1d4ed8", color: "white", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: "0 4px 20px rgba(29,78,216,.3)", transition: "all .25s ease" }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#1e40af"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#1d4ed8"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}>
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", background: "white", color: "#1d4ed8", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", border: "1.5px solid #1d4ed8", transition: "all .25s ease" }}>
                Learn About Us
              </Link>
            </div>
          </motion.div>

          {/* Right — Product image floating up from bottom */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 400 }}>
              {/* Glow blob behind unit */}
              <div style={{ position: "absolute", inset: "-20px", background: "radial-gradient(ellipse at center,rgba(59,130,246,.25) 0%,transparent 70%)", borderRadius: "50%", filter: "blur(30px)", zIndex: 0 }} />
              <Image
                src="/saaphzone-bess-unit.png"
                alt="Saaphzone Battery Energy Storage System unit"
                width={400}
                height={520}
                style={{ width: "100%", height: "auto", objectFit: "contain", position: "relative", zIndex: 1, filter: "drop-shadow(0 30px 60px rgba(29,78,216,.2))" }}
                priority
              />
            </div>
          </motion.div>
        </div>
        <style>{`
          .bess-hero-grid { grid-template-columns: 1fr 1fr; }
          @media(max-width:900px){ .bess-hero-grid{ grid-template-columns:1fr!important; } .bess-hero-grid>div:last-child{ max-height:320px; overflow:hidden; } }
        `}</style>
      </section>

      {/* ── WHAT IS BESS — split with product image ── */}
      <section style={{ padding: "6rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="bess-two-col">
          {/* Image side */}
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", boxShadow: "0 24px 64px rgba(29,78,216,.12)" }}>
              <Image
                src="/saaphzone-bess-installation.png"
                alt="Saaphzone BESS installation at solar farm"
                width={640}
                height={440}
                style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
              />
              {/* Overlay badge */}
              <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem", background: "rgba(255,255,255,.92)", backdropFilter: "blur(12px)", borderRadius: "12px", padding: "0.75rem 1.25rem", display: "flex", alignItems: "center", gap: "0.5rem", boxShadow: "0 4px 20px rgba(0,0,0,.1)" }}>
                <CheckCircle size={18} color="#16a34a" />
                <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>IEC 62619 Certified</span>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "100px", padding: "0.3rem 0.8rem", marginBottom: "1rem" }}>
              <Battery size={13} color="#1d4ed8" />
              <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#1d4ed8", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>What is BESS?</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "1rem", lineHeight: 1.2 }}>
              Intelligent Energy Storage for the Modern Grid
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#475569", lineHeight: 1.75, marginBottom: "1rem" }}>
              A Battery Energy Storage System (BESS) is an advanced electrochemical device that stores electrical energy during periods of low demand or surplus renewable generation, and dispatches it precisely when and where it is needed.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#475569", lineHeight: 1.75, marginBottom: "1.75rem" }}>
              Saaphzone&apos;s BESS solutions integrate intelligent battery management, power conversion, and SCADA monitoring into a complete, turnkey package — from 50 kWh commercial systems to 100+ MWh grid-scale installations.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["Turnkey design, supply, installation & commissioning", "In-house BMS software and SCADA platform", "Certified to IEC 62619, UL 9540, and IS 16046"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                  <CheckCircle size={18} color="#1d4ed8" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontSize: "0.9375rem", color: "#374151", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <style>{`.bess-two-col{grid-template-columns:1fr 1fr;}@media(max-width:768px){.bess-two-col{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── KEY FEATURES ── */}
      <section style={{ padding: "5rem 1.5rem", background: "#f8faff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Key Features</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 520, margin: "0 auto" }}>Engineering excellence in every component of our BESS solutions.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
            {keyFeatures.map((f, i) => (
              <motion.div key={i} variants={fadeInUp} style={{ background: "white", border: "1.5px solid #e2e8f0", borderRadius: "14px", padding: "1.75rem", transition: "all .25s ease" }} whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(29,78,216,.12)", borderColor: "#3b82f6" }}>
                <div style={{ width: 48, height: 48, borderRadius: "12px", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                  <f.icon size={22} color="#1d4ed8" />
                </div>
                <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.5rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.65 }}>{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS — with monitoring dashboard image ── */}
      <section style={{ padding: "6rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>How It Works</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 540, margin: "0 auto" }}>From site assessment to live monitoring — our end-to-end BESS delivery process.</p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="bess-two-col">
            {/* Steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {howItWorksSteps.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: "12px", background: "linear-gradient(135deg,#1d4ed8,#3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(29,78,216,.25)" }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "white", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{s.step}</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.35rem" }}>{s.title}</h3>
                    <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.65 }}>{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Dashboard image */}
            <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,.15)" }}>
                <Image
                  src="/saaphzone-bms-dashboard.png"
                  alt="Saaphzone BESS SCADA monitoring dashboard"
                  width={600}
                  height={420}
                  style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(15,23,42,.5) 0%,transparent 50%)" }} />
                <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem", right: "1.25rem" }}>
                  <p style={{ color: "white", fontWeight: 700, fontSize: "0.95rem", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.25rem" }}>Saaphzone SCADA Platform</p>
                  <p style={{ color: "rgba(255,255,255,.75)", fontSize: "0.8rem" }}>Real-time energy monitoring, diagnostics & alerts</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TECH SPECS ── */}
      <section style={{ padding: "5rem 1.5rem", background: "#f8faff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Technical Specifications</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b" }}>Standard specifications for our BESS products — customised per project requirements.</p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="bess-two-col">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ border: "1.5px solid #e2e8f0", borderRadius: "16px", overflow: "hidden", background: "white" }}>
              {techSpecs.map((row, i) => (
                <div key={i} style={{ display: "flex", borderBottom: i < techSpecs.length - 1 ? "1px solid #f1f5f9" : "none", background: i % 2 === 0 ? "white" : "#f8faff" }}>
                  <div style={{ padding: "1rem 1.25rem", width: "50%", fontWeight: 600, color: "#374151", fontSize: "0.875rem", fontFamily: "'Plus Jakarta Sans',sans-serif", borderRight: "1px solid #f1f5f9" }}>{row.param}</div>
                  <div style={{ padding: "1rem 1.25rem", flex: 1, color: "#1d4ed8", fontSize: "0.875rem", fontWeight: 600 }}>{row.value}</div>
                </div>
              ))}
            </motion.div>
            {/* Product image next to specs */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
              <div style={{ background: "linear-gradient(145deg,#eff6ff,#dbeafe)", borderRadius: "20px", padding: "2rem", width: "100%", display: "flex", justifyContent: "center" }}>
                <Image
                  src="/saaphzone-bess-unit.png"
                  alt="Saaphzone BESS unit"
                  width={260}
                  height={340}
                  style={{ width: "auto", height: "280px", objectFit: "contain", filter: "drop-shadow(0 16px 32px rgba(29,78,216,.18))" }}
                />
              </div>
              <div style={{ background: "white", border: "1.5px solid #e2e8f0", borderRadius: "14px", padding: "1.25rem 1.5rem", width: "100%", textAlign: "center" }}>
                <p style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>Standard Unit</p>
                <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>50 kWh — 100+ MWh</p>
                <p style={{ fontSize: "0.875rem", color: "#64748b", marginTop: "0.25rem" }}>Modular & scalable</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section style={{ padding: "5rem 1.5rem", background: "#1d4ed8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "white", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Use Cases & Applications</h2>
            <p style={{ fontSize: "1.0625rem", color: "#bfdbfe", maxWidth: 520, margin: "0 auto" }}>BESS delivers value across a wide range of energy challenges.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.25rem" }}>
            {useCases.map((uc, i) => (
              <motion.div key={i} variants={fadeInUp} style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.15)", borderRadius: "14px", padding: "1.5rem", transition: "all .25s ease" }} whileHover={{ background: "rgba(255,255,255,.17)" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.875rem" }}>{uc.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "white", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.5rem" }}>{uc.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#bfdbfe", lineHeight: 1.65 }}>{uc.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "5rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b" }}>Common queries about our BESS solutions.</p>
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} style={{ border: "1.5px solid", borderColor: openFaq === i ? "#3b82f6" : "#e2e8f0", borderRadius: "12px", overflow: "hidden", transition: "border-color .2s" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem", background: openFaq === i ? "#eff6ff" : "white", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem", transition: "background .2s" }}>
                  <span style={{ fontSize: "0.9875rem", fontWeight: 600, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} color="#1d4ed8" /> : <ChevronDown size={18} color="#64748b" />}
                </button>
                {openFaq === i && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} style={{ padding: "0 1.5rem 1.25rem", background: "#eff6ff" }}>
                    <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.7 }}>{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "0", background: "linear-gradient(135deg,#1e40af 0%,#1d4ed8 50%,#3b82f6 100%)", position: "relative", overflow: "hidden" }}>
        {/* Background hero installation image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/saaphzone-bess-hero.png"
            alt="Saaphzone BESS facility"
            fill
            style={{ objectFit: "cover", opacity: 0.18 }}
          />
        </div>
        <div style={{ position: "relative", zIndex: 1, padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", fontWeight: 800, color: "white", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "1rem" }}>Power Your Future with Intelligent Energy Storage</h2>
              <p style={{ fontSize: "1.0625rem", color: "#bfdbfe", marginBottom: "2rem", lineHeight: 1.7 }}>Let our energy storage experts design a BESS solution optimised for your load profile and renewable assets.</p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", background: "white", color: "#1d4ed8", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", transition: "all .25s ease" }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}>
                  Contact Us <ArrowRight size={18} />
                </Link>
                <Link href="/services/solar-wind" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", background: "transparent", color: "white", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", border: "1.5px solid rgba(255,255,255,.4)", transition: "all .25s ease" }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,.1)"; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}>
                  Solar & Wind Energy
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
