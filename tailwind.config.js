/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-black": "#111111",
        "brand-darkgray": "#202123",
        "brand-gray": "#343541",
        "brand-darkblue": "#0f172a",
        "brand-white": "#f3f4f6",
        "brand-darkwhite": "#f0f0f0",
      },
      fontFamily: {
        nunito: ["Nunito Variable", "sans-serif"],
        bangers: ["Bangers", "cursive"],
      },
    },
  },
  plugins: [],
};
