/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Grotesk: ['Schibsted Grotesk', 'serif'],
      Teko: ['Teko', 'serif']
    },
    extend: {},
  },
  plugins: [require('daisyui'),],
}