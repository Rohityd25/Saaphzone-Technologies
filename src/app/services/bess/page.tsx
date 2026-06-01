"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Battery, ChevronDown, ChevronUp, ArrowRight, Zap, ShieldCheck, BarChart2, Clock, Settings, Globe } from "lucide-react";
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

export default function BESSPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* HERO */}
      <section style={{ background: "linear-gradient(145deg,#f8faff 0%,#eff6ff 60%,#dbeafe 100%)", padding: "5rem 1.5rem 4rem", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle,rgba(29,78,216,.07) 1px,transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(29,78,216,.08)", border: "1px solid rgba(29,78,216,.2)", borderRadius: "100px", padding: "0.375rem 0.875rem", marginBottom: "1.25rem" }}>
              <Battery size={14} color="#1d4ed8" />
              <span style={{ fontSize: "0.825rem", fontWeight: 600, color: "#1d4ed8", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Our Services</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: "-0.02em", maxWidth: 700, marginBottom: "1.25rem" }}>
              Battery Energy Storage System (BESS)
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#475569", lineHeight: 1.75, maxWidth: 640, marginBottom: "2rem" }}>
              Grid-scale and commercial BESS solutions for reliable, intelligent energy storage. Maximise renewable utilisation, reduce demand charges, and ensure uninterrupted power supply.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", background: "#1d4ed8", color: "white", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: "0 4px 20px rgba(29,78,216,.3)", transition: "all .25s ease" }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#1e40af"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#1d4ed8"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}>
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", background: "white", color: "#1d4ed8", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", border: "1.5px solid #1d4ed8", transition: "all .25s ease" }}>
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT IS BESS */}
      <section style={{ padding: "5rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="bess-two-col">
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "1rem" }}>What is BESS?</h2>
            <p style={{ fontSize: "1.0625rem", color: "#475569", lineHeight: 1.75, marginBottom: "1rem" }}>
              A Battery Energy Storage System (BESS) is an advanced electrochemical device that stores electrical energy during periods of low demand or surplus renewable generation, and dispatches it precisely when and where it is needed.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#475569", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Saaphzone&apos;s BESS solutions integrate intelligent battery management, power conversion, and SCADA monitoring into a complete, turnkey package — from 50 kWh commercial systems to 100+ MWh grid-scale installations.
            </p>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", padding: "1.5rem", background: "#f8faff", borderRadius: "12px", border: "1.5px solid #e2e8f0" }}>
              {[{ num: "93%+", label: "Round-Trip Efficiency" }, { num: "6,000+", label: "Cycle Life" }, { num: "< 20ms", label: "Response Time" }].map(({ num, label }) => (
                <div key={label}>
                  <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1d4ed8", fontFamily: "'Plus Jakarta Sans',sans-serif", lineHeight: 1, marginBottom: "0.25rem" }}>{num}</p>
                  <p style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 500 }}>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ background: "linear-gradient(145deg,#eff6ff,#dbeafe)", border: "1.5px solid #bfdbfe", borderRadius: "20px", padding: "2rem", textAlign: "center" }}>
              <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>🔋</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {["Solar PV", "Wind Energy", "Grid Power", "Load Demand"].map((src, i) => (
                  <div key={i} style={{ background: "white", border: "1.5px solid #dbeafe", borderRadius: "10px", padding: "0.875rem", fontSize: "0.875rem", fontWeight: 600, color: "#1d4ed8", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                    {src}
                  </div>
                ))}
              </div>
              <div style={{ margin: "1rem 0", fontSize: "1.5rem" }}>⬇️</div>
              <div style={{ background: "#1d4ed8", color: "white", borderRadius: "12px", padding: "1rem", fontWeight: 700, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                BESS (Battery Energy Storage)
              </div>
              <div style={{ margin: "1rem 0", fontSize: "1.5rem" }}>⬇️</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {["Industry", "Commercial", "Grid", "Backup"].map((dest, i) => (
                  <div key={i} style={{ background: "white", border: "1.5px solid #dbeafe", borderRadius: "10px", padding: "0.875rem", fontSize: "0.875rem", fontWeight: 600, color: "#374151" }}>
                    {dest}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <style>{`.bess-two-col{grid-template-columns:1fr 1fr;}@media(max-width:768px){.bess-two-col{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* KEY FEATURES */}
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

      {/* TECH SPECS */}
      <section style={{ padding: "5rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Technical Specifications</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b" }}>Standard specifications for our BESS products — customised per project requirements.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ border: "1.5px solid #e2e8f0", borderRadius: "16px", overflow: "hidden" }}>
            {techSpecs.map((row, i) => (
              <div key={i} style={{ display: "flex", borderBottom: i < techSpecs.length - 1 ? "1px solid #f1f5f9" : "none", background: i % 2 === 0 ? "white" : "#f8faff" }}>
                <div style={{ padding: "1rem 1.5rem", width: "45%", fontWeight: 600, color: "#374151", fontSize: "0.9rem", fontFamily: "'Plus Jakarta Sans',sans-serif", borderRight: "1px solid #f1f5f9" }}>
                  {row.param}
                </div>
                <div style={{ padding: "1rem 1.5rem", flex: 1, color: "#1d4ed8", fontSize: "0.9rem", fontWeight: 600 }}>
                  {row.value}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* USE CASES */}
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

      {/* FAQ */}
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

      {/* CTA */}
      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg,#1e40af 0%,#1d4ed8 50%,#3b82f6 100%)" }}>
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
      </section>
    </div>
  );
}

