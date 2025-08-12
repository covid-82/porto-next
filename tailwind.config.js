/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
          500: "#6366f1",
          700: "#4338ca"
        }
      },
      dropShadow: {
        glow: "0 0 30px rgba(99,102,241,0.45)"
      }
    },
  },
  darkMode: "class",
  plugins: [],
};
