/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "clr-primary": "#FFF9F4",
        "clr-secondary": "#FFF9F4",
        "clr-accent": "#FFA943",
      },
      fontFamily: {
        sans: ['"Sora"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
