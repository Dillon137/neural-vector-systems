"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: "linear-optimization-logistics",
    tag: "Operations Research",
    tagColor: "#00D4FF",
    title: "Scaling Linear Optimization Models for Complex Logistics Frameworks",
    excerpt:
      "Standard LP solvers hit performance walls when route networks exceed a few hundred nodes. This guide covers warm-start initialization, constraint decomposition, and branch-and-bound tuning strategies that keep solve times under 5 seconds at enterprise scale.",
    date: "2024-11",
    readTime: "12 min",
    topics: ["Linear Programming", "Logistics", "OR-Tools", "Performance"],
  },
  {
    id: "edge-computer-vision",
    tag: "Computer Vision",
    tagColor: "#7B5CF0",
    title: "Edge-Based Computer Vision: Real-Time Image Restoration Without Heavy Hardware Overhead",
    excerpt:
      "Deploying Fourier-domain deblurring and Wiener filter deconvolution on standard industrial edge compute. A practical guide to achieving specialized-camera-quality read rates on commodity hardware at production line speed.",
    date: "2024-10",
    readTime: "15 min",
    topics: ["Computer Vision", "Signal Processing", "Edge AI", "Manufacturing"],
  },
  {
    id: "langgraph-document-pipelines",
    tag: "Intelligent Automation",
    tagColor: "#0EA5E9",
    title: "Deploying LangGraph Orchestrators to Automate Multi-Vendor Document Parsing Pipelines",
    excerpt:
      "A production architecture for LangGraph-based document intelligence: layout-aware extraction, agentic verification against database records, and exception routing with full audit trails. Includes handling for document format drift over time.",
    date: "2024-09",
    readTime: "18 min",
    topics: ["LangGraph", "LLM", "OCR", "Enterprise Automation"],
  },
  {
    id: "hipaa-data-warehouse",
    tag: "Data Engineering",
    tagColor: "#A78BFA",
    title: "Architecting HIPAA and Enterprise-Compliant Data Warehouses for Sensitive Analytics",
    excerpt:
      "A practical framework for building HIPAA-compliant Snowflake environments: column-level security, dynamic data masking, audit logging, and governance controls that satisfy both compliance teams and data scientists.",
    date: "2024-08",
    readTime: "14 min",
    topics: ["HIPAA", "Snowflake", "Data Governance", "Life Sciences"],
  },
  {
    id: "mlops-drift-detection",
    tag: "MLOps",
    tagColor: "#00D4FF",
    title: "Statistical Drift Detection for Production ML Models: Beyond Accuracy Monitoring",
    excerpt:
      "Accuracy metrics are lagging indicators. This piece covers PSI, KS-tests, and multivariate drift detection approaches that catch distribution shift before it degrades business-critical predictions—with Grafana alerting integration.",
    date: "2024-07",
    readTime: "10 min",
    topics: ["MLOps", "Model Monitoring", "Statistics", "Grafana"],
  },
  {
    id: "fermentation-ml",
    tag: "Process Manufacturing",
    tagColor: "#7B5CF0",
    title: "Time-Series ML for Fermentation Curve Modeling: From Batch Data to Predictive Control",
    excerpt:
      "Brewing and fermentation generate rich multivariate time-series data. This guide covers sensor normalization, non-linear regression approaches for curve fitting, and anomaly detection thresholds calibrated for batch process variability.",
    date: "2024-06",
    readTime: "16 min",
    topics: ["Time-Series", "Manufacturing", "Anomaly Detection", "Process Control"],
  },
];

export default function InsightsPage() {
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
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,212,255,0.07) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
          <span className="section-label">Technical Thought Leadership</span>
          <h1 style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            letterSpacing: "-0.02em",
            color: "#E2E8F0",
            marginTop: "0.75rem",
            marginBottom: "1.25rem",
          }}>
            Insights <span className="gradient-text">&amp; Analysis</span>
          </h1>
          <p style={{
            color: "rgba(226,232,240,0.5)",
            fontSize: "1rem",
            lineHeight: 1.75,
            maxWidth: "600px",
          }}>
            Deep technical content addressing the structural, high-value engineering problems that operational leaders search for when evaluating expert partners.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section style={{ padding: "3rem 2rem 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="glass-card" style={{
            padding: "3rem",
            borderRadius: "4px",
            borderTop: `2px solid #00D4FF`,
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "2rem",
            alignItems: "center",
          }}>
            <div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
                <span style={{
                  fontFamily: "var(--font-ibm-mono), monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#00D4FF",
                  padding: "3px 8px",
                  border: "1px solid rgba(0,212,255,0.25)",
                  borderRadius: "2px",
                }}>
                  Featured
                </span>
                <span style={{
                  fontFamily: "var(--font-ibm-mono), monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  color: "rgba(226,232,240,0.3)",
                }}>
                  Operations Research
                </span>
              </div>
              <h2 style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)",
                color: "#E2E8F0",
                letterSpacing: "-0.01em",
                lineHeight: 1.25,
                marginBottom: "1rem",
                maxWidth: "680px",
              }}>
                {articles[0].title}
              </h2>
              <p style={{
                color: "rgba(226,232,240,0.48)",
                fontSize: "0.88rem",
                lineHeight: 1.8,
                maxWidth: "600px",
                marginBottom: "1.5rem",
              }}>
                {articles[0].excerpt}
              </p>
              <Link href={`/insights/${articles[0].id}`} className="btn-primary" style={{ display: "inline-flex" }}>
                Read Article <ArrowRight size={16} />
              </Link>
            </div>
            <div style={{ textAlign: "right", minWidth: "120px" }}>
              <div style={{
                fontFamily: "var(--font-ibm-mono), monospace",
                fontSize: "0.65rem",
                color: "rgba(226,232,240,0.3)",
                letterSpacing: "0.08em",
                marginBottom: "0.35rem",
              }}>
                {articles[0].date}
              </div>
              <div style={{
                fontFamily: "var(--font-ibm-mono), monospace",
                fontSize: "0.65rem",
                color: "rgba(0,212,255,0.5)",
                letterSpacing: "0.08em",
              }}>
                {articles[0].readTime} read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section style={{ padding: "3rem 2rem 5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1rem" }}>
            {articles.slice(1).map((article) => (
              <article key={article.id} className="glass-card" style={{ padding: "2rem", borderRadius: "4px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: article.tagColor,
                    padding: "3px 8px",
                    border: `1px solid ${article.tagColor}30`,
                    borderRadius: "2px",
                    opacity: 0.85,
                  }}>
                    {article.tag}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.6rem",
                    color: "rgba(226,232,240,0.25)",
                    letterSpacing: "0.06em",
                  }}>
                    {article.readTime}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#E2E8F0",
                  lineHeight: 1.35,
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.005em",
                }}>
                  {article.title}
                </h3>

                <p style={{
                  color: "rgba(226,232,240,0.42)",
                  fontSize: "0.81rem",
                  lineHeight: 1.75,
                  flex: 1,
                  marginBottom: "1.25rem",
                }}>
                  {article.excerpt}
                </p>

                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                  {article.topics.map((t) => (
                    <span key={t} style={{
                      fontFamily: "var(--font-ibm-mono), monospace",
                      fontSize: "0.56rem",
                      letterSpacing: "0.08em",
                      color: "rgba(226,232,240,0.28)",
                      padding: "2px 7px",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: "2px",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/insights/${article.id}`}
                  style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(0,212,255,0.6)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    transition: "color 0.2s ease",
                    marginTop: "auto",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(0,212,255,0.6)")}
                >
                  Read Article <ArrowRight size={12} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
