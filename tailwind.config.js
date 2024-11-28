/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#050066",
        "copy-right-color": "#EEBB1E",
      },
    },
  },
  plugins: [],
};
