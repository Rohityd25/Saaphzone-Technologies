"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Target, Lightbulb, Globe, Users, Star, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { CORE_VALUES, MILESTONES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Target, Lightbulb, Globe, Users, Star, Shield,
};

const leadership = [
  {
    name: "Mr. Rahul Sharma",
    designation: "Director & Founder",
    bio: "15+ years in clean technology, industrial pollution control, and sustainable energy. Founding visionary behind Saaphzone's mission-driven growth.",
    initials: "RS",
  },
  {
    name: "Ms. Priya Verma",
    designation: "Chief Technology Officer",
    bio: "PhD in Environmental Engineering. Leads R&D in emission control systems, BESS design, and IoT-based monitoring platforms.",
    initials: "PV",
  },
  {
    name: "Mr. Amit Joshi",
    designation: "Head of Projects",
    bio: "20 years of turnkey project execution across solar, waste management, and air pollution control. Delivered 200+ projects pan-India.",
    initials: "AJ",
  },
];

const certifications = [
  "ISO 9001:2015 — Quality Management System",
  "ISO 14001:2015 — Environmental Management",
  "MSME Registered Enterprise",
  "CPCB Approved Vendor",
  "Member — CII Green Business Centre",
  "BIS Registered Products",
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "70px" }}>
      {/* HERO */}
      <section style={{ background: "linear-gradient(145deg,#f8faff 0%,#eff6ff 60%,#dbeafe 100%)", padding: "5rem 1.5rem 4rem", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle,rgba(29,78,216,.07) 1px,transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(29,78,216,.08)", border: "1px solid rgba(29,78,216,.2)", borderRadius: "100px", padding: "0.375rem 0.875rem", marginBottom: "1.25rem" }}>
              <Globe size={14} color="#1d4ed8" />
              <span style={{ fontSize: "0.825rem", fontWeight: 600, color: "#1d4ed8", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>About Us</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: "-0.02em", maxWidth: 700, marginBottom: "1.25rem" }}>
              Driven by Purpose, Powered by Innovation
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#475569", lineHeight: 1.75, maxWidth: 620, marginBottom: "2rem" }}>
              Saaphzone Technologies is a leading Indian clean-tech company delivering advanced environmental and renewable energy solutions that make industries cleaner, greener, and more sustainable.
            </p>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", background: "#1d4ed8", color: "white", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: "0 4px 20px rgba(29,78,216,.3)", transition: "all .25s ease" }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#1e40af"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#1d4ed8"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}>
              Contact Us <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* COMPANY STORY + MISSION/VISION */}
      <section style={{ padding: "5rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="about-two-col">
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "1.25rem" }}>Our Story</h2>
            <p style={{ fontSize: "1.0625rem", color: "#475569", lineHeight: 1.8, marginBottom: "1rem" }}>
              Founded in 2018 in Noida, Uttar Pradesh, Saaphzone Technologies began with a singular vision: to make industrial India cleaner and more sustainable through cutting-edge environmental technology.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#475569", lineHeight: 1.8, marginBottom: "1rem" }}>
              What started as a pollution control company has grown into a full-spectrum clean-tech enterprise — with capabilities spanning solid waste management, air pollution mitigation, battery energy storage, and renewable energy.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#475569", lineHeight: 1.8 }}>
              Today, with 350+ projects completed across 40+ industries and 85 MW of renewable capacity installed, we are one of India&apos;s trusted names in environmental solutions.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ background: "linear-gradient(135deg,#eff6ff,#dbeafe)", border: "1.5px solid #bfdbfe", borderRadius: "16px", padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "10px", background: "#1d4ed8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Target size={20} color="white" />
                  </div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Our Mission</h3>
                </div>
                <p style={{ fontSize: "0.9875rem", color: "#475569", lineHeight: 1.75 }}>
                  To deliver advanced, reliable, and cost-effective environmental solutions that enable Indian industries to operate sustainably — reducing pollution, recovering resources, and generating clean energy.
                </p>
              </div>
              <div style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", border: "1.5px solid #bbf7d0", borderRadius: "16px", padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "10px", background: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Globe size={20} color="white" />
                  </div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Our Vision</h3>
                </div>
                <p style={{ fontSize: "0.9875rem", color: "#475569", lineHeight: 1.75 }}>
                  To be India&apos;s most trusted clean-tech partner — contributing to Net Zero goals by making sustainable practices the industrial standard, not the exception.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <style>{`.about-two-col{grid-template-columns:1fr 1fr;}@media(max-width:768px){.about-two-col{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* CORE VALUES */}
      <section style={{ padding: "5rem 1.5rem", background: "#f8faff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Our Core Values</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 520, margin: "0 auto" }}>The principles that guide every decision, design, and delivery at Saaphzone.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.5rem" }}>
            {CORE_VALUES.map((val, i) => {
              const Icon = iconMap[val.icon] || Target;
              return (
                <motion.div key={i} variants={fadeInUp} style={{ background: "white", border: "1.5px solid #e2e8f0", borderRadius: "14px", padding: "1.75rem", textAlign: "center", transition: "all .25s ease" }} whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(29,78,216,.12)", borderColor: "#3b82f6" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "14px", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                    <Icon size={24} color="#1d4ed8" />
                  </div>
                  <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.5rem" }}>{val.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.65 }}>{val.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* MILESTONES TIMELINE */}
      <section style={{ padding: "5rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Our Journey</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 480, margin: "0 auto" }}>Key milestones on the road to becoming India&apos;s trusted clean-tech partner.</p>
          </motion.div>
          <div style={{ position: "relative", paddingLeft: "2rem" }}>
            <div style={{ position: "absolute", left: "0.75rem", top: 0, bottom: 0, width: "2px", background: "linear-gradient(180deg,#dbeafe,#1d4ed8,#dbeafe)" }} />
            {MILESTONES.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} style={{ position: "relative", paddingBottom: "2.5rem", paddingLeft: "1.5rem" }}>
                <div style={{ position: "absolute", left: "-0.875rem", top: "0.25rem", width: 22, height: 22, borderRadius: "50%", background: "#1d4ed8", border: "3px solid white", boxShadow: "0 0 0 3px #dbeafe" }} />
                <span style={{ display: "inline-block", background: "#eff6ff", color: "#1d4ed8", fontSize: "0.8rem", fontWeight: 800, fontFamily: "'Plus Jakarta Sans',sans-serif", padding: "0.25rem 0.75rem", borderRadius: "100px", marginBottom: "0.5rem" }}>{m.year}</span>
                <p style={{ fontSize: "0.9875rem", color: "#374151", lineHeight: 1.7 }}>{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section style={{ padding: "5rem 1.5rem", background: "#f8faff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Leadership Team</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 480, margin: "0 auto" }}>Experienced professionals driving Saaphzone&apos;s mission forward.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
            {leadership.map((person, i) => (
              <motion.div key={i} variants={fadeInUp} style={{ background: "white", border: "1.5px solid #e2e8f0", borderRadius: "16px", padding: "2rem", textAlign: "center", transition: "all .25s ease" }} whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(29,78,216,.1)", borderColor: "#3b82f6" }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg,#1d4ed8,#3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", color: "white", fontSize: "1.375rem", fontWeight: 800, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                  {person.initials}
                </div>
                <h3 style={{ fontSize: "1.0625rem", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.25rem" }}>{person.name}</h3>
                <p style={{ fontSize: "0.8375rem", fontWeight: 600, color: "#1d4ed8", marginBottom: "0.875rem" }}>{person.designation}</p>
                <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.7 }}>{person.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section style={{ padding: "5rem 1.5rem", background: "#1d4ed8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "white", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Certifications & Recognitions</h2>
            <p style={{ fontSize: "1.0625rem", color: "#bfdbfe", maxWidth: 480, margin: "0 auto" }}>Our quality and compliance credentials — earned through rigorous audits and field performance.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1rem" }}>
            {certifications.map((cert, i) => (
              <motion.div key={i} variants={fadeInUp} style={{ display: "flex", alignItems: "center", gap: "0.875rem", padding: "1.125rem 1.25rem", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.15)", borderRadius: "10px" }}>
                <CheckCircle2 size={20} color="#93c5fd" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: "0.9rem", color: "white", fontWeight: 500 }}>{cert}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "1rem" }}>Partner with Saaphzone Technologies</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b", marginBottom: "2rem", lineHeight: 1.7 }}>Let&apos;s discuss your environmental or energy challenge and build a solution together.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", background: "#1d4ed8", color: "white", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: "0 4px 20px rgba(29,78,216,.3)", transition: "all .25s ease" }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#1e40af"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#1d4ed8"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}>
                Get in Touch <ArrowRight size={18} />
              </Link>
              <Link href="/services/solid-waste" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", background: "white", color: "#1d4ed8", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", border: "1.5px solid #1d4ed8", transition: "all .25s ease" }}>
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

