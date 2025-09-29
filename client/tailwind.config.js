/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A84FF', // deep blue
          light: '#4F9DFF',
        },
        secondary: {
          DEFAULT: '#7D3C98', // purple
          light: '#A569BD',
        },
        accent: {
          DEFAULT: '#FFD60A', // warm yellow accent
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};