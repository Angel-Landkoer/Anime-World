/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': "467px",
        'xl': "1200px"
      },
      colors: {
        'blueBikini': "#01BCF3",
        'ferry': "#3b4248",
        'shadeAmber': "#ff7e00",
        'yellowOrange': "#ffae42",
        'white': "#fff",
        'black': "#000",
        'suzuGrey': "#9da1a4",
        'peakPoint': "#777f82",
        'whiteBlue': "#cfd8dc",
        'poisonIvy': "#01ae43",
        'toryBlue': "#0d47a1",

        'bluePlaza': "#2F353A",
        'satinDeepBlack': "#1D2124",
        'redSalsa': "#fb3447",
      },
    },
  },
  plugins: [],
}
