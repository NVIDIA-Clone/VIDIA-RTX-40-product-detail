/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        fadeOut: {
          '0%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in', // Here, we link the keyframes to the animation with a duration, easing, and animation name
        fadeOut: 'fadeOut 2.5s ease-out',
        fadeInModal: 'fadeIn 0.6s ease-in',
        fadeOutModal: 'fadeOut 0.6s ease-out'
      },
      fontFamily: {
        Sig: ['Signika', 'sans-serif'],
      },
      colors: {
        NVGreen: '#76B900',
        NVBGGray: '#1A1A1A',
        BHGreen: '#749f29',
        NVWhiteTxt: '#e8e6e3',
        NVWhiterTxt: '#FFFFFF',
        NVDLightGray: '#999999',
        NVNavBarGray: '#999999',
        NVDropDownGray: '#666666',
      },
      transitionDelay: {
        5000: '5000ms',
      },
    },
    screens: {
      lg: { max: '1320px'},
      md: { max: '780px' },
      sm: { max: '640px' },
      xs: { max: '485px' },
      xxs: { max: '365px' },
    },
  },
  variants: {
    display: ['group-hover'],
  },
  plugins: [],
};
