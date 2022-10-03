/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{html,js,astro}',
    './src/pages/**/*.{html,js,astro}',
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#F8F8F8',
        primary: '#3F3BF3',
        'primary-black': '#000000E5',
      },
    },
  },
  plugins: [],
};
