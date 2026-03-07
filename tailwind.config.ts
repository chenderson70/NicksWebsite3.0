import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e6450",
        background: "#f7f4ed",
        foreground: "#101311",
        muted: "#5c655f",
        "card-bg": "#ffffff",
        "card-border": "rgba(16, 19, 17, 0.1)",
        "card-border-hover": "rgba(30, 100, 80, 0.35)",
        ink: "#101311",
        paper: "#fbfaf7",
      },
      fontFamily: {
        heading: ["var(--font-sora)", "Sora", "sans-serif"],
        body: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      fontSize: {
        xs: ["0.82rem", { lineHeight: "1.35rem" }],
        sm: ["0.96rem", { lineHeight: "1.6rem" }],
      },
      boxShadow: {
        card: "0 24px 60px -36px rgba(15, 24, 21, 0.28)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;