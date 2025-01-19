/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'back-blue': '#0B1120',
        'span-blue': '#0EA5E9',
        'search-gray': '#D9D9D9',
        'cards': '#0E1A2D'
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Fira: ['Fira Code', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

