import Link from "next/link";
import { ArrowRight, Activity, GitBranch, BarChart2, Cpu } from "lucide-react";

const solutions = [
  {
    id: "life-sciences",
    icon: Activity,
    color: "#00D4FF",
    tag: "Life Sciences & Healthcare",
    title: "Predictive Intelligence for Clinical & Scientific Data",
    intro: "Life sciences data is complex and high-stakes. Neural Vector Systems delivers predictive systems and signal analysis built for real clinical operations, not one-off research demos.",
    challenges: [
      "Multi-omics and biometric data with extreme dimensionality and noise",
      "Irregular time-series from clinical instrumentation and wearable sensors",
      "Strict regulatory and HIPAA compliance requirements on data governance",
      "Slow computational pipelines limiting real-time clinical decision support",
    ],
    approaches: [
      "Signal denoising for high-frequency biometric telemetry",
      "Multi-stage ML classification with calibrated confidence outputs",
      "Secure, HIPAA-compliant data warehouse architecture on audited cloud platforms",
      "Clinical alert APIs integrated directly into existing EHR/LIMS workflows",
    ],
    outcome: "Accelerated computational timelines, actionable predictive outputs at clinical confidence thresholds, and data infrastructure built to regulatory standards.",
  },
  {
    id: "logistics",
    icon: GitBranch,
    color: "#7B5CF0",
    tag: "Logistics & Supply Chain",
    title: "Margin Optimization for Complex Fulfillment Networks",
    intro: "Logistics margins are often eroded by decision complexity that manual dispatch cannot keep up with. Real-time optimization converts that complexity into a measurable advantage.",
    challenges: [
      "Dynamic carrier pricing creating unpredictable cost exposure on long-haul routes",
      "Competing constraints between fuel efficiency, delivery commitments, and load optimization",
      "Supply chain variability causing downstream cascading delays",
      "Manual dispatch decisions leaving significant optimization headroom unexplored",
    ],
    approaches: [
      "Custom optimization models encoding physical and contractual constraints",
      "Real-time carrier rate API integration for live cost optimization",
      "Heuristic routing frameworks for multi-depot, multi-stop network optimization",
      "ERP-integrated dispatch recommendation engine with human override controls",
    ],
    outcome: "Validated 17% margin uplift with no delivery commitment degradation. Dispatch decisions shifted from manual heuristics to optimized recommendations.",
  },
  {
    id: "manufacturing",
    icon: BarChart2,
    color: "#0EA5E9",
    tag: "Process Manufacturing",
    title: "Sensor Intelligence for Process Optimization",
    intro: "Process manufacturing generates continuous sensor telemetry that represents an untapped reservoir of predictive intelligence. Neural Vector Systems converts raw process data into closed-loop optimization and anomaly detection systems.",
    challenges: [
      "Reaction and process curves with complex, non-linear dynamics",
      "Sensor drift and noise obscuring early-warning anomaly signals",
      "Manual quality control creating sampling bottlenecks on high-velocity lines",
      "Yield losses from suboptimal input ratios or batch timing decisions",
    ],
    approaches: [
      "Multivariate time-series regression for process curve modeling",
      "Statistical process control with adaptive anomaly detection thresholds",
      "Edge-deployed computer vision for high-velocity production line QA",
      "Input optimization models targeting yield maximization under cost constraints",
    ],
    outcome: "Sensor-based early warning of process deviations before they reach critical thresholds. Vision-based QA automation replacing manual inspection sampling.",
  },
  {
    id: "enterprise",
    icon: Cpu,
    color: "#A78BFA",
    tag: "Enterprise Operations",
    title: "Intelligent Automation for Document-Heavy Workflows",
    intro: "Enterprise organizations lose thousands of hours annually to manual document processing, data transcription, and reconciliation tasks. Agentic automation pipelines eliminate this overhead while improving accuracy.",
    challenges: [
      "High-volume, variable-format vendor documents requiring manual data entry",
      "ERP integration gaps creating reconciliation overhead and error propagation",
      "Compliance workflows dependent on manual document review and flagging",
      "Operational staff capacity consumed by low-value, high-error transcription tasks",
    ],
    approaches: [
      "Layout-aware OCR with adaptive extraction for variable document structures",
      "Agentic verification checks that cross-reference extracted fields against database records",
      "Secure ERP write integrations with full audit trails and exception queuing",
      "Automated compliance flagging with risk-scoring for exception routing",
    ],
    outcome: "10+ operational hours recaptured per branch per week. Data entry errors reduced by over 90% versus manual processing baselines.",
  },
];

