"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Technologies", href: "/technologies" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(5,10,20,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(0,212,255,0.1)"
          : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{
            width: "36px",
            height: "36px",
            position: "relative",
          }}>
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="10" r="2.5" fill="#00D4FF" opacity="0.9"/>
              <circle cx="8" cy="16" r="2" fill="#7B5CF0" opacity="0.9"/>
              <circle cx="28" cy="16" r="2" fill="#7B5CF0" opacity="0.9"/>
              <circle cx="12" cy="26" r="2" fill="#0EA5E9" opacity="0.8"/>
              <circle cx="24" cy="26" r="2" fill="#0EA5E9" opacity="0.8"/>
              <circle cx="18" cy="20" r="1.5" fill="#A78BFA" opacity="0.7"/>
              <line x1="18" y1="10" x2="8" y2="16" stroke="url(#g1)" strokeWidth="0.8" opacity="0.6"/>
              <line x1="18" y1="10" x2="28" y2="16" stroke="url(#g1)" strokeWidth="0.8" opacity="0.6"/>
              <line x1="8" y1="16" x2="18" y2="20" stroke="url(#g1)" strokeWidth="0.8" opacity="0.5"/>
              <line x1="28" y1="16" x2="18" y2="20" stroke="url(#g1)" strokeWidth="0.8" opacity="0.5"/>
              <line x1="18" y1="20" x2="12" y2="26" stroke="url(#g1)" strokeWidth="0.8" opacity="0.5"/>
              <line x1="18" y1="20" x2="24" y2="26" stroke="url(#g1)" strokeWidth="0.8" opacity="0.5"/>
              <line x1="12" y1="26" x2="30" y2="30" stroke="url(#g2)" strokeWidth="1" opacity="0.8"/>
              <polygon points="30,30 27,27 27,33" fill="#00D4FF" opacity="0.9"/>
              <defs>
                <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00D4FF"/>
                  <stop offset="100%" stopColor="#7B5CF0"/>
                </linearGradient>
                <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7B5CF0"/>
                  <stop offset="100%" stopColor="#00D4FF"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <div style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "0.08em",
              color: "#E2E8F0",
              lineHeight: 1.1,
            }}>
              NEURAL VECTOR
            </div>
            <div style={{
              fontFamily: "var(--font-ibm-mono), monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              color: "rgba(0,212,255,0.7)",
              lineHeight: 1,
            }}>
              SYSTEMS
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(226,232,240,0.6)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(226,232,240,0.6)")}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ padding: "8px 20px", fontSize: "0.72rem" }}>
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#E2E8F0", display: "none" }}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: "rgba(5,10,20,0.98)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(0,212,255,0.1)",
          padding: "1.5rem 2rem",
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(226,232,240,0.7)",
                textDecoration: "none",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(0,212,255,0.06)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ marginTop: "1rem", justifyContent: "center" }}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
