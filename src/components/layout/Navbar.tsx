"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Solid Waste Management", href: "/services/solid-waste" },
      { label: "Air Pollution Mitigation", href: "/services/air-pollution" },
      { label: "BESS", href: "/services/bess" },
      { label: "Solar & Wind Energy", href: "/services/solar-wind" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      role="banner"
      style={{
        position: "fixed",
        top: 3,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(255,255,255,0.97)"
          : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.07)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Saaphzone Technologies Home"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Image
            src="/saaphzone-logo-icon.png"
            alt="Saaphzone Technologies"
            width={64}
            height={64}
            style={{ objectFit: "contain", background: "none" }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
          className="hidden lg:flex"
        >
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                style={{ position: "relative" }}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "0.5rem 0.875rem",
                    borderRadius: "8px",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "#1e293b",
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                  <ChevronDown
                    size={15}
                    style={{
                      transition: "transform 0.2s",
                      transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {servicesOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      minWidth: 230,
                      background: "white",
                      borderRadius: "12px",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                      border: "1px solid #e2e8f0",
                      padding: "0.5rem",
                      animation: "fadeDown 0.18s ease",
                    }}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{
                          display: "block",
                          padding: "0.625rem 0.875rem",
                          borderRadius: "8px",
                          textDecoration: "none",
                          fontSize: "0.9rem",
                          fontWeight: 500,
                          color: "#374151",
                          transition: "background 0.15s, color 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.background = "#eff6ff";
                          (e.currentTarget as HTMLAnchorElement).style.color = "#1d4ed8";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                          (e.currentTarget as HTMLAnchorElement).style.color = "#374151";
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "0.5rem 0.875rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: pathname === link.href ? "#1d4ed8" : "#1e293b",
                  background: pathname === link.href ? "#eff6ff" : "transparent",
                  transition: "color 0.2s, background 0.2s",
                }}
              >
                {link.label}
              </Link>
            )
          )}


        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            borderRadius: "8px",
            color: "#1e293b",
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            background: "white",
            borderTop: "1px solid #e2e8f0",
            padding: "1rem 1.5rem 1.5rem",
            animation: "slideDown 0.2s ease",
          }}
        >
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.75rem 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#1e293b",
                    borderBottom: "1px solid #f1f5f9",
                  }}
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    style={{
                      transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>
                {servicesOpen && (
                  <div style={{ paddingLeft: "1rem" }}>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{
                          display: "block",
                          padding: "0.625rem 0",
                          textDecoration: "none",
                          fontSize: "0.9375rem",
                          fontWeight: 500,
                          color: "#3b82f6",
                          borderBottom: "1px solid #f8fafc",
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "0.75rem 0",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: pathname === link.href ? "#1d4ed8" : "#1e293b",
                  borderBottom: "1px solid #f1f5f9",
                }}
              >
                {link.label}
              </Link>
            )
          )}

        </div>
      )}

      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hidden { display: none; }
        @media (min-width: 1024px) {
          .hidden.lg\\:flex { display: flex !important; }
          .lg\\:hidden { display: none !important; }
        }
      `}</style>
    </header>
  );
}
