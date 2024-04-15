/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#35856E",
          secondary: "#25B88E",
          accent: "#00EBA8",
          text: "#000",
          placeholder: "#333",
          border: "#666",
        },
        dark: {
          primary: "#293330",
          secondary: "#315248",
          accent: "#00EBA855",
          text: "#ddd",
          placeholder: "#bbb",
          border: "#ccc",
        }
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem"
      }
    }
  },
  plugins: []
};
