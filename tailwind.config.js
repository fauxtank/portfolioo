/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5'
        },
        secondary: {
          DEFAULT: '#14b8a6',
          light: '#0ea5e9',
          dark: '#0891b2'
        },
        accent: {
          DEFAULT: '#f43f5e',
          light: '#f59e0b',
          dark: '#e11d48'
        }
      }
    },
  },
  plugins: [],
};