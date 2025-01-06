/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        gray: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },
        blue: {
          dark: '#1E6F9F',
          DEFAULT: '#4EA8DE',
        },
        purple: {
          dark: '#5E60CE',
          DEFAULT: '#8284FA',
        },
        red: '#E25858',
      },
    },
  },
  plugins: [],
};
