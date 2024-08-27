import { Colors, FADE_IN_UP_DELAY } from './src/app/config'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        navbarHeight: 'var(--navbar-height)',
      },
      colors: {
        ...Colors,
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        "fadeInDown": `fade-in-down ${FADE_IN_UP_DELAY / 1000}s ease-in`,
        "fadeInUp": `fade-in-up ${FADE_IN_UP_DELAY / 1000}s ease-in-out`
      },
    },
  },
  plugins: [],
}

