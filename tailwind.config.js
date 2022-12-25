/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        goyang : 'goyang 1s ease-in-out infinite'
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        128: "32rem",
        144: "36rem",
      },
      fontFamily :{
        inter: ['Inter']
      },
      keyframes: {
        goyang: {
          '0%, 100%': {transform: 'rotate (-3deg)'},
          '50%': {transform: 'rotate(3deg)'},
        },
      },
    },
  },
  plugins: [],
};
