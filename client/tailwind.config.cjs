/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgreen: "#48AD7E",
        darkgreen: "#187D5D",
        darkblue: "#084C61",
        vanilla: "#FAD98D"
      }
    },

  },
  plugins: [
    // require("@tailwindcss/forms")
  ],
}