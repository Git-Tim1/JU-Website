/* @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'background-white': '#FDFDFD',
      'accent-blue-1': '#3FA9D5',
      'accent-blue-2': '#458AFF',
      'accent-blue-3': '#1A2A4B',
      'accent-blue-3-hover': '#2b4780',
      'decent-blue': '#F3F9FF',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '7/8': '7 / 8',
        '3/4': '3 / 4',
      },
    },
    screens: {
      '4xs': '350px',
      '3xs': '420px',
      'xxs': '475px',
      'xs': '550px',
      'm-l': '900px',
      ...defaultTheme.screens,
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
}
