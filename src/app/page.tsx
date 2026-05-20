"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

// Inline SVG social icons (compatible with all lucide-react versions)
const LinkedInIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const TwitterIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16H20L8.267 4z"/><path d="M4 20l6.768-6.768M15.232 9.768L20 4"/></svg>;
const FacebookIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const YoutubeIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>;

const LAUNCH_DATE = new Date("2025-08-01T00:00:00");

function getTimeLeft() {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.25rem",
        minWidth: 72,
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "14px",
          padding: "1rem 1.25rem",
          fontSize: "2.25rem",
          fontWeight: 800,
          color: "white",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          lineHeight: 1,
          minWidth: 72,
          textAlign: "center",
          backdropFilter: "blur(8px)",
        }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <span
        style={{
          fontSize: "0.7rem",
          color: "rgba(255,255,255,0.55)",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function ComingSoonPage() {
  const [time, setTime] = useState(getTimeLeft());
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #020817 0%, #0f172a 40%, #1e1b4b 70%, #0c1445 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.5rem",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Animated background blobs */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "60vw", height: "60vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(29,78,216,0.25) 0%, transparent 70%)", animation: "pulse 8s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)", animation: "pulse 10s ease-in-out infinite reverse" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "80vw", height: "80vw", backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 700, width: "100%", textAlign: "center" }}>

        {/* Logo */}
        <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "center" }}>
          <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "24px", padding: "1rem 2rem", backdropFilter: "blur(12px)", display: "inline-flex", alignItems: "center", gap: "1rem" }}>
            <Image
              src="/Saaphzone logo.png"
              alt="Saaphzone Technologies"
              width={80}
              height={80}
              style={{ objectFit: "contain" }}
              priority
            />
            <span style={{ color: "white", fontWeight: 800, fontSize: "1.6rem", fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.02em" }}>
              Saaphzone Technologies
            </span>
          </div>
        </div>

        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(29,78,216,0.25)", border: "1px solid rgba(99,130,246,0.4)", borderRadius: "100px", padding: "0.375rem 1rem", marginBottom: "1.5rem" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3b82f6", display: "inline-block", animation: "blink 1.5s ease-in-out infinite" }} />
          <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#93c5fd", letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Website Under Construction
          </span>
        </div>

        {/* Headline */}
        <h1 style={{ fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 900, color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem", background: "linear-gradient(90deg, #60a5fa, #818cf8, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Coming Soon
        </h1>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: 540, margin: "0 auto 2.5rem" }}>
          We&apos;re building something great — advanced environmental solutions for a cleaner tomorrow. Our full website will be live soon.
        </p>

        {/* Countdown */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
          <CountdownBox value={time.days} label="Days" />
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "2rem", fontWeight: 300, alignSelf: "flex-start", paddingTop: "0.875rem" }}>:</div>
          <CountdownBox value={time.hours} label="Hours" />
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "2rem", fontWeight: 300, alignSelf: "flex-start", paddingTop: "0.875rem" }}>:</div>
          <CountdownBox value={time.minutes} label="Minutes" />
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "2rem", fontWeight: 300, alignSelf: "flex-start", paddingTop: "0.875rem" }}>:</div>
          <CountdownBox value={time.seconds} label="Seconds" />
        </div>

        {/* Notify form */}
        {!subscribed ? (
          <form
            onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}
            style={{ display: "flex", gap: "0.625rem", maxWidth: 460, margin: "0 auto 3rem", flexWrap: "wrap", justifyContent: "center" }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email to be notified"
              required
              style={{ flex: 1, minWidth: 220, padding: "0.75rem 1.125rem", borderRadius: "10px", border: "1.5px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.07)", color: "white", fontSize: "0.9375rem", outline: "none", fontFamily: "'Inter', sans-serif", backdropFilter: "blur(8px)" }}
            />
            <button
              type="submit"
              style={{ padding: "0.75rem 1.375rem", background: "linear-gradient(135deg, #1d4ed8, #4f46e5)", color: "white", border: "none", borderRadius: "10px", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif", whiteSpace: "nowrap" }}
            >
              Notify Me
            </button>
          </form>
        ) : (
          <div style={{ marginBottom: "3rem", padding: "0.75rem 1.5rem", background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: "12px", display: "inline-flex", gap: "0.5rem", alignItems: "center" }}>
            <span style={{ color: "#4ade80", fontSize: "1.1rem" }}>✓</span>
            <span style={{ color: "#86efac", fontSize: "0.9rem", fontWeight: 600 }}>Thanks! We&apos;ll notify you when we launch.</span>
          </div>
        )}

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: "2.5rem" }} />

        {/* Director contact card */}
        <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "20px", padding: "2rem", backdropFilter: "blur(16px)", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            For Inquiries, Contact Directly
          </p>
          <h2 style={{ fontSize: "1.375rem", fontWeight: 800, color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: "0.25rem" }}>
            Dr. VIVEK PRAKASH PANKAJ
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
            Director, Saaphzone Technologies
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="tel:+919882810053"
              id="cs-director-phone"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "white", color: "#1d4ed8", padding: "0.625rem 1.25rem", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem", fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(255,255,255,0.2)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none"; }}
            >
              <Phone size={16} /> +91 9882810053
            </a>
            <a
              href="mailto:director@saaphzone.com"
              id="cs-director-email"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.1)", color: "white", padding: "0.625rem 1.25rem", borderRadius: "10px", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem", border: "1px solid rgba(255,255,255,0.2)", transition: "background 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.18)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)"; }}
            >
              <Mail size={16} /> director@saaphzone.com
            </a>
          </div>

          <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "flex-start", gap: "0.5rem", justifyContent: "center", color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>
            <MapPin size={14} style={{ marginTop: 2, flexShrink: 0, color: "#60a5fa" }} />
            <span>Saaphzone Technologies, India</span>
          </div>
        </div>

        {/* Social links */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginBottom: "2.5rem" }}>
          {[
            { Icon: LinkedInIcon, label: "LinkedIn", href: "#" },
            { Icon: TwitterIcon, label: "Twitter", href: "#" },
            { Icon: FacebookIcon, label: "Facebook", href: "#" },
            { Icon: YoutubeIcon, label: "YouTube", href: "#" },
          ].map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              style={{ width: 40, height: 40, borderRadius: "10px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "background 0.2s, color 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#1d4ed8"; (e.currentTarget as HTMLAnchorElement).style.color = "white"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"; }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.25)" }}>
          © {new Date().getFullYear()} Saaphzone Technologies. All rights reserved.
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap');
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        input::placeholder { color: rgba(255,255,255,0.3); }
        input:focus { border-color: rgba(99,130,246,0.6) !important; box-shadow: 0 0 0 3px rgba(99,130,246,0.15); }
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>
    </div>
  );
}
