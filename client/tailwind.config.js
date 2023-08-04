/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: { 
    extend: {

      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui", "@tailwindcss/forms")],
  daisyui: {
    themes: ['synthwave']
  }
}
