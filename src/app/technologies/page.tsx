import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stackCategories = [
  {
    id: "data",
    label: "Data Ecosystem",
    color: "#00D4FF",
    tools: [
      { name: "Snowflake", desc: "Enterprise cloud data warehousing with near-unlimited concurrency and native semi-structured data support." },
      { name: "Google BigQuery", desc: "Serverless, petabyte-scale analytics engine for large-volume ML feature pipelines and BI workloads." },
      { name: "PostgreSQL", desc: "Production relational database for structured operational data, transactional systems, and ML feature stores." },
      { name: "dbt", desc: "SQL-first transformation framework with built-in lineage tracking, testing, and documentation generation." },
      { name: "Apache Airflow", desc: "Pipeline orchestration for complex multi-step ETL, ML training, and data quality workflows." },
      { name: "Apache Kafka", desc: "Real-time event streaming for high-throughput sensor telemetry and operational data pipelines." },
    ],
  },
  {
    id: "ai",
    label: "AI & Advanced Modeling",
    color: "#7B5CF0",
    tools: [
      { name: "PyTorch", desc: "Deep learning framework for custom neural architectures, signal processing nets, and research-to-production workflows." },
      { name: "scikit-learn", desc: "Battle-tested ML toolkit for classification, regression, clustering, and ensemble methods at production scale." },
      { name: "XGBoost / LightGBM", desc: "Gradient boosting frameworks delivering state-of-the-art performance on structured tabular datasets." },
      { name: "LangChain", desc: "LLM orchestration framework for RAG pipelines, tool-augmented agents, and document intelligence systems." },
      { name: "LangGraph", desc: "Graph-based multi-agent orchestration for complex, multi-step document processing and verification workflows." },
      { name: "OpenCV", desc: "Computer vision library for real-time image processing, Fourier deblurring, and production QA inspection arrays." },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Infrastructure",
    color: "#0EA5E9",
    tools: [
      { name: "AWS", desc: "Primary cloud platform for scalable compute, S3 data lakes, SageMaker model serving, and Lambda event-driven pipelines." },
      { name: "Google Cloud Platform", desc: "Vertex AI for managed ML workflows, BigQuery ML integration, and Cloud Run containerized inference." },
      { name: "Docker", desc: "Containerization for reproducible model environments, consistent deployments, and portable pipeline packaging." },
      { name: "Kubernetes", desc: "Container orchestration for auto-scaling inference services and resilient, zero-downtime production deployments." },
      { name: "GitHub Actions CI/CD", desc: "Automated testing, model validation, container builds, and staged deployment pipelines on every commit." },
      { name: "Terraform", desc: "Infrastructure-as-code for reproducible, auditable cloud environment provisioning and disaster recovery." },
    ],
  },
  {
    id: "languages",
    label: "Languages & Query",
    color: "#A78BFA",
    tools: [
      { name: "Python", desc: "Primary language for ML, data engineering, API development, and agentic pipeline orchestration." },
      { name: "SQL", desc: "Core analytical and transformation language across all warehouse and database platforms." },
      { name: "R", desc: "Statistical modeling, biostatistics, and experimental design analysis for life sciences applications." },
      { name: "Bash / Shell", desc: "System automation, deployment scripting, and operational tooling." },
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
    desc: "ONNX for model portability, standard REST APIs for integrations, and SQL as the universal data transformation language minimize lock-in.",
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
      <section style={{
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
      <section style={{ padding: "4rem 2rem" }}>
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

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
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
      <section style={{ padding: "5rem 2rem", background: "rgba(7,14,28,0.6)" }}>
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

      <section style={{ padding: "5rem 2rem", textAlign: "center" }}>
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
