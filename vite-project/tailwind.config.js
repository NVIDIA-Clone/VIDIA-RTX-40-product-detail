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
        NVBGGray: "#141516",
        BHGreen: "#749f29",
        NVWhiteTxt: "#e8e6e3",
      },
    },
  },
  plugins: [],
};
