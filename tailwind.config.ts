import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0D0D0D",
        accent: "#00FFCC",
        accent2: "#FF0066"
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Inter', 'sans-serif']
      },
      boxShadow: {
        glow: "0 0 20px rgba(0,255,204,0.25)"
      }
    },
  },
  plugins: [],
};
export default config;
