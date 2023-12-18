/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Noto: ["Noto Sans", "sans-serif"],
      Nunito: ["Nunito Sans", "sans-serif"],
      hammersmith: ["Hammersmith One", "sans-serif"],
      signika: ["Signika", "sans-serif"],
    },
    colors: {
      Blue: "#003580",
      Cyan: "#009fe3",
      Yellow: "#feba02",
      Zinc: "#666",
      Cyanblue: "#f2f6fa",
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
