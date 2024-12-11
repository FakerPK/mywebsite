/* eslint-disable @typescript-eslint/no-var-requires */
const { pick, omit } = require("lodash")
const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#FF4500', // Orange
        secondary: '#000000', // Black
        accent: '#FFFFFF', // White
      },
    },
  },
  variants: {},
  plugins: [],
};
