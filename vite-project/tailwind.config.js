/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sig: ["Signika", "sans-serif"],
      },
      colors: {
        NVGreen: "#5e9400",
        NVBGGray: "#1A1A1A",
        BHGreen: "#749f29",
        NVWhiteTxt: "#e8e6e3",
      },
    },
    screens: {
      'sm' : {'max' : '640px'},
      'xs' : {'max' : '485px'},
      'xxs' : {'max' : '365px'}
    },
  },
  plugins: [],
};
