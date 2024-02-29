/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundImage:{
      "bgHome": "url('./assets/img/background-home-desktop.jpg')",
      "bgDestination": "url('./assets/img/background-destination-desktop.jpg')",
      "bgCrew": "url('./assets/img/background-crew-desktop.jpg')",
      "bgTech": "url('./assets/img/background-technology-desktop.jpg')",
    },
  },
  },
  plugins: [require("daisyui")],
}

