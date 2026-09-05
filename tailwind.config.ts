import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#F7F6F2",
        "bg-secondary": "#EEEDE7",
        surface: "#FFFFFF",
        border: "#D7DBE0",
        "steel-blue": "#1C3D5A",
        ink: "#16232E",
        accent: "#F4671E",
        "text-secondary": "#5C6B77",
        "text-tertiary": "#93A0AA",
        success: "#1E8E5A"
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"]
      },
      boxShadow: {
        paper: "0 2px 8px rgba(22,35,46,0.06)"
      },
      borderRadius: {
        card: "8px",
        control: "6px"
      }
    }
  },
  plugins: []
};

export default config;
