/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af",
          800: "#1e3a8a",
          900: "#172554",
        },
      },
      boxShadow: {
        glow: "0 10px 30px rgba(37,99,235,0.35)",
      },
    },
  },
  plugins: [],
  extend: {
  boxShadow: {
    card: "0 8px 30px rgba(15,23,42,.08)",
    cardHover: "0 20px 45px rgba(15,23,42,.12)",
  },
  colors: {
    brand: {
      50: "#EFF6FF",
      500: "#2563EB",
    },
  },
}
};