export default function SolutionsPage() {
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
          background: "radial-gradient(ellipse 60% 50% at 40% 0%, rgba(123,92,240,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
          <span className="section-label">Value by Vertical</span>
          <h1 style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            letterSpacing: "-0.02em",
            color: "#E2E8F0",
            marginTop: "0.75rem",
            marginBottom: "1.25rem",
          }}>
            Industry <span className="gradient-text">Solutions</span>
          </h1>
          <p style={{
            color: "rgba(226,232,240,0.5)",
            fontSize: "1rem",
            lineHeight: 1.75,
            maxWidth: "600px",
          }}>
            The same mathematical frameworks—deployed in the language of your specific industry. We speak logistics margin and process dynamics and clinical confidence intervals.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-x" style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "3rem" }}>
          {solutions.map((sol) => (
            <div
              key={sol.id}
              id={sol.id}
              className="glass-card"
              style={{ padding: "3rem", borderRadius: "4px" }}
            >
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.5rem" }}>
                <div style={{
                  width: "42px",
                  height: "42px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${sol.color}12`,
                  border: `1px solid ${sol.color}28`,
                  borderRadius: "4px",
                }}>
                  <sol.icon size={20} color={sol.color} />
                </div>
                <span style={{
                  fontFamily: "var(--font-ibm-mono), monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: sol.color,
                  opacity: 0.75,
                }}>
                  {sol.tag}
                </span>
              </div>

              <h2 style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                color: "#E2E8F0",
                marginBottom: "1rem",
                letterSpacing: "-0.01em",
                lineHeight: 1.25,
                maxWidth: "700px",
              }}>
                {sol.title}
              </h2>
              <p style={{
                color: "rgba(226,232,240,0.5)",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                maxWidth: "700px",
                marginBottom: "2rem",
              }}>
                {sol.intro}
              </p>

              <div className="glow-line" style={{ marginBottom: "2rem" }} />

              <div className="stack-below-md stack-below-md--gap-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
                <div>
                  <div style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(226,232,240,0.28)",
                    marginBottom: "0.75rem",
                  }}>
                    Challenges We Resolve
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {sol.challenges.map((c) => (
                      <li key={c} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                        <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgba(226,232,240,0.2)", flexShrink: 0, marginTop: "0.45rem" }} />
                        <span style={{ color: "rgba(226,232,240,0.48)", fontSize: "0.83rem", lineHeight: 1.6 }}>{c}</span>
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
                    color: "rgba(226,232,240,0.28)",
                    marginBottom: "0.75rem",
                  }}>
                    Our Approach
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {sol.approaches.map((a) => (
                      <li key={a} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                        <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: sol.color, flexShrink: 0, marginTop: "0.45rem", opacity: 0.6 }} />
                        <span style={{ color: "rgba(226,232,240,0.55)", fontSize: "0.83rem", lineHeight: 1.6 }}>{a}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{
                    marginTop: "1.5rem",
                    padding: "1rem 1.25rem",
                    background: `${sol.color}08`,
                    border: `1px solid ${sol.color}20`,
                    borderRadius: "3px",
                    borderLeft: `3px solid ${sol.color}`,
                  }}>
                    <div style={{
                      fontFamily: "var(--font-ibm-mono), monospace",
                      fontSize: "0.58rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: sol.color,
                      opacity: 0.7,
                      marginBottom: "0.4rem",
                    }}>
                      Business Outcome
                    </div>
                    <p style={{ color: "rgba(226,232,240,0.65)", fontSize: "0.82rem", lineHeight: 1.7 }}>{sol.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-x" style={{ padding: "5rem 2rem", textAlign: "center" }}>
        <h2 style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
          color: "#E2E8F0",
          marginBottom: "1.5rem",
          letterSpacing: "-0.01em",
        }}>
          Don&apos;t See Your Vertical?
        </h2>
        <p style={{ color: "rgba(226,232,240,0.45)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem", fontSize: "0.9rem", lineHeight: 1.7 }}>
          The core algorithmic frameworks apply across industries. Bring your operational challenge and we will map the engineering approach.
        </p>
        <Link href="/contact" className="btn-primary">
          Schedule a Technical Consultation <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
