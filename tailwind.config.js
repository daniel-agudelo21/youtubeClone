/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'k-orange':'#EF9245',
        'k1-black':'#3B405D',
        'k2-black':'#333752',
        'k3-black':'#272E41',
        'k4-black':'#172434'
      }
    },
  },
  plugins: [],
};
