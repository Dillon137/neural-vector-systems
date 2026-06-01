import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div style={{
      background: "var(--c-obsidian)",
      minHeight: "100vh",
      paddingTop: "72px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "6rem 2rem 4rem",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(0,212,255,0.1) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(123,92,240,0.08) 0%, transparent 50%)",
        pointerEvents: "none",
      }} />
      <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }} />
      <div className="glow-line" style={{ position: "absolute", top: "72px", left: 0, right: 0 }} />

      <div style={{ textAlign: "center", position: "relative", zIndex: 1, maxWidth: "520px" }}>
        <span className="section-label" style={{ display: "block", marginBottom: "1.25rem" }}>
          Error 404
        </span>
        <div style={{
          fontFamily: "var(--font-ibm-mono), monospace",
          fontSize: "clamp(4rem, 14vw, 8rem)",
          fontWeight: 500,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          marginBottom: "1rem",
        }}>
          <span className="gradient-text">404</span>
        </div>
        <h1 style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1.35rem, 4vw, 2rem)",
          color: "#E2E8F0",
          marginBottom: "0.75rem",
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
        }}>
          Page Not Found
        </h1>
        <p style={{
          color: "rgba(226,232,240,0.45)",
          fontSize: "0.95rem",
          lineHeight: 1.75,
          margin: "0 auto 2.25rem",
        }}>
          This URL doesn&apos;t match any route in our deployment. The page may have moved, or the link may be outdated.
        </p>
        <div style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}>
          <Link href="/" className="btn-primary">
            <Home size={16} /> Return Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
