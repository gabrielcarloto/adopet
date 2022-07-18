/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-150%)' },
          '100%': { transform: 'translateX(120%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s ease-in-out infinite',
      },
      boxShadow: {
        sm: '0px 2px 2px rgba(0, 0, 0, 0.15);',
      },
      backgroundPosition: {
        'left-bottom': 'left bottom 8rem',
        'right-top-5': 'right top 5rem',
        'right-top-10': 'right top 10rem',
        'right-top-12': 'right top 12rem',
        'right-top-15': 'right top 15rem',
      },
      backgroundSize: {
        80: '80px',
        110: '110px',
        190: '190px',
        350: '350px',
        560: '560px',
        '95%': '95%',
      },
      backgroundImage: {
        'shape-1': 'url(/src/assets/shape-1.svg)',
        'shape-2': 'url(/src/assets/shape-2.svg)',
        'shape-3': 'url(/src/assets/shape-3.svg)',
        paws: 'url(/src/assets/paws.svg)',
        skeleton:
          'linear-gradient(to right, rgba(188, 188, 188, 0) 0, rgba(188, 188, 188, 0.2) 40%, rgba(188, 188, 188, 0.3) 60%, rgba(188, 188, 188, 0))',
      },
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      colors: {
        'brand-primary': '#3772FF',
        'brand-secondary': '#36D6AD',
        'brand-tertiary': '#FC7071',
        'brand-coral-100': '#FF9D9E',
        'brand-cream': '#FCF0E3',
        'brand-gray-50': '#F7F7F7',
        'brand-gray-300': '#BCBCBC',
        'brand-gray-500': '#737380',
      },
    },
  },
  plugins: [],
};
