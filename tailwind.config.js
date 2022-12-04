/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quickSand: ["Quicksand", "sans-serif"],
      },
    },
    // screens: {
    //   tab: { min: "760px", max: "770px" },
    // },
  },
  plugins: [],
};
