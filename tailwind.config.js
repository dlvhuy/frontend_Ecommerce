/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "mainColorDark": "#213555",
      "mainColor": "#3E5879",
      "textColorLight":"#eaeef4",
      "textColorDark": "#D8C4B6",
      "textColor": "#F5EFE7",
      "red": "#FF0000",
      "lightTextColor": "#f9f6f1 ",
      "lightTextColor2": "#eee3d5 ",
      "white": "#FFFFFF",
      "red-100": "#fee2e2",
      "red-400": "#f87171",
      "red-700": "#b91c1c",
      "navBarText":"#2c3e50"
      
      
    },
    extend: {},
  },
  plugins: [],
}
//require('@tailwindcss/line-clamp'),
