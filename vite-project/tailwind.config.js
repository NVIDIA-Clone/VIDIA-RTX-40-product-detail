/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sig: ["Signika", "sans-serif"],
      },
      colors: {
        NVGreen: "#76B900",
        NVBGGray: "#1A1A1A",
        BHGreen: "#749f29",
        NVWhiteTxt: "#e8e6e3",
        NVDLightGray: "#999999",
        NVNavBarGray: "#999999",
        NVDropDownGray: "#666666"
      },
    },
    screens: {
      'md' : {'max' : '780px'},
      'sm' : {'max' : '640px'},
      'xs' : {'max' : '485px'},
      'xxs' : {'max' : '365px'}
    },
  },
  variants: {
    display:['group-hover']
  },
  plugins: [],
};
