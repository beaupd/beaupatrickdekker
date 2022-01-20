module.exports = {
    content: ["./pages/**/*.js", "./components/**/*.js"],
    theme: {
        extend: {
            fontSize: {
                h1: [
                    "9rem",
                    {
                        lineHeight: "0.69",
                        letterSpacing: "-0.91rem",
                    },
                ],
            },
            colors: {
                dark: {
                    DEFAULT: "var(--dark)",
                },
                light: {
                    DEFAULT: "var(--light)",
                },
                theme: {
                    DEFAULT: "var(--theme)",
                },
            },
        },
    },
    plugins: [],
};
