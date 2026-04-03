import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── BRAND COLORS ─────────────────────────────────────────────────
      // Change these to match your brand palette
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E2C97E",
          dark: "#A07830",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          light: "#2A2A2A",
          mid: "#333333",
        },
      },
      // ─── FONTS ────────────────────────────────────────────────────────
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      // ─── ANIMATIONS ───────────────────────────────────────────────────
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease forwards",
        fadeIn: "fadeIn 1s ease forwards",
        shimmer: "shimmer 3s linear infinite",
        scaleIn: "scaleIn 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
