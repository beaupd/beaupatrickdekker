module.exports = {
  purge: [
    "./pages/*.js",
    "./components/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        snow: "#FFFCFF",
        black: "#000",
        blue: "#C4D7F2"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
