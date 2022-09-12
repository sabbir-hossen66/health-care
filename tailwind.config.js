/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {},
  },

  //...
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#575757",
          secondary: "#2D89FF",
          accent: "#FFFFFF",
          neutral: "#642DFF",
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
    ],
  },
}
