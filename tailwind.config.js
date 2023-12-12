/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "principal" : ['"Be Vietnam Pro"','sans-serif']
      },

      backgroundImage:{
        "close-menu" : "url('../icons/xmark-solid.svg')",
        "open-menu" : "url('../icons/bars-solid.svg')"
      }
    },
  },
  plugins: [],
}

