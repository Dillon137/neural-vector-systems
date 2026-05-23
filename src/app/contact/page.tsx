"use client";

import { useState } from "react";
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react";

const bottlenecks = [
  "Mathematical Optimization & Operations Research",
  "Machine Learning & Predictive Modeling",
  "Intelligent Automation & Agentic Pipelines",
  "Data Engineering & Cloud Infrastructure",
  "Industrial Computer Vision & Signal Processing",
  "MLOps & Systems Resilience",
  "Custom Engineering / Not Sure Yet",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    bottleneck: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Replace with your form submission logic (e.g., API route, Resend, Formspree)
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  return (
    <div style={{ background: "var(--c-obsidian)", paddingTop: "72px" }}>
      {/* Header */}
      <section style={{
        padding: "5rem 2rem 4rem",
        borderBottom: "1px solid rgba(0,212,255,0.07)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 70% 0%, rgba(0,212,255,0.07) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
          <span className="section-label">High-Intent Discovery</span>
          <h1 style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            letterSpacing: "-0.02em",
            color: "#E2E8F0",
            marginTop: "0.75rem",
            marginBottom: "1.25rem",
          }}>
            Start a <span className="gradient-text">Technical Conversation</span>
          </h1>
          <p style={{
            color: "rgba(226,232,240,0.5)",
            fontSize: "1rem",
            lineHeight: 1.75,
            maxWidth: "560px",
          }}>
            A 30-minute technical consultation maps your operational bottleneck to the most effective engineering approach—no sales theater, no slide decks.
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 2rem" }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "4rem",
          alignItems: "start",
        }}>
          {/* Left: Info */}
          <div>
            <div className="glass-card" style={{ padding: "2rem", borderRadius: "4px", marginBottom: "1rem" }}>
              <div className="section-label" style={{ marginBottom: "1rem" }}>What to Expect</div>
              {[
                "Technical peer-to-peer discovery—not a sales call.",
                "Clear scoping of whether your challenge is solvable with the available data.",
                "A preliminary framework mapping your problem to algorithmic approaches.",
                "Honest assessment of timeline, complexity, and expected business return.",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <div style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.6rem",
                    color: "#00D4FF",
                    opacity: 0.6,
                    flexShrink: 0,
                    marginTop: "2px",
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span style={{ color: "rgba(226,232,240,0.55)", fontSize: "0.83rem", lineHeight: 1.65 }}>{item}</span>
                </div>
              ))}
            </div>

            <div className="glass-card" style={{ padding: "2rem", borderRadius: "4px" }}>
              <div className="section-label" style={{ marginBottom: "1.25rem" }}>Direct Channels</div>
              {[
                { icon: Mail, label: "hello@neuralvectorsystems.com", href: "mailto:hello@neuralvectorsystems.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                { icon: Github, label: "GitHub", href: "https://github.com" },
              ].map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                    textDecoration: "none",
                    color: "rgba(226,232,240,0.5)",
                    fontSize: "0.83rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(226,232,240,0.5)")}
                >
                  <channel.icon size={14} />
                  {channel.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card" style={{ padding: "2.5rem", borderRadius: "4px" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "rgba(0,212,255,0.1)",
                  border: "1px solid rgba(0,212,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                }}>
                  <ArrowRight size={24} color="#00D4FF" />
                </div>
                <h3 style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.35rem",
                  color: "#E2E8F0",
                  marginBottom: "0.75rem",
                }}>
                  Message Received
                </h3>
                <p style={{ color: "rgba(226,232,240,0.5)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                  We review all inquiries within one business day and prioritize based on operational complexity. Expect a direct response from a technical team member.
                </p>
              </div>
            ) : (
              <div>
                <h2 style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: "#E2E8F0",
                  marginBottom: "2rem",
                  letterSpacing: "-0.01em",
                }}>
                  Inquiry Form
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }}>
                  {[
                    { label: "Full Name", key: "name", placeholder: "Your name", type: "text" },
                    { label: "Company", key: "company", placeholder: "Organization name", type: "text" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label style={{
                        fontFamily: "var(--font-ibm-mono), monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(226,232,240,0.35)",
                        display: "block",
                        marginBottom: "0.5rem",
                      }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        style={{
                          width: "100%",
                          background: "rgba(0,0,0,0.3)",
                          border: "1px solid rgba(0,212,255,0.12)",
                          borderRadius: "3px",
                          padding: "10px 14px",
                          color: "#E2E8F0",
                          fontSize: "0.875rem",
                          fontFamily: "var(--font-outfit), sans-serif",
                          outline: "none",
                          transition: "border-color 0.2s ease",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.4)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.12)")}
                      />
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(226,232,240,0.35)",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}>
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{
                      width: "100%",
                      background: "rgba(0,0,0,0.3)",
                      border: "1px solid rgba(0,212,255,0.12)",
                      borderRadius: "3px",
                      padding: "10px 14px",
                      color: "#E2E8F0",
                      fontSize: "0.875rem",
                      fontFamily: "var(--font-outfit), sans-serif",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.4)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.12)")}
                  />
                </div>

                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(226,232,240,0.35)",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}>
                    Primary Operational Bottleneck
                  </label>
                  <select
                    value={form.bottleneck}
                    onChange={(e) => setForm({ ...form, bottleneck: e.target.value })}
                    style={{
                      width: "100%",
                      background: "rgba(0,0,0,0.3)",
                      border: "1px solid rgba(0,212,255,0.12)",
                      borderRadius: "3px",
                      padding: "10px 14px",
                      color: form.bottleneck ? "#E2E8F0" : "rgba(226,232,240,0.35)",
                      fontSize: "0.875rem",
                      fontFamily: "var(--font-outfit), sans-serif",
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    <option value="" disabled>Select a domain...</option>
                    {bottlenecks.map((b) => (
                      <option key={b} value={b} style={{ background: "#0A1628", color: "#E2E8F0" }}>{b}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <label style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(226,232,240,0.35)",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}>
                    Project Scope Details
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe the operational problem, current data availability, and what success looks like for your organization..."
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    style={{
                      width: "100%",
                      background: "rgba(0,0,0,0.3)",
                      border: "1px solid rgba(0,212,255,0.12)",
                      borderRadius: "3px",
                      padding: "10px 14px",
                      color: "#E2E8F0",
                      fontSize: "0.875rem",
                      fontFamily: "var(--font-outfit), sans-serif",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.4)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.12)")}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Submit Inquiry <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
