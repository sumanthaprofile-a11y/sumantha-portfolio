/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050608",
          900: "#0a0c10",
          800: "#10131a",
          700: "#161a23",
        },
        accent: {
          DEFAULT: "#38bdf8",
          soft: "#7dd3fc",
          deep: "#0284c7",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "76rem",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(56, 189, 248, 0.45)",
        "glow-sm": "0 0 20px -6px rgba(56, 189, 248, 0.35)",
        card: "0 20px 60px -20px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 50% 0%, rgba(56,189,248,0.08), transparent 60%)",
      },
      animation: {
        "spin-slow": "spin 14s linear infinite",
        float: "float 7s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};