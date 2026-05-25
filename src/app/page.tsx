import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Cpu,
  Database,
  GitBranch,
  Eye,
  Layers,
  Zap,
  Shield,
  BarChart2,
  Activity,
} from "lucide-react";

const ParticleField = dynamic(
  () => import("@/components/animations/ParticleField"),
  { ssr: false }
);

// ─── DATA ─────────────────────────────────────────────────────────────────────

const capabilities = [
  {
    icon: TrendingUp,
    label: "Optimization & Operations Research",
    description:
      "Constraint-aware optimization for scheduling, pricing, and logistics decisions that protect margin and reduce daily firefighting.",
  },
  {
    icon: Activity,
    label: "Machine Learning & Predictive Modeling",
    description:
      "Predictive systems for forecasting, anomaly detection, and operational planning, deployed with monitoring and governance from day one.",
  },
  {
    icon: Zap,
    label: "Intelligent Automation & Agentic Systems",
    description:
      "Agentic automation for document-heavy operations, including data intake, verification, and handoff into core business workflows.",
  },
  {
    icon: Database,
    label: "Data Engineering & Cloud Infrastructure",
    description:
      "Cloud data platforms, reliable pipelines, and secure ERP integrations that keep analytics and reporting accurate as operations scale.",
  },
  {
    icon: Eye,
    label: "Computer Vision & Signal Processing",
    description:
      "Production vision systems for quality inspection and tracking where speed, reliability, and practical deployment constraints matter.",
  },
  {
    icon: Layers,
    label: "Production Systems & Resilience",
    description:
      "Containerized deployment, CI/CD automation, monitoring, and cost control to keep production systems stable over time.",
  },
];

const verticals = [
  {
    icon: Activity,
    label: "Life Sciences & Healthcare Analytics",
    value:
      "Accelerate computational timelines, parse complex biometrics, and structure multi-omics or clinical instrumentation data into actionable predictive systems.",
    color: "#00D4FF",
  },
  {
    icon: GitBranch,
    label: "Logistics, Supply Chain & Fleet",
    value:
      "Maximize haul margins, resolve routing bottlenecks under complex physical constraints, and reduce supply chain volatility with real-time optimization engines.",
    color: "#7B5CF0",
  },
  {
    icon: BarChart2,
    label: "Process Manufacturing & Brewing",
    value:
      "Model fermentation curves, optimize ingredient utilization, deploy sensor-based anomaly detection, and vision-based quality control on production floors.",
    color: "#0EA5E9",
  },
  {
    icon: Cpu,
    label: "Enterprise Operations & Automation",
    value:
      "Strip manual labor hours from corporate workflows via intelligent document parsing, ERP synchronization, and automated risk scoring pipelines.",
    color: "#A78BFA",
  },
];

const caseStudies = [
  {
    tag: "Life Sciences",
    title: "Predictive Event Modeling for Clinical Data Streams",
    problem: "Unstructured biometric data streams failing to provide actionable predictive utility.",
    outcome: "High-accuracy forecasting of acute anomalies, optimizing clinical tracking timelines.",
    metric: "94%",
    metricLabel: "Prediction Accuracy",
    color: "#00D4FF",
  },
  {
    tag: "Logistics",
    title: "Constraint-Aware Margin Optimization Engine",
    problem: "Dynamic shipping variables eroding line-haul margins across complex fulfillment networks.",
    outcome: "Custom optimization engine balancing route constraints, fuel overheads, and real-time carrier pricing.",
    metric: "+17%",
    metricLabel: "Margin Uplift",
    color: "#7B5CF0",
  },
  {
    tag: "Enterprise Automation",
    title: "Intelligent Document Extraction & ERP Ingestion",
    problem: "Thousands of manual processing hours lost parsing variable vendor invoices and regulatory documents.",
    outcome: "Resilient OCR pipeline with agentic verification against internal database records.",
    metric: "10+ hrs",
    metricLabel: "Saved Per Week, Per Branch",
    color: "#0EA5E9",
  },
  {
    tag: "Manufacturing",
    title: "Industrial Computer Vision & QA Array",
    problem: "Low-cost hardware capturing blurred tracking codes on high-velocity production lines.",
    outcome: "Custom image-restoration pipeline deployed at the edge, eliminating specialized hardware.",
    metric: "−80%",
    metricLabel: "Hardware Cost Reduction",
    color: "#A78BFA",
  },
];

