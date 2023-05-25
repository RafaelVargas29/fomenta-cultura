/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        titlecolor: "#322153",
        textcolor: "#6c6c80",
        info: "#60a5fa",
        success: "#34cb79",
        warning: "#fbbf24",
        error: "#dc2626"
      }
    }
  },
  plugins: []
};
