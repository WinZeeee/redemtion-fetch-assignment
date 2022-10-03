/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      "gray-01": "#171725",
      "gray-03": "#696974",
      "gray-04": "#92929D",
      "gray-05": "#B5B5BE",
      "gray-07": "#E2E2EA",
      "button-black": "#171725",
      "blue-dark": "#0062FF",
    },
    fontFamily: {
      hellix: ["Hellix"],
    },
    letterSpacing: {
      tight: "-0.005em",
    },
    backgroundImage: {
      scattered_shapes: "url('/src/assets/scatteredWhiteBackGround.png')",
    },
    boxShadow: {
      custom: "0px 12px 18px 0px #1717250A",
    },
    extend: {},
  },
  plugins: [],
};
