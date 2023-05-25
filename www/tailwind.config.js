/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-roboto)"
      },
      backgroundColor: {
        "color-hover": ""
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px"
      },
      colors: {
        primary: "#F59E0B",
        secondary: "#8F1DDE",
        accent: "#DE8F07",
        neutral: "#181818",
        "base-100": "#f0f0f5",
        info: "#60a5fa",
        success: "#04D361",
        warning: "#fbbf24",
        error: "#dc2626"
      }
    }
  },
  plugins: []
};
