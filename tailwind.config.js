/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'prize-color': 'rgba(58, 58, 58, 0.8)',
        'app-summary-color': 'rgba(58, 58, 58, 0.7)',
      },
    },
  },
  plugins: [],
}
