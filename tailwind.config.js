module.exports = {
  mode: "jit",
  purge: [
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#3C3D41",
        light: "#FDFDFD",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
