import { Colors } from './src/app/config'
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
    },
  },
  plugins: [],
}

