/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {backgroundImage:{
      "bgHome": "url('./assets/img/background-home-desktop.jpg')",
      "bgDestination": "url('./assets/img/background-destination-desktop.jpg')",
      "bgCrew": "url('./assets/img/background-crew-desktop.jpg')",
      "bgTech": "url('./assets/img/background-technology-desktop.jpg')",
    },
    fontFamily:{
      nanum: ["Nanum Myeongjo","serif"],
      barlow: ["Barlow Semi Condensed","sans-serif"]

    }
  },
  },
  plugins: [require("daisyui",'flowbite/plugin')],
}
