const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      // Brand colours come from CSS variables in app/globals.css
      colors: {
        brand: "hsl(var(--c-primary) / <alpha-value>)",
        blush: "hsl(var(--c-accent) / <alpha-value>)",
        mist: "hsl(var(--c-tint) / <alpha-value>)",
      },
    },
  },
  plugins: [heroui()],
};
