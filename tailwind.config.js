/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'blue': 'var(--website-colors, #1164B4);'
      }
    },
  },
  plugins: [],
}

