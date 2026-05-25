import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Neural Vector Systems | AI, Optimization & Data Systems Consulting",
  description:
    "Neural Vector Systems designs and deploys predictive systems, optimization engines, and cloud data platforms for complex operational challenges in logistics, life sciences, and process manufacturing.",
  keywords: [
    "AI consulting",
    "predictive systems",
    "operations optimization",
    "cloud data engineering",
    "data platform architecture",
    "CI/CD deployment",
    "enterprise automation",
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
