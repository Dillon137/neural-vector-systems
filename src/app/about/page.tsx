import Link from "next/link";
import { ArrowRight, Shield, Cpu, Database, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    label: "Architectural Rigor",
    color: "#00D4FF",
    desc: "Every system is designed for production from day one. No duct-tape prototypes scaled to enterprise. Architecture decisions are documented, justified, and built for longevity.",
  },
  {
    icon: Database,
    label: "Data Integrity",
    color: "#7B5CF0",
    desc: "The most sophisticated model is worthless on corrupted or ungoverned data. We build the data infrastructure before the ML layer—auditability and provenance are non-negotiable.",
  },
  {
    icon: Shield,
    label: "Absolute Client Sovereignty",
    color: "#0EA5E9",
    desc: "Client IP, data, and operational intelligence are protected with contractual and architectural guardrails. We build systems that clients own entirely, with no vendor lock-in.",
  },
  {
    icon: TrendingUp,
    label: "Practical Yield Over Theoretical Performance",
    color: "#A78BFA",
    desc: "A 94% accurate model deployed and integrated beats a 97% accurate model still in a notebook. Business impact is the only meaningful benchmark.",
  },
];

const expertiseDomains = [
  {
    area: "Life Sciences & Biometrics",
    desc: "Handling multi-omics data, clinical instrumentation telemetry, and high-dimensional biological signal processing requires domain-specific rigor. The same statistical discipline applies directly to industrial sensor networks.",
  },
  {
    area: "Logistics & Operations Research",
    desc: "Real-world routing, scheduling, and resource optimization problems share mathematical structure with biological pathway optimization. Constraint-aware LP models are the common language.",
  },
  {
    area: "Process Manufacturing & Brewing",
    desc: "Fermentation curve modeling, sensor-based anomaly detection, and yield optimization map directly to continuous process monitoring challenges across pharmaceutical and chemical manufacturing.",
  },
  {
    area: "Enterprise Automation",
    desc: "Document intelligence, ERP integration, and workflow orchestration demand engineering discipline—not off-the-shelf SaaS. Custom agentic pipelines outperform generic tools on complex, variable document structures.",
  },
];

export default function AboutPage() {
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
          background: "radial-gradient(ellipse 70% 50% at 30% 0%, rgba(0,212,255,0.07) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
          <span className="section-label">The Engineering Philosophy</span>
          <h1 style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            letterSpacing: "-0.02em",
            color: "#E2E8F0",
            marginTop: "0.75rem",
            marginBottom: "1.25rem",
          }}>
            About <span className="gradient-text">NVS</span>
          </h1>
        </div>
      </section>

      {/* Manifesto */}
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <div>
            <span className="section-label" style={{ marginBottom: "1.25rem", display: "block" }}>The NVS Manifesto</span>
            <h2 style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
              color: "#E2E8F0",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}>
              AI Is a Tool to Drive EBITDA. Not a Buzzword.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                "The enterprise technology landscape has been flooded with AI marketing that confuses statistical models with operational solutions. Neural Vector Systems exists because production-grade intelligent systems require engineering discipline that is categorically different from research notebooks and demonstration prototypes.",
                "We measure success in margin points recovered, hours eliminated, and error rates reduced—not in model accuracy on held-out test sets. Every algorithm we deploy is traceable to a business outcome, every architectural decision is justified in terms of operational risk.",
                "Our cross-domain background is not a liability—it is the core value proposition. The same mathematical principles that govern multi-omics data analysis govern fermentation curve modeling and logistics constraint optimization. This structural fluency across domains enables us to bring proven frameworks from one vertical to unsolved problems in another.",
              ].map((para, i) => (
                <p key={i} style={{
                  color: "rgba(226,232,240,0.55)",
                  fontSize: "0.9rem",
                  lineHeight: 1.85,
                }}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div>
            <span className="section-label" style={{ marginBottom: "1.25rem", display: "block" }}>Founder Track Record</span>
            <div className="glass-card" style={{ padding: "2rem", borderRadius: "4px", marginBottom: "1rem" }}>
              <div style={{
                fontFamily: "var(--font-ibm-mono), monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#00D4FF",
                opacity: 0.7,
                marginBottom: "0.75rem",
              }}>
                Career Arc
              </div>
              <p style={{ color: "rgba(226,232,240,0.55)", fontSize: "0.85rem", lineHeight: 1.8 }}>
                Began at the intersection of computational biology and data infrastructure—architecting systems to handle the most complex and high-dimensional datasets in modern science. This foundation in scientific rigor, data governance, and production-grade engineering discipline migrated directly into enterprise operational systems.
              </p>
              <div style={{
                marginTop: "1.5rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(0,212,255,0.07)",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}>
                {[
                  "Applied ML systems across logistics, life sciences, and manufacturing",
                  "Mathematical optimization frameworks deployed in production OR environments",
                  "Enterprise data infrastructure at regulated-industry scale",
                  "Agentic automation pipelines for document-heavy operational workflows",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                    <Cpu size={12} color="#00D4FF" style={{ flexShrink: 0, marginTop: "3px", opacity: 0.6 }} />
                    <span style={{ color: "rgba(226,232,240,0.5)", fontSize: "0.82rem", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section style={{ padding: "5rem 2rem", background: "rgba(7,14,28,0.6)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Execution Pillars</span>
            <h2 style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "#E2E8F0",
              marginTop: "0.75rem",
              letterSpacing: "-0.01em",
            }}>
              How We Work
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {pillars.map((pillar) => (
              <div key={pillar.label} className="glass-card" style={{ padding: "2rem", borderRadius: "4px", borderTop: `2px solid ${pillar.color}` }}>
                <pillar.icon size={20} color={pillar.color} style={{ opacity: 0.8, marginBottom: "1rem" }} />
                <h3 style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#E2E8F0",
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
                }}>
                  {pillar.label}
                </h3>
                <p style={{ color: "rgba(226,232,240,0.48)", fontSize: "0.83rem", lineHeight: 1.75 }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-domain expertise */}
      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <span className="section-label">Multidisciplinary Agility</span>
            <h2 style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "#E2E8F0",
              marginTop: "0.75rem",
              letterSpacing: "-0.01em",
              maxWidth: "500px",
            }}>
              Domain Expertise That Crosses Verticals
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {expertiseDomains.map((domain, i) => (
              <div
                key={domain.area}
                style={{
                  padding: "2rem",
                  borderTop: i === 0 ? "1px solid rgba(0,212,255,0.08)" : "none",
                  borderBottom: "1px solid rgba(0,212,255,0.08)",
                  display: "grid",
                  gridTemplateColumns: "280px 1fr",
                  gap: "2rem",
                  alignItems: "center",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#E2E8F0",
                }}>
                  {domain.area}
                </div>
                <p style={{ color: "rgba(226,232,240,0.48)", fontSize: "0.85rem", lineHeight: 1.75 }}>{domain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 2rem", textAlign: "center" }}>
        <h2 style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
          color: "#E2E8F0",
          marginBottom: "1.5rem",
          letterSpacing: "-0.01em",
        }}>
          Ready to Work with Engineers Who Think in Systems?
        </h2>
        <Link href="/contact" className="btn-primary">
          Start a Technical Conversation <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
