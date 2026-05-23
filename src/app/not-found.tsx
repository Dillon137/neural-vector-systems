import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div style={{
      background: "var(--c-obsidian)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,212,255,0.06) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />
      <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />

      <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{
          fontFamily: "var(--font-ibm-mono), monospace",
          fontSize: "clamp(4rem, 12vw, 9rem)",
          fontWeight: 500,
          lineHeight: 1,
          background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(123,92,240,0.15))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-0.03em",
          marginBottom: "1rem",
        }}>
          404
        </div>
        <h1 style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 700,
          fontSize: "1.5rem",
          color: "#E2E8F0",
          marginBottom: "0.75rem",
          letterSpacing: "-0.01em",
        }}>
          Node Not Found
        </h1>
        <p style={{
          color: "rgba(226,232,240,0.4)",
          fontSize: "0.9rem",
          lineHeight: 1.7,
          maxWidth: "400px",
          margin: "0 auto 2rem",
        }}>
          This path doesn&apos;t resolve in the current network topology. Navigate back to the origin.
        </p>
        <Link href="/" className="btn-primary">
          Return Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
