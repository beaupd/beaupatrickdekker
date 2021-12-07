module.exports = {
  mode: "jit",
  purge: [
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js",
    "./components/**/*.js",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#3C3D41",
        light: "#FDFDFD",
        black: "#050505"
      },
      letterSpacing: {
        tightst: "-0.5rem"
      },
      container: {
        screens: {
          DEFAULT: "32rem",
          "lg": "50rem",
          "xl": "62rem",
          "2xl": "70rem"
        }
      },
      zIndex: {
        "min": "-1"
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
