/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        future: ['Future', 'sans-serif'],
        sans: ['Helvetica', 'Roboto', 'Inter', 'sans-serif'],
        mono: ['Roboto Mono'],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
