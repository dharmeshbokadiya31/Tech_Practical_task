module.exports = {
  purge: [],
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    // etc.
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#F7F7F7",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
