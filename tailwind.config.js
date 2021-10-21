const { black, white, blueGray, coolGray, gray, trueGray, warmGray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose } = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      black: black,
      white: white,
      blueGray: blueGray,
      coolGray: coolGray,
      gray: gray,
      trueGray: trueGray,
      warmGray: warmGray,
      red: red,
      orange: orange,
      amber: amber,
      yellow: yellow,
      lime: lime,
      green: green,
      emerald: emerald,
      teal: teal,
      cyan: cyan,
      sky: sky,
      blue: blue,
      indigo: indigo,
      violet: violet,
      purple: purple,
      fuchsia: fuchsia,
      pink: pink,
      rose: rose
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
