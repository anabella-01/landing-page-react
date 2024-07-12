/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-color":"#010851",
        "heading-color":"#9A7AF1",
        "light-grey": "#707070",
        "pink-color":"#EE9AE5",
        "schedule-color": "rgba(255,255,255,0.04)",
      },
    },
  },
  plugins: [],
}

