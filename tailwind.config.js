/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'yellow-sea': {
          50: '#fef9ec',
          100: '#fdedc8',
          200: '#fad98d',
          300: '#f7c152',
          400: '#f5a623',
          500: '#ef8611',
          600: '#d3640c',
          700: '#af440e',
          800: '#8f3511',
          900: '#752c12',
          950: '#431505',
        },
      },
    },
  },
  plugins: [],
}
