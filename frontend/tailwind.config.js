/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./node_modules/flowbite/**/*.js"],
    theme: {
      extend: {},
    },
    plugins: [require('flowbite/plugin') ],
  }
   

  module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",  // Ensure all your files are included
    ],
    theme: {
      extend: {
        animation: {
          float: "float 4s ease-in-out infinite", // Floating effect for posters
          slideInUp: "slideInUp 1s ease-out", // Slide-in text animation
        },
        keyframes: {
          float: {
            "0%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-15px)" },
            "100%": { transform: "translateY(0)" },
          },
          slideInUp: {
            "0%": { transform: "translateY(100px)", opacity: "0" },
            "100%": { transform: "translateY(0)", opacity: "1" },
          },
        },
      },
    },
    plugins: [],
  }
  