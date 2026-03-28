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
        cream: "#FDF6EC",
        "cream-dark": "#F5E6D3",
        caramel: "#C47B3E",
        "caramel-dark": "#9E5E28",
        "caramel-light": "#E8A96D",
        brown: "#3E1F00",
        "brown-light": "#6B3A1F",
        rose: "#D4827A",
        "rose-light": "#F0B8B2",
        "rose-pale": "#FBE8E6",
        gold: "#D4A843",
        "warm-white": "#FFFAF5",
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
