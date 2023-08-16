/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'blue': 'var(--website-colors, #1164B4);',
        'yellow': 'var(--website-colors, #FFC506)',
        'main-active': 'rgba(255, 255, 255, 0.30)',
        'main-non-active': 'rgba(38, 43, 100, 0.30)',
        'hotel-option': 'var(--website-colors, #228B22)',
      },
      backgroundImage: {
        'mainpage-main': "url('/src/assets/images/mainpage-main.png')",
        'hotel-card': "url('/src/assets/images/hotel-image.png')",
      },
      colors:  {
        'grey': 'var(--website-colors, #787878)',
        'green': 'var(--website-colors, #228B22)',
      },
      borderRadius: {
        'hotel-option': '0px 20px 20px 0px'
      },
      boxShadow: {
        'auth': '0px 9px 16px 2px rgba(0, 0, 0, 0.25)',
        'review': '0px 0px 30px 0px rgba(0, 0, 0, 0.40)',
      },
      borderColor: {
        'grey': 'var(--website-colors, #A1A1A1)',
      },
    },
  },
  plugins: [],
}

