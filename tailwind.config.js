/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      colors: {
        'brand-primary': '#3772FF',
        'brand-secondary': '#36D6AD',
        'brand-tertiary': '#FC7071',
        'brand-cream': '#FCF0E3',
        'brand-gray-500': '#737380',
        'brand-gray-300': '#BCBCBC',
      },
    },
  },
  plugins: [],
};
