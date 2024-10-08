/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        defaultfont: ["Inter", "monospace"],
      },
      colors: {
        red: '#910203', 
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};