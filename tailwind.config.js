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
        'primary': '#9dffd3',
        'secondary': '#124255'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grad-svg': "url('/blurry_v1.svg')",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        //'darkv3': '#03151D',
        'dark': '#0e1d23',
        //'darkV2': '#124255', bit brighter to blueish
        'bright': '#FFFFFF'
      },
      textColor: {
        'dark': '#E9EDEB',
        'bright': '#000000',
      },
      aspectRatio: {
        '100/6': '10/.6',
        '10/2': '10/2'
      }

      //primary: '#00f284' greenish
    },
  },
  plugins: [],
}
