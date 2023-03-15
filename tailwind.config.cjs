/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accentOrange: '#f9bc60',
        main: '#1A3A2D',
        accentGreen: '#d8fec6',
        txt: '#292525',
      },
      fontFamily: {
        poppins: ['Poppins, sans-serif'],
      },
    },
  },
  plugins: [],
};