const techStack = [
  { category: "Cloud & Deployment", items: ["AWS", "Google Cloud Platform", "Kubernetes", "Docker", "GitHub Actions CI/CD", "Terraform"] },
  { category: "Data Platforms", items: ["Snowflake", "BigQuery", "PostgreSQL", "Apache Airflow", "Apache Kafka"] },
  { category: "ML Operations", items: ["AWS SageMaker", "Vertex AI", "MLflow", "Grafana"] },
];

const engagementSteps = [
  { num: "01", label: "Deep-Dive Discovery", desc: "Understand operational context, data landscape, and business constraints." },
  { num: "02", label: "Data Audit & Feasibility", desc: "Assess data quality, availability, and algorithmic approach viability." },
  { num: "03", label: "Controlled Prototype", desc: "Deliver a scoped proof-of-value with measurable baseline metrics." },
  { num: "04", label: "Enterprise Production", desc: "Full-scale deployment with CI/CD, monitoring, and integration testing." },
  { num: "05", label: "Continuous Optimization", desc: "Ongoing model performance tuning, drift detection, and architecture evolution." },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div style={{ background: "var(--c-obsidian)" }}>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="section-x"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Particle field */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <ParticleField />
        </div>

        {/* Radial gradient overlays */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.12) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 1,
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 50% 50% at 80% 60%, rgba(123,92,240,0.1) 0%, transparent 55%)",
          pointerEvents: "none",
          zIndex: 1,
        }} />

        {/* Grid overlay */}
        <div className="bg-grid" style={{
          position: "absolute",
          inset: 0,
          opacity: 0.4,
          pointerEvents: "none",
          zIndex: 1,
        }} />

        {/* Content */}
        <div style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "8rem 2rem 4rem",
          width: "100%",
        }}>
          {/* Label */}
          <div style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: "2rem", height: "1px", background: "rgba(0,212,255,0.6)" }} />
            <span className="section-label">Intelligent Systems Engineering</span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: "1.75rem",
            maxWidth: "900px",
          }}>
            <span style={{ color: "#E2E8F0" }}>Intelligent Systems</span>
            <br />
            <span className="gradient-text">Engineering</span>
            <span style={{ color: "rgba(226,232,240,0.5)" }}> for</span>
            <br />
            <span style={{ color: "#E2E8F0" }}>Complex</span>{" "}
            <span style={{ color: "rgba(226,232,240,0.4)" }}>Operational Data.</span>
          </h1>

          {/* Subheadline */}
          <p style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(226,232,240,0.55)",
            maxWidth: "680px",
            lineHeight: 1.75,
            marginBottom: "2.5rem",
          }}>
            Neural Vector Systems designs, builds, and deploys predictive systems,
            optimization engines, and robust data pipelines that turn volatile scientific and
            operational data into defensive business advantages.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/services" className="btn-primary">
              Review Capabilities <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Schedule Technical Consultation
            </Link>
          </div>

          {/* Stats row */}
          <div style={{
            display: "flex",
            gap: "3rem",
            marginTop: "4rem",
            flexWrap: "wrap",
          }}>
            {[
              { value: "+17%", label: "Logistics Margin Uplift" },
              { value: "80%", label: "HW Cost Reduction" },
              { value: "10+ hrs", label: "Saved / Week / Branch" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: "var(--font-ibm-mono), monospace",
                  fontSize: "1.75rem",
                  fontWeight: 500,
                  background: "linear-gradient(135deg, #00D4FF, #7B5CF0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.1,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: "var(--font-ibm-mono), monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(226,232,240,0.35)",
                  marginTop: "0.35rem",
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to bottom, transparent, var(--c-obsidian))",
          zIndex: 2,
          pointerEvents: "none",
        }} />
      </section>

      {/* ── CORE EQUATION ─────────────────────────────────────────────────── */}
      <section className="section-x" style={{ padding: "5rem 2rem", background: "rgba(7,14,28,0.8)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem", textAlign: "center" }}>
            <span className="section-label">The Core Equation</span>
            <h2 style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "#E2E8F0",
              marginTop: "0.75rem",
              letterSpacing: "-0.01em",
            }}>
              Where Deep Algorithms Meet{" "}
              <span className="gradient-text">Enterprise Yield</span>
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5px",
            background: "rgba(0,212,255,0.08)",
          }}>
            {[
              {
                icon: Shield,
                title: "Risk Mitigation",
                body: "We engineer defensive data infrastructure. Predictive models that detect anomalies before they become operational failures, and pipelines built for auditability and compliance.",
              },
              {
                icon: TrendingUp,
                title: "Margin Expansion",
                body: "Mathematical optimization that eliminates waste from scheduling, routing, and resource allocation. Every algorithm maps directly to measurable cost reduction or revenue lift.",
              },
              {
                icon: Cpu,
                title: "Velocity at Scale",
                body: "Agentic automation and production operations architectures that compress manual processing timelines without sacrificing data integrity or governance controls.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card"
                style={{
                  padding: "2.5rem",
                  background: "rgba(10,22,40,0.85)",
                }}
              >
                <item.icon size={24} color="#00D4FF" style={{ opacity: 0.8, marginBottom: "1.25rem" }} />
                <h3 style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 600,
                  fontSize: "1.15rem",
                  color: "#E2E8F0",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.01em",
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: "rgba(226,232,240,0.5)",
                  fontSize: "0.88rem",
                  lineHeight: 1.75,
                }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ──────────────────────────────────────────────────── */}
      <section className="section-x" style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span className="section-label">Core Capabilities</span>
              <h2 style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "#E2E8F0",
                marginTop: "0.75rem",
                letterSpacing: "-0.01em",
                maxWidth: "500px",
              }}>
                What We Build
              </h2>
            </div>
            <Link href="/services" className="btn-secondary" style={{ fontSize: "0.75rem", padding: "10px 20px" }}>
              All Services <ChevronRight size={14} />
            </Link>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "1rem",
          }}>
            {capabilities.map((cap) => (
              <div key={cap.label} className="glass-card" style={{ padding: "2rem", borderRadius: "4px", cursor: "default" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,212,255,0.08)",
                    border: "1px solid rgba(0,212,255,0.15)",
                    borderRadius: "4px",
                    flexShrink: 0,
                  }}>
                    <cap.icon size={18} color="#00D4FF" style={{ opacity: 0.85 }} />
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "#E2E8F0",
                    lineHeight: 1.35,
                    letterSpacing: "-0.005em",
                  }}>
                    {cap.label}
                  </h3>
                </div>
                <p style={{
                  color: "rgba(226,232,240,0.48)",
                  fontSize: "0.85rem",
                  lineHeight: 1.75,
                  marginBottom: 0,
                }}>
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY VERTICALS ────────────────────────────────────────────── */}
      <section className="section-x" style={{ padding: "6rem 2rem", background: "rgba(7,14,28,0.6)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Industry Frameworks</span>
            <h2 style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "#E2E8F0",
              marginTop: "0.75rem",
              letterSpacing: "-0.01em",
            }}>
              Where We Deploy
            </h2>
            <p style={{
              color: "rgba(226,232,240,0.45)",
              maxWidth: "560px",
              margin: "1rem auto 0",
              fontSize: "0.9rem",
              lineHeight: 1.7,
            }}>
              The same underlying analytics principles applied cross-domain to solve high-value operational problems.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
          }}>
            {verticals.map((v) => (
              <div
                key={v.label}
                className="glass-card"
                style={{
                  padding: "2rem",
                  borderRadius: "4px",
                  borderTop: `2px solid ${v.color}`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "80px",
                  background: `radial-gradient(ellipse at 50% 0%, ${v.color}12 0%, transparent 70%)`,
                  pointerEvents: "none",
                }} />
                <v.icon size={22} color={v.color} style={{ opacity: 0.85, marginBottom: "1rem" }} />
                <h3 style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#E2E8F0",
                  marginBottom: "0.75rem",
                  lineHeight: 1.35,
                }}>
                  {v.label}
                </h3>
                <p style={{
                  color: "rgba(226,232,240,0.48)",
                  fontSize: "0.83rem",
                  lineHeight: 1.75,
                }}>
                  {v.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ──────────────────────────────────────────────────── */}
      <section className="section-x" style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span className="section-label">Proof of Scale</span>
              <h2 style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "#E2E8F0",
                marginTop: "0.75rem",
                letterSpacing: "-0.01em",
              }}>
                Case Studies
              </h2>
            </div>
            <Link href="/case-studies" className="btn-secondary" style={{ fontSize: "0.75rem", padding: "10px 20px" }}>
              All Case Studies <ChevronRight size={14} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="glass-card"
                style={{ padding: "2rem", borderRadius: "4px", display: "flex", flexDirection: "column" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                  <span style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: cs.color,
                    padding: "3px 8px",
                    border: `1px solid ${cs.color}33`,
                    borderRadius: "2px",
                    opacity: 0.85,
                  }}>
                    {cs.tag}
                  </span>
                  <div style={{ textAlign: "right" }}>
                    <div style={{
                      fontFamily: "var(--font-ibm-mono), monospace",
                      fontSize: "1.6rem",
                      fontWeight: 500,
                      color: cs.color,
                      lineHeight: 1,
                    }}>
                      {cs.metric}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-ibm-mono), monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(226,232,240,0.3)",
                      marginTop: "0.25rem",
                      maxWidth: "100px",
                      textAlign: "right",
                    }}>
                      {cs.metricLabel}
                    </div>
                  </div>
                </div>

                <h3 style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#E2E8F0",
                  marginBottom: "0.75rem",
                  lineHeight: 1.35,
                }}>
                  {cs.title}
                </h3>
                <p style={{
                  color: "rgba(226,232,240,0.4)",
                  fontSize: "0.8rem",
                  lineHeight: 1.7,
                  marginBottom: "0.5rem",
                }}>
                  <span style={{ color: "rgba(226,232,240,0.25)", fontFamily: "var(--font-ibm-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Problem: </span>
                  {cs.problem}
                </p>
                <p style={{
                  color: "rgba(226,232,240,0.5)",
                  fontSize: "0.82rem",
                  lineHeight: 1.7,
                  marginTop: "auto",
                  paddingTop: "0.75rem",
                  borderTop: "1px solid rgba(255,255,255,0.04)",
                }}>
                  {cs.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ────────────────────────────────────────────────────── */}
      <section className="section-x" style={{ padding: "5rem 2rem", background: "rgba(7,14,28,0.7)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Platforms & Infrastructure</span>
            <h2 style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "#E2E8F0",
              marginTop: "0.75rem",
              letterSpacing: "-0.01em",
            }}>
              Deployment-Ready Technology Platforms
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {techStack.map((group) => (
              <div key={group.category} className="glass-card" style={{ padding: "1.75rem", borderRadius: "4px" }}>
                <div style={{
                  fontFamily: "var(--font-ibm-mono), monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#00D4FF",
                  opacity: 0.7,
                  marginBottom: "1.25rem",
                }}>
                  {group.category}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {group.items.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(0,212,255,0.5)", flexShrink: 0 }} />
                      <span style={{
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontSize: "0.85rem",
                        color: "rgba(226,232,240,0.65)",
                      }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT FLOW ───────────────────────────────────────────────── */}
      <section className="section-x" style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-label">Consulting Engagement</span>
            <h2 style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "#E2E8F0",
              marginTop: "0.75rem",
              letterSpacing: "-0.01em",
            }}>
              How We Integrate
            </h2>
          </div>

          <div style={{ display: "flex", gap: "0", flexWrap: "wrap" }}>
            {engagementSteps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  flex: "1 1 180px",
                  padding: "2rem 1.5rem",
                  borderLeft: i === 0 ? "none" : "1px solid rgba(0,212,255,0.08)",
                  position: "relative",
                }}
              >
                {/* Connector arrow */}
                {i < engagementSteps.length - 1 && (
                  <div style={{
                    position: "absolute",
                    right: "-8px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "16px",
                    height: "1px",
                    background: "rgba(0,212,255,0.3)",
                    zIndex: 1,
                  }} />
                )}
                <div style={{
                  fontFamily: "var(--font-ibm-mono), monospace",
                  fontSize: "0.7rem",
                  color: "rgba(0,212,255,0.5)",
                  letterSpacing: "0.1em",
                  marginBottom: "0.75rem",
                }}>
                  {step.num}
                </div>
                <div style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "#E2E8F0",
                  marginBottom: "0.5rem",
                  lineHeight: 1.3,
                }}>
                  {step.label}
                </div>
                <p style={{
                  color: "rgba(226,232,240,0.4)",
                  fontSize: "0.78rem",
                  lineHeight: 1.65,
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="section-x" style={{
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,212,255,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }} />

        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}>
          <span className="section-label">Ready to Begin</span>
          <h2 style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
            color: "#E2E8F0",
            marginTop: "1rem",
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}>
            Let&apos;s Engineer a High-Yield Solution{" "}
            <span className="gradient-text">for Your Data.</span>
          </h2>
          <p style={{
            color: "rgba(226,232,240,0.5)",
            fontSize: "1rem",
            lineHeight: 1.75,
            marginBottom: "2.5rem",
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
          }}>
            Whether you need to resolve a complex logistics constraint, optimize a process manufacturing line, or build secure enterprise-grade ML infrastructure—we engineer solutions that scale.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">
              Book a Technical Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-secondary">
              Review Capabilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
