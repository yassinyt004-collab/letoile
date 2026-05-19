import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050505",
          900: "#0a0a0a",
          800: "#111111",
          700: "#1a1a1a",
          600: "#222222",
          500: "#2a2a2a",
        },
        crimson: {
          DEFAULT: "#c1121f",
          50: "#fff1f2",
          100: "#ffd9dc",
          200: "#ffaeb4",
          300: "#ff7780",
          400: "#f03a48",
          500: "#c1121f",
          600: "#a10d18",
          700: "#7a0911",
          800: "#56060c",
          900: "#330305",
        },
        gold: {
          DEFAULT: "#f5b042",
          300: "#ffd27a",
          400: "#ffc15c",
          500: "#f5b042",
          600: "#d99325",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(193,18,31,0.3), transparent 60%)",
        "hero-grad":
          "linear-gradient(135deg, #0a0a0a 0%, #150505 50%, #0a0a0a 100%)",
        "red-grad":
          "linear-gradient(135deg, #f03a48 0%, #c1121f 50%, #7a0911 100%)",
        "gold-grad":
          "linear-gradient(135deg, #ffd27a 0%, #f5b042 50%, #d99325 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(193,18,31,0.4)",
        "glow-lg": "0 0 80px rgba(193,18,31,0.5)",
        premium:
          "0 25px 50px -12px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.04)",
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
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(193,18,31,0.4)" },
          "50%": { boxShadow: "0 0 50px rgba(193,18,31,0.8)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
