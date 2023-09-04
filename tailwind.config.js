/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"], theme: {
        extend: {
            colors: {
                'grey': 'var(--website-colors, #787878)',
                'green': 'var(--website-colors, #228B22)',
                'blue': 'var(--website-colors, #1164B4);',
                'red': '#BC0000',
                'half-opacity': 'rgba(0, 0, 0, 0.45)',

            }, backgroundImage: {
                'mountains': "url('/src/assets/images/mountains.png')",
                'main': 'url("/src/assets/images/main-bg.png")',
                'sendCode': '#626262'
            }, backgroundColor: {
                'blue': 'var(--website-colors, #1164B4);',
                'light-white': 'var(--website-colors, #E9E7E7)',
                'grey': 'rgba(255, 255, 255, 0.30)',
                'dark-blue': 'rgba(38, 43, 100, 0.30)',
                'yellow': 'var(--mob-yellow, #FFC506)',
                'green': '#228B22',
                'red': '#BC0000',
            }, boxShadow: {
                "bigBtn": '0px 9px 16px 2px rgba(0, 0, 0, 0.25)',
                "dropdown-menu": '0px 8px 8px 0px rgba(0, 0, 0, 0.25)',
                "smallBtn": '0px 4px 8px 0px rgba(0, 0, 0, 0.25)',
            }, borderColor: {
                'red': '#BC0000',
                'grey': 'var(--website-colors, #A1A1A1)',
                'blue': 'var(--website-colors, #1164B4);',
                'dropdown': "rgba(28, 32, 74, 0.40)",
                'dark-grey': 'rgba(0, 0, 0, 0.14)',
            }, fontSize: {
                sn: ["18px", "25.2px"],
                sm: ["24px", "33.6px"],
                ab: ["18px", "normal"],
                sx: ["16px", "22.4px"],
                ot: ["28px", "35px"]
            },

        },
    }, plugins: [],
}


// import image from './src/assets/images/chuy.png'