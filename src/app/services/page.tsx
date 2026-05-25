import Link from "next/link";
import { ArrowRight, TrendingUp, Activity, Zap, Database, Eye, Layers } from "lucide-react";

const services = [
  {
    id: "optimization",
    icon: TrendingUp,
    color: "#00D4FF",
    title: "Mathematical Optimization & Operations Research",
    tagline: "Eliminate Operational Guesswork. Protect Margins.",
    description:
      "Neural Vector Systems designs optimization engines that remove guesswork from scheduling, pricing, and distribution. We model real-world constraints so teams can make faster, more consistent decisions in daily operations.",
    builds: [
      "Linear and integer programming models for scheduling and resource allocation",
      "Heuristic routing frameworks for multi-stop, multi-constraint logistics networks",
      "Real-time dynamic pricing engines with demand-sensitivity parameters",
      "Constraint-aware fleet optimization with delivery commitments enforced",
    ],
    integration: "Seamless integration with ERP systems (SAP, Oracle, NetSuite) via secure REST APIs and event-driven pipelines.",
    yield: "Instantaneous reduction in resource waste, maximized asset utilization, and guaranteed margin protection. Validated at a 17% logistics margin uplift across complex fulfillment networks.",
  },
  {
    id: "ml",
    icon: Activity,
    color: "#7B5CF0",
    title: "Machine Learning & Predictive Modeling",
    tagline: "Data Into Foresight. Foresight Into Advantage.",
    description:
      "We architect end-to-end predictive systems—from raw data ingestion through feature engineering, model selection, validation, and production deployment. Our modeling frameworks are built for scientific rigor: no black-box shortcuts, full interpretability documentation, and continuous drift monitoring.",
    builds: [
      "Multi-stage regression and classification pipelines for complex tabular and time-series datasets",
      "Anomaly detection systems for clinical biometrics, sensor networks, and financial signals",
      "Health event and failure prediction models for industrial and medical applications",
      "Ensemble forecasting systems with confidence interval estimation",
    ],
    integration: "Model outputs integrated into existing dashboards (Tableau, Looker, custom React frontends) and operational workflows via standardized API endpoints.",
    yield: "High-accuracy event prediction with documented precision-recall tradeoffs, enabling data-driven decisions that reduce false positives in critical operational contexts.",
  },
  {
    id: "automation",
    icon: Zap,
    color: "#0EA5E9",
    title: "Intelligent Automation & Agentic Pipelines",
    tagline: "Autonomous Workflows. Zero Manual Overhead.",
    description:
      "Enterprise document intelligence, process automation, and agentic orchestration that executes multi-step workflows with minimal manual effort. These systems retrieve, verify, and route decisions with full auditability.",
    builds: [
      "Production RAG systems with enterprise knowledge bases and hybrid retrieval",
      "Agentic workflows for multi-step document processing and verification",
      "OCR ingestion pipelines with structured extraction and database reconciliation",
      "Automated risk scoring and compliance flagging for regulatory workflows",
    ],
    integration: "Full integration with existing document management systems, SharePoint, ERP platforms, and custom databases via secure, auditable pipelines.",
    yield: "10+ operational hours saved per week per branch. Error rates drop by an order of magnitude versus manual processing. Staff refocused on higher-value decision-making.",
  },
  {
    id: "data",
    icon: Database,
    color: "#A78BFA",
    title: "Data Engineering & Cloud Infrastructure",
    tagline: "Clean Data In. Reliable Intelligence Out.",
    description:
      "Machine learning is only as good as the data it consumes. We architect the end-to-end data infrastructure that makes production ML possible: ingestion, transformation, warehousing, governance, and API serving—built for auditability, scale, and enterprise security standards.",
    builds: [
      "Scalable data pipelines with automated validation and anomaly alerting",
      "Cloud data warehouse architecture on Snowflake and BigQuery with dbt transformation layers",
      "Secure API integrations with SAP, Salesforce, Oracle, and custom ERPs",
      "Data lineage tracking, PII masking, and HIPAA/SOC2-compatible governance frameworks",
    ],
    integration: "Modular pipeline design supports incremental migration from legacy on-premises systems with zero production downtime via blue-green deployment strategies.",
    yield: "A single source of truth for enterprise analytics. Downstream ML models trained on clean, governed data with documented provenance—dramatically reducing debugging and compliance overhead.",
  },
  {
    id: "vision",
    icon: Eye,
    color: "#00D4FF",
    title: "Industrial Computer Vision & Signal Processing",
    tagline: "Machine Eyes for Production Environments.",
    description:
      "High-performance image processing and signal analysis systems for industrial quality control, automated inspection, and real-time tracking—optimized for edge deployment on commodity hardware. We apply rigorous signal processing mathematics to solve problems that commodity ML models cannot.",
    builds: [
      "Advanced deblurring pipelines for high-speed tracking code recovery",
      "Real-time quality inspection pipelines for high-velocity production lines",
      "Defect classification and anomaly detection on manufacturing imagery",
      "Edge-optimized inference systems for low-latency factory automation",
    ],
    integration: "Compatible with standard industrial camera APIs (Basler, FLIR, Hikvision) and SCADA/MES system integrations for closed-loop automated quality gating.",
    yield: "80% reduction in hardware implementation overhead by enabling commodity cameras to perform at specialized-camera quality. Automation of formerly manual QA inspection workflows.",
  },
  {
    id: "mlops",
    icon: Layers,
    color: "#7B5CF0",
    title: "Production Systems & Resilience",
    tagline: "Production Stability. Continuous Performance.",
    description:
      "Deploying a model is one step. Keeping it reliable at enterprise scale is the larger engineering challenge. Our production operations framework adds instrumentation, automation, and governance so systems stay stable over time.",
    builds: [
      "Containerized model serving with Docker and Kubernetes for elastic scaling",
      "CI/CD pipelines with automated model regression testing and staged rollouts",
      "Model performance monitoring with statistical drift detection and alerting",
      "Cloud cost optimization frameworks reducing inference infrastructure overhead",
    ],
    integration: "Platform-agnostic design targeting AWS SageMaker, GCP Vertex AI, and Azure ML with unified observability via Grafana and custom monitoring dashboards.",
    yield: "Sustained model performance across production data distribution shifts. Reduced mean-time-to-resolution for model failures. Operational teams with full visibility into system health.",
  },
];

