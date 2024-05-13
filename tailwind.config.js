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
      backgroundImage: {
        "vertical-split":
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==')",
        "horizontal-split":
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=')",
      },
    },
  },
  plugins: [],
};
