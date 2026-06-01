import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: "clinical-prediction",
    tag: "Life Sciences",
    tagColor: "#00D4FF",
    client: "Global Life Sciences Instrumentation Group",
    title: "Predictive Event Modeling for Clinical Data Streams",
    executiveSummary:
      "A global instrumentation provider was unable to extract actionable predictive intelligence from high-volume biometric data streams, limiting their platform's clinical decision support capabilities and stalling enterprise sales cycles.",
    bottleneck:
      "Raw sensor telemetry contained significant noise, multi-modal distributions, and irregular sampling intervals—making standard ML pipelines produce unreliable predictions with unacceptable false-positive rates.",
    architecture: ["Sensor data ingestion → noise cleanup → feature engineering → predictive scoring → confidence checks → clinical alert delivery"],
    solution:
      "Built a multi-stage signal cleanup and prediction pipeline before feature extraction. The system outputs calibrated confidence scores that clinical teams can use with clear precision-recall tradeoffs by severity tier.",
    metric: "94%",
    metricLabel: "Prediction Accuracy",
    outcomes: [
      "High-accuracy forecasting of acute anomalies at clinically actionable confidence thresholds",
      "Precision-recall curves documented across four clinical severity classifications",
      "Production deployment integrated directly into existing clinical dashboard infrastructure",
    ],
  },
  {
    id: "logistics-margin",
    tag: "Logistics & Supply Chain",
    tagColor: "#7B5CF0",
    client: "Mid-Market Regional Freight & Fulfillment Operator",
    title: "Constraint-Aware Margin Optimization Engine",
    executiveSummary:
      "A regional logistics operator was experiencing persistent margin compression on line-haul routes due to the complexity of simultaneously optimizing fuel costs, carrier rate volatility, weight constraints, and delivery commitments—a problem beyond the resolution of manual dispatch tools.",
    bottleneck:
      "Dispatch decisions were made heuristically by experienced operators, leaving significant optimization headroom unexplored. The combinatorial complexity of 50+ active routes with dynamic variables exceeded human cognitive bandwidth.",
    architecture: ["Live rate feed → constraints processing → optimization run → scenario analysis → dispatch recommendation → ERP integration"],
    solution:
      "Constructed a custom optimization model covering route constraints, fuel overhead, real-time carrier pricing, and delivery penalties in one objective. The system generates dispatch recommendations in under 3 seconds.",
    metric: "+17%",
    metricLabel: "Margin Uplift",
    outcomes: [
      "17% margin uplift across optimized route network with zero delivery commitment violations",
      "Dynamic real-time re-optimization on rate change events and load modifications",
      "Full ERP integration enabling automated dispatch workflow with human override controls",
    ],
  },
  {
    id: "document-automation",
    tag: "Enterprise Automation",
    tagColor: "#0EA5E9",
    client: "Multi-Branch Distribution & Wholesale Company",
    title: "Intelligent Document Extraction & ERP Ingestion Array",
    executiveSummary:
      "Accounts payable teams across multiple branches were spending 10+ hours per week manually transcribing variable-format vendor invoices, purchase orders, and regulatory documents into ERP systems—with error rates creating downstream reconciliation overhead.",
    bottleneck:
      "Vendor document formats varied significantly. Traditional template-based OCR tools achieved only 60-70% field extraction accuracy on unstructured layouts, requiring heavy manual review. No existing solution handled cross-document verification against database records.",
    architecture: ["Document intake → layout analysis → OCR extraction → agentic verification → database reconciliation → ERP writeback → audit log"],
    solution:
      "Built an agentic orchestration system combining layout-aware document analysis, adaptive OCR extraction, and verification against purchase orders and vendor records before ERP writeback. Discrepancies are routed to human review with pre-populated correction fields.",
    metric: "10+ hrs",
    metricLabel: "Saved Per Week / Branch",
    outcomes: [
      "Full automation of straight-through invoice processing for conforming documents",
      "10+ operational hours recaptured per branch per week—redeployed to exception management",
    ],
  },
  {
    id: "computer-vision-qa",
    tag: "Industrial Manufacturing",
    tagColor: "#A78BFA",
    client: "Consumer Goods Packaging & Production Line Operator",
    title: "Industrial Computer Vision & Quality Assurance Array",
    executiveSummary:
      "A high-velocity production line relied on barcode and QR tracking codes for automated downstream logistics. Motion blur from line speed and vibration made codes unreadable with commodity camera hardware, forcing costly investments in specialized industrial cameras or unacceptable automation failure rates.",
    bottleneck:
      "Specialized industrial cameras capable of blur-free capture at the required line speed carried a 6-8x unit cost premium and required proprietary integration ecosystems. The client needed a software-defined solution deployable on existing hardware.",
    architecture: ["Raw frame capture → blur estimation → image restoration → visual enhancement → code detection → tracking API"],
    solution:
      "Engineered an edge-deployed image restoration pipeline tuned for motion blur and production-line vibration. The pipeline runs in under 40ms per frame on standard industrial edge hardware.",
    metric: "−80%",
    metricLabel: "Hardware Cost Reduction",
    outcomes: [
      "80% reduction in hardware implementation overhead versus specialized camera deployment",
      "Code read success rate exceeding 98.5% at production line speed on commodity hardware",
      "Fully edge-deployed: no cloud inference latency, compatible with air-gapped factory networks",
    ],
  },
];

