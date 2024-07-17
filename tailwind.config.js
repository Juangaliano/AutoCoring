/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      height: {
        'custom': 'calc(100vh - 96px)',
      },
      width: {
        '90px': '90%',
      },
      margin: {
        'auto': '0 auto',
      },
    },
  },
  plugins: [],
};