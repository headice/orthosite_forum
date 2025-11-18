/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
          'hero_back': "url('./img/hero_back.jpg')",
      }
    },
  },
  plugins: [],
}