export default function CaseStudiesPage() {
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
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(123,92,240,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
          <span className="section-label">The Evidence</span>
          <h1 style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            letterSpacing: "-0.02em",
            color: "#E2E8F0",
            marginTop: "0.75rem",
            marginBottom: "1.25rem",
          }}>
            Case <span className="gradient-text">Studies</span>
          </h1>
          <p style={{
            color: "rgba(226,232,240,0.5)",
            fontSize: "1rem",
            lineHeight: 1.75,
            maxWidth: "600px",
          }}>
            Anonymized proof-of-scale. Every project documented through a strict Problem → Architecture → Solution → Quantified Outcome framework.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-x" style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "3rem" }}>
          {caseStudies.map((cs) => (
            <article
              key={cs.id}
              id={cs.id}
              className="glass-card"
              style={{ padding: "3rem", borderRadius: "4px" }}
            >
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                <div>
                  <span style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: cs.tagColor,
                    padding: "3px 10px",
                    border: `1px solid ${cs.tagColor}33`,
                    borderRadius: "2px",
                    display: "inline-block",
                    marginBottom: "0.75rem",
                  }}>
                    {cs.tag}
                  </span>
                  <h2 style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                    color: "#E2E8F0",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.25,
                    maxWidth: "640px",
                  }}>
                    {cs.title}
                  </h2>
                  <p style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.65rem",
                    color: "rgba(226,232,240,0.3)",
                    letterSpacing: "0.08em",
                    marginTop: "0.4rem",
                  }}>
                    {cs.client}
                  </p>
                </div>
                <div style={{
                  textAlign: "right",
                  padding: "1.25rem 1.5rem",
                  border: `1px solid ${cs.tagColor}25`,
                  borderRadius: "4px",
                  background: `${cs.tagColor}08`,
                  minWidth: "140px",
                }}>
                  <div style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "2.5rem",
                    fontWeight: 500,
                    color: cs.tagColor,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}>
                    {cs.metric}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(226,232,240,0.3)",
                    marginTop: "0.35rem",
                    lineHeight: 1.4,
                  }}>
                    {cs.metricLabel}
                  </div>
                </div>
              </div>

              <div className="glow-line" style={{ marginBottom: "2rem" }} />

              <div className="stack-below-md stack-below-md--gap-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
                {/* Left column */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                  <div>
                    <div className="section-label" style={{ marginBottom: "0.6rem" }}>Executive Summary</div>
                    <p style={{ color: "rgba(226,232,240,0.55)", fontSize: "0.85rem", lineHeight: 1.8 }}>{cs.executiveSummary}</p>
                  </div>
                  <div>
                    <div className="section-label" style={{ marginBottom: "0.6rem" }}>The Operational Bottleneck</div>
                    <p style={{ color: "rgba(226,232,240,0.5)", fontSize: "0.85rem", lineHeight: 1.8 }}>{cs.bottleneck}</p>
                  </div>
                </div>

                {/* Right column */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                  <div>
                    <div className="section-label" style={{ marginBottom: "0.75rem" }}>Technical Approach</div>
                    <div style={{
                      background: "rgba(0,0,0,0.3)",
                      border: "1px solid rgba(0,212,255,0.08)",
                      borderRadius: "4px",
                      padding: "1rem",
                    }}>
                      {cs.architecture.map((step) => (
                        <p key={step} style={{
                          fontFamily: "var(--font-ibm-mono), monospace",
                          fontSize: "0.68rem",
                          color: "rgba(0,212,255,0.6)",
                          lineHeight: 1.8,
                          letterSpacing: "0.02em",
                        }}>
                          {step}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="section-label" style={{ marginBottom: "0.6rem" }}>The Engineered Solution</div>
                    <p style={{ color: "rgba(226,232,240,0.5)", fontSize: "0.85rem", lineHeight: 1.8 }}>{cs.solution}</p>
                  </div>

                  <div>
                    <div className="section-label" style={{ marginBottom: "0.75rem" }}>Quantified Business Return</div>
                    <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {cs.outcomes.map((outcome) => (
                        <li key={outcome} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                          <div style={{
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            background: cs.tagColor,
                            flexShrink: 0,
                            marginTop: "0.45rem",
                            opacity: 0.7,
                          }} />
                          <span style={{ color: "rgba(226,232,240,0.6)", fontSize: "0.83rem", lineHeight: 1.6 }}>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-x" style={{ padding: "5rem 2rem", textAlign: "center" }}>
        <h2 style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
          color: "#E2E8F0",
          marginBottom: "1.5rem",
          letterSpacing: "-0.01em",
        }}>
          Have a Similar Operational Challenge?
        </h2>
        <Link href="/contact" className="btn-primary">
          Book a Technical Consultation <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
