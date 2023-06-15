/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#00b4ec",
        secondary: "#262773",
        accent: "#f091a9",
        "primary-light": "#e5f7fd",
        "accent-dark": "#a0c317",
        "accent-light": "#00b4ec",
        "accent-accent": "#f091a9",
        "accent-abstract": "#005369",
        "program-button": "#e5f7fd",
        "session-second": "#97b916",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
