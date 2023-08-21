/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                'blue': 'var(--website-colors, #1164B4);',
            },
            colors: {
                'grey': 'var(--website-colors, #787878)',
                'green': 'var(--website-colors, #228B22)',
            },
            boxShadow: {
                "btn": '0px 9px 16px 2px rgba(0, 0, 0, 0.25)',
            },
            borderColor: {
                'grey': 'var(--website-colors, #A1A1A1)',
                'blue': 'var(--website-colors, #1164B4);',

            },
        },
    },
    plugins: [],
}

