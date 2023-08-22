/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                'blue': 'var(--website-colors, #1164B4);',
                'light-white': 'var(--website-colors, #E9E7E7)',
            },
            colors: {
                'grey': 'var(--website-colors, #787878)',
                'green': 'var(--website-colors, #228B22)',
            },
            boxShadow: {
                "bigBtn": '0px 9px 16px 2px rgba(0, 0, 0, 0.25)',
                "dropdown-menu": '0px 8px 8px 0px rgba(0, 0, 0, 0.25)',
                "smallBtn": '0px 4px 8px 0px rgba(0, 0, 0, 0.25)',
            },
            borderColor: {
                'grey': 'var(--website-colors, #A1A1A1)',
                'blue': 'var(--website-colors, #1164B4);',
                'dropdown': "rgba(28, 32, 74, 0.40)",
            },
        },
    },
    plugins: [],
}