export default function ServicesPage() {
  return (
    <div style={{ background: "var(--c-obsidian)", paddingTop: "72px" }}>
      {/* Header */}
      <section className="section-x" style={{
        padding: "5rem 2rem 4rem",
        borderBottom: "1px solid rgba(0,212,255,0.07)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
          <span className="section-label">Core Capabilities</span>
          <h1 style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            letterSpacing: "-0.02em",
            color: "#E2E8F0",
            marginTop: "0.75rem",
            marginBottom: "1.25rem",
            maxWidth: "700px",
          }}>
            Services <span className="gradient-text">&amp; Deliverables</span>
          </h1>
          <p style={{
            color: "rgba(226,232,240,0.5)",
            fontSize: "1rem",
            lineHeight: 1.75,
            maxWidth: "600px",
          }}>
            Each service bucket is organized around definitive corporate deliverables—mapping specialized algorithmic depth directly to enterprise yield, risk reduction, and operational velocity.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-x" style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "3rem" }}>
          {services.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.id}
              className="glass-card"
              style={{
                padding: "3rem",
                borderRadius: "4px",
                borderLeft: `3px solid ${svc.color}`,
              }}
            >
              <div className="stack-below-md stack-below-md--gap-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
                {/* Left */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <div style={{
                      width: "42px",
                      height: "42px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `${svc.color}15`,
                      border: `1px solid ${svc.color}30`,
                      borderRadius: "4px",
                    }}>
                      <svc.icon size={20} color={svc.color} />
                    </div>
                    <span style={{
                      fontFamily: "var(--font-ibm-mono), monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: svc.color,
                      opacity: 0.75,
                    }}>
                      0{i + 1}
                    </span>
                  </div>

                  <h2 style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontWeight: 700,
                    fontSize: "1.35rem",
                    color: "#E2E8F0",
                    marginBottom: "0.5rem",
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                  }}>
                    {svc.title}
                  </h2>
                  <p style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.72rem",
                    color: svc.color,
                    letterSpacing: "0.08em",
                    opacity: 0.7,
                    marginBottom: "1.25rem",
                  }}>
                    {svc.tagline}
                  </p>
                  <p style={{
                    color: "rgba(226,232,240,0.5)",
                    fontSize: "0.88rem",
                    lineHeight: 1.8,
                  }}>
                    {svc.description}
                  </p>
                </div>

                {/* Right */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-ibm-mono), monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(226,232,240,0.3)",
                      marginBottom: "0.75rem",
                    }}>
                      What We Build
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {svc.builds.map((b) => (
                        <li key={b} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                          <div style={{
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            background: svc.color,
                            flexShrink: 0,
                            marginTop: "0.45rem",
                            opacity: 0.6,
                          }} />
                          <span style={{ color: "rgba(226,232,240,0.55)", fontSize: "0.83rem", lineHeight: 1.6 }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div style={{
                      fontFamily: "var(--font-ibm-mono), monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(226,232,240,0.3)",
                      marginBottom: "0.5rem",
                    }}>
                      Business Yield
                    </div>
                    <p style={{
                      color: "rgba(226,232,240,0.6)",
                      fontSize: "0.83rem",
                      lineHeight: 1.7,
                      borderLeft: `2px solid ${svc.color}40`,
                      paddingLeft: "0.75rem",
                    }}>
                      {svc.yield}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-x" style={{ padding: "5rem 2rem", textAlign: "center" }}>
        <span className="section-label">Start Here</span>
        <h2 style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
          color: "#E2E8F0",
          marginTop: "1rem",
          marginBottom: "1.5rem",
          letterSpacing: "-0.01em",
        }}>
          Unsure Which Service Fits Your Challenge?
        </h2>
        <p style={{ color: "rgba(226,232,240,0.45)", marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem", fontSize: "0.9rem", lineHeight: 1.7 }}>
          Most high-value problems sit at the intersection of multiple capabilities. A technical consultation maps your operational bottleneck to the right engineering approach.
        </p>
        <Link href="/contact" className="btn-primary">
          Schedule a Technical Consultation <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
