/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#406965',
          light: '#4d7f7a',
          dark: '#385c59'
        },
        secondary: {
          DEFAULT: '#baa288',
          light: '#c5b19b',
          dark: '#a69177'
        },
        dark: {
          DEFAULT: '#232b2b',
          light: '#2d3737',
          dark: '#1a2020'
        }
      }
    },
  },
  plugins: [],
};