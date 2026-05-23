"use client";

import Link from "next/link";
import Image from "next/image";

const LOGO = {
  src: "/images/branding/logo.png",
  width: 1402,
  height: 699,
} as const;

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Technologies", href: "/technologies" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "ML & Predictive Modeling", href: "/services#ml" },
    { label: "Optimization & OR", href: "/services#optimization" },
    { label: "Intelligent Automation", href: "/services#automation" },
    { label: "Data Engineering", href: "/services#data" },
    { label: "Computer Vision", href: "/services#vision" },
    { label: "MLOps", href: "/services#mlops" },
  ],
  Solutions: [
    { label: "Life Sciences", href: "/solutions#life-sciences" },
    { label: "Logistics & Supply Chain", href: "/solutions#logistics" },
    { label: "Process Manufacturing", href: "/solutions#manufacturing" },
    { label: "Enterprise Operations", href: "/solutions#enterprise" },
  ],
};

export default function Footer() {
  return (
    <footer style={{
      background: "rgba(5,10,20,0.95)",
      borderTop: "1px solid rgba(0,212,255,0.08)",
      padding: "4rem 2rem 2rem",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr repeat(3, 1fr)",
          gap: "3rem",
          marginBottom: "3rem",
        }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: "1rem" }}>
              <Image
                src={LOGO.src}
                alt="Neural Vector Systems"
                width={LOGO.width}
                height={LOGO.height}
                style={{
                  height: "44px",
                  width: "auto",
                  maxWidth: "260px",
                }}
              />
            </Link>
            <p style={{
              color: "rgba(226,232,240,0.45)",
              fontSize: "0.85rem",
              lineHeight: 1.7,
              maxWidth: "280px",
              marginBottom: "1.5rem",
            }}>
              Enterprise-grade AI, optimization, and data systems engineering for complex operational challenges.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              {["LinkedIn", "GitHub"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(0,212,255,0.6)",
                    textDecoration: "none",
                    padding: "6px 12px",
                    border: "1px solid rgba(0,212,255,0.2)",
                    borderRadius: "2px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)";
                    e.currentTarget.style.color = "#00D4FF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,212,255,0.2)";
                    e.currentTarget.style.color = "rgba(0,212,255,0.6)";
                  }}
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <div style={{
                fontFamily: "var(--font-ibm-mono), monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#00D4FF",
                marginBottom: "1.25rem",
                opacity: 0.8,
              }}>
                {group}
              </div>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: "0.82rem",
                    color: "rgba(226,232,240,0.45)",
                    textDecoration: "none",
                    marginBottom: "0.6rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(226,232,240,0.85)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(226,232,240,0.45)")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="glow-line" style={{ marginBottom: "1.5rem" }} />

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <p style={{
            fontFamily: "var(--font-ibm-mono), monospace",
            fontSize: "0.68rem",
            color: "rgba(226,232,240,0.25)",
            letterSpacing: "0.05em",
          }}>
            © {new Date().getFullYear()} Neural Vector Systems LLC. All rights reserved.
          </p>
          <p style={{
            fontFamily: "var(--font-ibm-mono), monospace",
            fontSize: "0.68rem",
            color: "rgba(0,212,255,0.3)",
            letterSpacing: "0.08em",
          }}>
            ENGINEERED FOR PRECISION — DEPLOYED FOR SCALE
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
