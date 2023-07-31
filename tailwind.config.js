/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'templates/**/*.html',
    'templates/*.html',
    'static/js/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "CafeFrancoise",
        secondary: "DalekPinpointBold",
      },
    },
  },
  plugins: [],
}

