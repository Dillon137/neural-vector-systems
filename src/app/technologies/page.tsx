import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stackCategories = [
  {
    id: "data",
    label: "Data Platforms",
    color: "#00D4FF",
    tools: [
      { name: "Snowflake", desc: "Cloud data warehouse for secure analytics and governed reporting at enterprise scale." },
      { name: "Google BigQuery", desc: "Managed analytics platform for large operational datasets and fast decision support." },
      { name: "PostgreSQL", desc: "Reliable relational database for core business applications and transactional workloads." },
      { name: "Apache Airflow", desc: "Workflow orchestration for scheduled data movement, quality checks, and reporting pipelines." },
      { name: "Apache Kafka", desc: "Event streaming backbone for high-volume operational telemetry and real-time integrations." },
    ],
  },
  {
    id: "mlops",
    label: "ML Operations",
    color: "#7B5CF0",
    tools: [
      { name: "AWS SageMaker", desc: "Managed model training and deployment with production monitoring and versioned releases." },
      { name: "Vertex AI", desc: "Google Cloud managed platform for model lifecycle, deployment, and governed experimentation." },
      { name: "MLflow", desc: "Model tracking and release management for repeatable experiments and controlled promotion to production." },
      { name: "Grafana", desc: "Operational dashboards and alerts for service health, model performance, and deployment stability." },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Infrastructure",
    color: "#0EA5E9",
    tools: [
      { name: "AWS", desc: "Scalable cloud environment for compute, storage, secure networking, and production operations." },
      { name: "Google Cloud Platform", desc: "Cloud platform for containerized services, managed data systems, and enterprise integrations." },
      { name: "Docker", desc: "Container packaging for consistent deployment behavior across development, staging, and production." },
      { name: "Kubernetes", desc: "Container orchestration for resilient scaling, high availability, and rolling updates." },
      { name: "GitHub Actions CI/CD", desc: "Automated build, test, and release pipelines on every approved change." },
      { name: "Terraform", desc: "Infrastructure as code for repeatable cloud setup, governance, and disaster recovery planning." },
    ],
  },
];

const selectionPrinciples = [
  {
    label: "Production-Proven Over Bleeding-Edge",
    desc: "Every tool in this stack has proven production reliability at enterprise scale. We do not introduce experimental frameworks into client infrastructure.",
  },
  {
    label: "Interoperability Over Ecosystems",
    desc: "Tools are selected for their ability to integrate with existing enterprise infrastructure—not to create new vendor dependencies.",
  },
  {
    label: "Open Standards Where Possible",
    desc: "Portable containers, standard APIs, and infrastructure as code keep deployments flexible and reduce vendor lock-in.",
  },
  {
    label: "Cost-Aware Architecture",
    desc: "Cloud infrastructure is designed with cost optimization embedded from the start—not retrofitted after bills arrive.",
  },
];

export default function TechnologiesPage() {
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
          background: "radial-gradient(ellipse 60% 50% at 60% 0%, rgba(0,212,255,0.07) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
          <span className="section-label">The Engineering Grid</span>
          <h1 style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            letterSpacing: "-0.02em",
            color: "#E2E8F0",
            marginTop: "0.75rem",
            marginBottom: "1.25rem",
          }}>
            Technology <span className="gradient-text">Stack</span>
          </h1>
          <p style={{
            color: "rgba(226,232,240,0.5)",
            fontSize: "1rem",
            lineHeight: 1.75,
            maxWidth: "600px",
          }}>
            Every tool is selected for production reliability, enterprise interoperability, and documented performance at scale. No experimental frameworks in client infrastructure.
          </p>
        </div>
      </section>

      {/* Stack categories */}
      <section className="section-x" style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "3rem" }}>
          {stackCategories.map((cat) => (
            <div key={cat.id} id={cat.id}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: cat.color }} />
                <h2 style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#E2E8F0",
                  letterSpacing: "0.02em",
                }}>
                  {cat.label}
                </h2>
                <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg, ${cat.color}30, transparent)` }} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "1rem" }}>
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="glass-card"
                    style={{
                      padding: "1.5rem",
                      borderRadius: "4px",
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: cat.color,
                      flexShrink: 0,
                      marginTop: "6px",
                      opacity: 0.7,
                    }} />
                    <div>
                      <div style={{
                        fontFamily: "var(--font-syne), sans-serif",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        color: "#E2E8F0",
                        marginBottom: "0.4rem",
                      }}>
                        {tool.name}
                      </div>
                      <p style={{
                        color: "rgba(226,232,240,0.43)",
                        fontSize: "0.8rem",
                        lineHeight: 1.7,
                      }}>
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selection principles */}
      <section className="section-x" style={{ padding: "5rem 2rem", background: "rgba(7,14,28,0.6)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <span className="section-label">Why This Stack</span>
            <h2 style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "#E2E8F0",
              marginTop: "0.75rem",
              letterSpacing: "-0.01em",
            }}>
              Technology Selection Principles
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {selectionPrinciples.map((p, i) => (
              <div key={p.label} className="glass-card" style={{ padding: "2rem", borderRadius: "4px" }}>
                <div style={{
                  fontFamily: "var(--font-ibm-mono), monospace",
                  fontSize: "0.65rem",
                  color: "rgba(0,212,255,0.5)",
                  letterSpacing: "0.1em",
                  marginBottom: "0.75rem",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  color: "#E2E8F0",
                  marginBottom: "0.6rem",
                  lineHeight: 1.3,
                }}>
                  {p.label}
                </h3>
                <p style={{ color: "rgba(226,232,240,0.45)", fontSize: "0.82rem", lineHeight: 1.75 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-x" style={{ padding: "5rem 2rem", textAlign: "center" }}>
        <h2 style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
          color: "#E2E8F0",
          marginBottom: "1.5rem",
          letterSpacing: "-0.01em",
        }}>
          Have a Specific Stack Requirement?
        </h2>
        <p style={{
          color: "rgba(226,232,240,0.45)",
          marginBottom: "2rem",
          maxWidth: "480px",
          margin: "0 auto 2rem",
          fontSize: "0.9rem",
          lineHeight: 1.7,
        }}>
          Existing cloud agreements, compliance mandates, or preferred tooling? We integrate with what you have.
        </p>
        <Link href="/contact" className="btn-primary">
          Discuss Technical Requirements <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
