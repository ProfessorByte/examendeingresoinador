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
        "brand-darkwhite": "#c9c9c9",
        "brand-darkgreen": "#00838d",
      },
      fontFamily: {
        nunito: ["Nunito Variable", "sans-serif"],
        bangers: ["Bangers", "Adjusted Impact Fallback", "sans-serif"],
      },
      backgroundImage: {
        "vertical-split":
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==')",
        "horizontal-split":
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=')",
      },
      keyframes: {
        slideFromRight: {
          "0%": { transform: "translateX(100%)" },
          "9%": { transform: "translateX(0)" },
          "90%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        slideFromRight:
          "slideFromRight 3s cubic-bezier(0.5, 1.6, 0.4, 0.7) forwards",
      },
    },
  },
  plugins: [],
};
