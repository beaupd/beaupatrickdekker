module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      transparent: "transparent",
      light: "#EEE5E9",
      dark: "#000306",
      blue: "#293E53",

    },
    extend: {
      backgroundImage: {
        "snowybg": "url('/snowy.jpg')",
        "snowybgSmall": "url('/snowy_mobile.jpg')"
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
