"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

type FormData = {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const INQUIRY_TYPES = [
  "Solid Waste Management",
  "Air Pollution Mitigation",
  "BESS (Battery Energy Storage)",
  "Solar & Wind Energy",
  "General Inquiry",
  "Partnership / Collaboration",
  "Careers",
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (data.phone && !/^[+\d\s\-()]{7,15}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!data.inquiryType) errors.inquiryType = "Please select an inquiry type.";
  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }
  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", inquiryType: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("sending");
    // Simulate API call
    await new Promise(r => setTimeout(r, 1800));
    setStatus("success");
    setForm({ name: "", email: "", phone: "", inquiryType: "", message: "" });
  };

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    width: "100%",
    padding: "0.75rem 1rem",
    border: `1.5px solid ${hasError ? "#ef4444" : "#e2e8f0"}`,
    borderRadius: "10px",
    fontSize: "0.9375rem",
    color: "#1e293b",
    fontFamily: "'Inter', sans-serif",
    outline: "none",
    transition: "border-color .2s, box-shadow .2s",
    background: "white",
  });

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: 600,
    color: "#374151",
    marginBottom: "0.375rem",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  };

  return (
    <div style={{ paddingTop: "70px" }}>
      {/* HERO */}
      <section style={{ background: "linear-gradient(145deg,#f8faff 0%,#eff6ff 60%,#dbeafe 100%)", padding: "5rem 1.5rem 4rem", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle,rgba(29,78,216,.07) 1px,transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(29,78,216,.08)", border: "1px solid rgba(29,78,216,.2)", borderRadius: "100px", padding: "0.375rem 0.875rem", marginBottom: "1.25rem" }}>
              <Mail size={14} color="#1d4ed8" />
              <span style={{ fontSize: "0.825rem", fontWeight: 600, color: "#1d4ed8", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Contact Us</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: "-0.02em", maxWidth: 660, marginBottom: "1.25rem" }}>
              Let&apos;s Build a Greener Future Together
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#475569", lineHeight: 1.75, maxWidth: 580 }}>
              Have a project in mind? Our experts are ready to help with a free consultation and customised solution for your environmental or energy challenge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section style={{ padding: "5rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "4rem", alignItems: "start" }} className="contact-grid">

          {/* LEFT — Company Info */}
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.625rem" }}>Get in Touch</h2>
            <p style={{ fontSize: "0.9875rem", color: "#64748b", lineHeight: 1.7, marginBottom: "2rem" }}>
              We typically respond within 24 business hours. You can also reach us directly via phone or email.
            </p>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
              {[
                { Icon: MapPin, label: "Address", value: "B-42, Industrial Area, Sector 62, Noida, Uttar Pradesh – 201309, India" },
                { Icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { Icon: Mail, label: "Email", value: "info@saaphzone.com" },
                { Icon: Clock, label: "Business Hours", value: "Mon – Sat: 9:00 AM – 6:00 PM IST" },
              ].map(({ Icon, label, value }) => (
                <motion.div key={label} variants={fadeInUp} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "11px", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={20} color="#1d4ed8" />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#64748b", marginBottom: "0.1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</p>
                    <p style={{ fontSize: "0.9375rem", color: "#1e293b", lineHeight: 1.55, fontWeight: 500 }}>{value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Map Placeholder */}
            <div style={{ borderRadius: "16px", overflow: "hidden", border: "1.5px solid #e2e8f0", height: 220, background: "linear-gradient(135deg,#eff6ff,#dbeafe)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "0.75rem" }}>
              <MapPin size={36} color="#1d4ed8" />
              <p style={{ fontSize: "0.9rem", color: "#64748b", fontWeight: 500, textAlign: "center" }}>
                Saaphzone Technologies<br />
                <span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>Sector 62, Noida, UP – 201309</span>
              </p>
            </div>
          </motion.div>

          {/* RIGHT — Contact Form */}
          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ background: "white", border: "1.5px solid #e2e8f0", borderRadius: "20px", padding: "2.5rem", boxShadow: "0 8px 40px rgba(29,78,216,.06)" }}>
              <h2 style={{ fontSize: "1.375rem", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.5rem" }}>Send Us a Message</h2>
              <p style={{ fontSize: "0.9rem", color: "#64748b", marginBottom: "2rem" }}>Fill in your details and our team will get back to you within 24 hours.</p>

              {status === "success" ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "3rem 1rem" }}>
                  <CheckCircle2 size={56} color="#16a34a" style={{ margin: "0 auto 1rem" }} />
                  <h3 style={{ fontSize: "1.375rem", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Message Sent!</h3>
                  <p style={{ fontSize: "0.9875rem", color: "#64748b", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    Thank you for reaching out. One of our experts will contact you within 24 business hours.
                  </p>
                  <button onClick={() => setStatus("idle")} style={{ padding: "0.75rem 1.75rem", background: "#1d4ed8", color: "white", border: "none", borderRadius: "10px", cursor: "pointer", fontWeight: 700, fontSize: "0.9375rem", fontFamily: "'Plus Jakarta Sans',sans-serif", transition: "all .2s ease" }} onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#1e40af"; }} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#1d4ed8"; }}>
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {/* Name + Phone */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-two-col">
                    <div>
                      <label htmlFor="contact-name" style={labelStyle}>Full Name <span style={{ color: "#ef4444" }}>*</span></label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        style={inputStyle(!!errors.name)}
                        onFocus={e => { e.currentTarget.style.borderColor = "#3b82f6"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(59,130,246,.1)"; }}
                        onBlur={e => { e.currentTarget.style.borderColor = errors.name ? "#ef4444" : "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}
                      />
                      {errors.name && <p style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "0.25rem", display: "flex", alignItems: "center", gap: "0.25rem" }}><AlertCircle size={12} />{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-phone" style={labelStyle}>Phone Number</label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        style={inputStyle(!!errors.phone)}
                        onFocus={e => { e.currentTarget.style.borderColor = "#3b82f6"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(59,130,246,.1)"; }}
                        onBlur={e => { e.currentTarget.style.borderColor = errors.phone ? "#ef4444" : "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}
                      />
                      {errors.phone && <p style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "0.25rem", display: "flex", alignItems: "center", gap: "0.25rem" }}><AlertCircle size={12} />{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" style={labelStyle}>Email Address <span style={{ color: "#ef4444" }}>*</span></label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      style={inputStyle(!!errors.email)}
                      onFocus={e => { e.currentTarget.style.borderColor = "#3b82f6"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(59,130,246,.1)"; }}
                      onBlur={e => { e.currentTarget.style.borderColor = errors.email ? "#ef4444" : "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}
                    />
                    {errors.email && <p style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "0.25rem", display: "flex", alignItems: "center", gap: "0.25rem" }}><AlertCircle size={12} />{errors.email}</p>}
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label htmlFor="contact-inquiry" style={labelStyle}>Inquiry Type <span style={{ color: "#ef4444" }}>*</span></label>
                    <select
                      id="contact-inquiry"
                      name="inquiryType"
                      value={form.inquiryType}
                      onChange={handleChange}
                      style={{ ...inputStyle(!!errors.inquiryType), cursor: "pointer", color: form.inquiryType ? "#1e293b" : "#94a3b8" }}
                      onFocus={e => { e.currentTarget.style.borderColor = "#3b82f6"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(59,130,246,.1)"; }}
                      onBlur={e => { e.currentTarget.style.borderColor = errors.inquiryType ? "#ef4444" : "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}
                    >
                      <option value="" disabled>Select an inquiry type</option>
                      {INQUIRY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.inquiryType && <p style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "0.25rem", display: "flex", alignItems: "center", gap: "0.25rem" }}><AlertCircle size={12} />{errors.inquiryType}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" style={labelStyle}>Message <span style={{ color: "#ef4444" }}>*</span></label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your project or requirement in detail..."
                      rows={5}
                      style={{ ...inputStyle(!!errors.message), resize: "vertical", minHeight: 120 }}
                      onFocus={e => { e.currentTarget.style.borderColor = "#3b82f6"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(59,130,246,.1)"; }}
                      onBlur={e => { e.currentTarget.style.borderColor = errors.message ? "#ef4444" : "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}
                    />
                    {errors.message && <p style={{ fontSize: "0.8rem", color: "#ef4444", marginTop: "0.25rem", display: "flex", alignItems: "center", gap: "0.25rem" }}><AlertCircle size={12} />{errors.message}</p>}
                  </div>

                  {status === "error" && (
                    <div style={{ padding: "0.875rem 1rem", background: "#fef2f2", border: "1.5px solid #fecaca", borderRadius: "10px", display: "flex", alignItems: "center", gap: "0.625rem" }}>
                      <AlertCircle size={18} color="#ef4444" />
                      <span style={{ fontSize: "0.9rem", color: "#dc2626" }}>Something went wrong. Please try again or contact us directly.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.625rem", padding: "0.9375rem 2rem", background: status === "sending" ? "#93c5fd" : "#1d4ed8", color: "white", border: "none", borderRadius: "10px", cursor: status === "sending" ? "not-allowed" : "pointer", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", transition: "all .25s ease", boxShadow: "0 4px 20px rgba(29,78,216,.3)" }}
                    onMouseEnter={e => { if (status !== "sending") (e.currentTarget as HTMLButtonElement).style.background = "#1e40af"; }}
                    onMouseLeave={e => { if (status !== "sending") (e.currentTarget as HTMLButtonElement).style.background = "#1d4ed8"; }}
                  >
                    {status === "sending" ? (
                      <>
                        <span style={{ width: 18, height: 18, border: "2px solid rgba(255,255,255,.4)", borderTopColor: "white", borderRadius: "50%", animation: "spin .8s linear infinite", display: "inline-block" }} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
        <style>{`
          .contact-grid{grid-template-columns:1fr 1.6fr;}
          @media(max-width:900px){.contact-grid{grid-template-columns:1fr!important;}}
          .form-two-col{grid-template-columns:1fr 1fr;}
          @media(max-width:500px){.form-two-col{grid-template-columns:1fr!important;}}
          @keyframes spin{to{transform:rotate(360deg);}}
        `}</style>
      </section>
    </div>
  );
}
