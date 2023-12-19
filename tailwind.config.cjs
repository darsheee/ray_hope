import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        gray: colors.stone,
        primary: colors.red,
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
