import HeaderImg from "./src/assets/headerBg2.jpg";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#050066",
        "copy-right-color": "#EEBB1E",
      },
      backgroundImage: {
        "header-img": `url(./src/assets/headerBg2.jpg)`,
        'radial-gradient-black-white': 'radial-gradient(circle, rgba(0,0,0,0.2807247899159664) 0%, rgba(255,255,255,0) 61%)',
      },
    },
  },
  plugins: [],
};
