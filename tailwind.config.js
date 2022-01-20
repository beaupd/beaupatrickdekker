module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        dark: "var(--dark)",
        light: "var(--white)",
        primary: "var(--primary)"
      },
      backgroundColor: {
        dark: "#050505",
      },
      backdropBlur: {
        full: "100px",
      },
      fontSize: {
        "h1": ["9rem", {
          lineHeight: "0.69",
          letterSpacing: "-0.8rem"
        }],
        "h2": ["5rem", {
          lineHeight: "0.69",
          letterSpacing: "-0.4rem"
        }],
        "h3": ["2rem", {
          lineHeight: "0.69",
          letterSpacing: "-0.2rem"
        }]
      }
    },
  },
  plugins: [],
}
