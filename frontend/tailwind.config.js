/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F4ED',
        beige: '#E7D8C9',
        bronze: '#A5723D',
        copper: '#B67A45',
        walnut: '#4B3425',
        charcoal: '#2A2A2A',
        terracotta: '#C7855C',
        sage: '#A8B59C',
      },
      boxShadow: {
        luxury: '0 30px 80px rgba(75, 52, 37, 0.12)',
      },
    },
  },
  plugins: [],
};
