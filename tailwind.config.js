/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primaryBg: '#124759',
          secondaryBg: '#F5F5F5',
          primaryText: '#EDEDED',
          secondaryText: '#AAB4C2',
          accent1: '#f9aa33',
          accent2: '#0066FF',
          accent3: '#03FFA7',
      },
      fontFamily: {
        'myriadpro': ['MyriadPro', 'sans'],
      },
    },
  },
  plugins: [],
}