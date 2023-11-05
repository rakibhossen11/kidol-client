/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Bebas: ['Bebas Neue', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
      Ubuntuu: ['Ubuntu', 'sans-serif'],
    },
    colors: {
      Blue: '#003580',
      Cyan: '#009fe3',
      Yellow: '#feba02',
      Zinc: '#666',
      Cyanblue: '#f2f6fa',
    }
  },
  plugins: [require("daisyui"),require('flowbite/plugin')],
}

