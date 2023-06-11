/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'b&w': {
          1: '#FFFFFF',
          2: '#F3F3F3',
          2.1: '#E6E2E2',
          3: '#979999',
          4: '#717171',
          5: '#2E2E2E',
        },
        primary: {
          1: '#141B3E',
          3: '#29367C',
        },
        accent_green: '#64A759',
        accent_blue: '#66A8E4',
        accent_yellow: '#EC9617',
      },
      fontFamily: {
        sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
      },
    },
    plugins: [],
  },
};
