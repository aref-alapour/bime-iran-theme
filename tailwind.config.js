/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.html',
    './public/assets/js/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": {
          1: "#008BF9",
          2: "#007fe5",
        },
        "secondary": {
          1: "#FFC436",
          2: "#edb632",
        },
        "tertiary": '#0C356A',
        "gray": '#8E8C8C'
      },
      fontFamily: {
        "YekanBakh" : "YekanBakh",
      },
      spacing: {
        "30" : "7.5rem"
      },
      container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0.625rem',
      },
      },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
      addVariant('child-third', '& > * > a');
    },
    require('tailwind-scrollbar-hide')
  ],
}

