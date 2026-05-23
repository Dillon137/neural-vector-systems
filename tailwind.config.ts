import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#050A14",
        navy: {
          deep: "#070E1C",
          mid: "#0A1628",
          light: "#0F1F3D",
        },
        cyan: {
          glow: "#00D4FF",
          mid: "#0EA5E9",
          soft: "#38BDF8",
        },
        violet: {
          glow: "#7B5CF0",
          mid: "#8B5CF6",
          soft: "#A78BFA",
        },
        surface: "rgba(10,22,40,0.7)",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-ibm-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,212,255,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(123,92,240,0.1) 0%, transparent 50%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(0,212,255,0.05) 0%, rgba(123,92,240,0.05) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
        "glow-pulse": "glowPulse 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6", filter: "blur(8px)" },
          "50%": { opacity: "1", filter: "blur(16px)" },
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 30px rgba(0,212,255,0.2), 0 0 60px rgba(0,212,255,0.08)",
        "glow-violet": "0 0 30px rgba(123,92,240,0.2), 0 0 60px rgba(123,92,240,0.08)",
        "card": "0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
