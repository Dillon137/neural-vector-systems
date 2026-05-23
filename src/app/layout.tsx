import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Neural Vector Systems | AI, Optimization & Data Systems Consulting",
  description:
    "Enterprise-grade machine learning, mathematical optimization, and data engineering for complex operational challenges. Neural Vector Systems engineers production-grade intelligent systems for logistics, life sciences, and process manufacturing.",
  keywords: [
    "AI consulting",
    "machine learning engineering",
    "operations research",
    "data pipeline architecture",
    "predictive analytics",
    "MLOps",
    "enterprise AI",
  ],
  openGraph: {
    title: "Neural Vector Systems",
    description: "Intelligent Systems Engineering for Complex Operational Data.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
