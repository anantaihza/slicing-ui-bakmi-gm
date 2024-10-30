import colors, { gray } from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primaryText": "#333333",
      "secondaryText": "#FA6D01",
      "subText": "#969CA0",
      "silver": "#B6B6B6",
      "gold": "#EEE5AA",
      "platinum": "#D0CCCB",
      "check": "#4DA501",
      "lockText": "#999999",
      "linkText": "#307BBD",
      "referText": "#297DC6",
      white: colors.white,
      gray: colors.gray
    }
  },
  plugins: [],
}