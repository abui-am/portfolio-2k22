/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{html,js,ts,tsx,astro}',
    './src/pages/**/*.{html,js,ts,tsx,astro}',
    './src/layouts/**/*.{html,js,ts,tsx,astro}',
  ],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      colors: {
        'light-gray': '#F8F8F8',
        primary: '#3F3BF3',
        'primary-black': '#000000E5',
      },
    },
  },
};
