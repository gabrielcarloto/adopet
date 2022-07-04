/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundSize: {
        560: '560px',
        '95%': '95%',
      },
      backgroundImage: {
        'shape-1': 'url(/src/assets/shape-1.svg)',
        'shape-2': 'url(/src/assets/shape-2.svg)',
      },
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
