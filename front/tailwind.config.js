const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      violet: colors.violet,
      blue: colors.blue,
      purple: colors.violet,
      cgray: {
        heavy: "#262524",
        darkest: "#1f2d3d",
        dark: "#3c4858",
        DEFAULT: "#c0ccda",
        light: "#e0e6ed",
        lightest: "#f9fafc",
        900: "#111",
        600: "#333",
        700: "#222",
        500: "#666",
        400: "#444",
        lighter: "#677",
        another: "#ddd",
      },
      white: {
        light: "#fff",
        dull: "#fafafa",
        duller: "#ebebeb",
      },
      green: {
        best: "#01875f",
        darkk: "#056559",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
