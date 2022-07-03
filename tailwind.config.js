module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      DEFAULT: "1rem",
      sm: "2rem",
      lg: "4rem",
      xl: "5rem",
      "2xl": "6rem",
    },
    extend: {},
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
    },
    borderRadius: {
      "4xl": "2rem",
    },
  },
  plugins: [],
};

