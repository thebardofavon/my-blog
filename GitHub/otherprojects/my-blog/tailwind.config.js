/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          700: '#5C4033',
          500: '#A0522D',
          300: '#D2B48C',
        },
      },
    },
  },
  plugins: [],
}

