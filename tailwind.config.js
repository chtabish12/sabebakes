/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5EDE0",
        "cream-light": "#FAF4EB",
        "cream-dark": "#EDE0CC",
        brown: "#3D1C0B",
        "brown-light": "#7A5C48",
        "brown-medium": "#5C3D2E",
        maroon: "#5C1F0A",
        "maroon-light": "#8B3A1A",
        rose: "#D4A09A",
        "rose-light": "#E8C5C1",
        "rose-pale": "#F5E5E3",
        gold: "#D4A843",
        white: "#FFFFFF",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        playfair: ["Playfair Display", "Georgia", "serif"],
        lato: ["Lato", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
