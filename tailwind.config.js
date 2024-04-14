/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#9dffd3',
                secondary: '#124255',
                dark: '#0e1d23',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-primary':
                    'radial-gradient(ellipse at 50% 50%, rgba(157, 255, 211, 0.20) 0%, rgba(255, 0, 0, 0) 50%);',
                'gradient-secondary':
                    'radial-gradient(ellipse at 50% 50%, rgba(18, 66, 85, 0.70) 0%, rgba(255, 0, 0, 0) 46%);',
                'grad-svg': "url('/blury_v1.svg')",
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            backgroundColor: {
                dark: '#0e1d23',
                bright: '#FFFFFF',
            },
            textColor: {
                dark: '#E9EDEB',
                bg: '#0e1d23',
                bright: '#000000',
            },
            aspectRatio: {
                '100/6': '10/.6',
                '10/2': '10/2',
                '10/4': '10/4',
            },
            margin: {
                15: '60px',
            },
            width: {
                175: '700px',
            },
        },
    },
    plugins: [],
}
