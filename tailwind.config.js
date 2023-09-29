/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primaryBg: '#353377',
          secondaryBg: '#F5F5F5',
          primaryText: '#EDEDED',
          secondaryText: '#4E657B',
          accent1: '#30C3A6',
          accent2: '#0066FF',
          accent3: '#03FFA7',
      }
    },
  },
  plugins: [],
}