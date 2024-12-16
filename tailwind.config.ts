import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-black": "#111111",
        "brand-darkgray": "#202123",
        "brand-gray": "#343541",
        "brand-darkblue": "#0f172a",
        "brand-white": "#f3f4f6",
        "brand-darkwhite": "#c9c9c9",
        "brand-darkgreen": "#00838d",
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
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-30%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(-18%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        slideFromRight:
          "slideFromRight 3s cubic-bezier(0.5, 1.6, 0.4, 0.7) forwards",
        fadeDown: "fadeDown 1.2s ease-in-out forwards",
        fadeRight: "fadeRight 300ms ease-in forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
