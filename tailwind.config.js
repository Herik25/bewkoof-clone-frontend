/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins"],
        BungeeSpice: ["Bungee Spice"],
        Montserrat: ["Montserrat"],
        Krala: ["Karla"],
      },
      animation: {
        "gradient-shine": "shine-loading 2s infinite ease-out",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
    require("@tailwindcss/forms"),
  ],
};
