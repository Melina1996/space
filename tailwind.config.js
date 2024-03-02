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
      "homeTablet": "url('./assets/img/background-home-tablet.jpg')",
      "homeMobile": "url('./assets/img/background-home-mobile.jpg')",
      "bgDestination": "url('./assets/img/background-destination-desktop.jpg')",
      "destinationTablet": "url('./assets/img/background-destination-tablet.jpg')",
      "destinationMobile": "url('./assets/img/background-destination-mobile.jpg')",
      "bgCrew": "url('./assets/img/background-crew-desktop.jpg')",
      "crewTablet": "url('./assets/img/background-crew-tablet.jpg')",
      "crewMobile": "url('./assets/img/background-crew-mobile.jpg')",
      "bgTech": "url('./assets/img/background-technology-desktop.jpg')",
      "techTablet": "url('./assets/img/background-technology-tablet.jpg')",
      "techMobile": "url('./assets/img/background-technology-mobile.jpg')",
    },
    fontFamily:{
      nanum: ["Nanum Myeongjo","serif"],
      barlow: ["Barlow Semi Condensed","sans-serif"]

    },
    keyframes: {
      scale: {
        '0%': { transform: 'scaleY(0)' },
        '100%': { transform: 'scaleY(1)' },
      },
      scaleBack:{
        '0%': { transform: 'scaleY(1)' },
        '100%': { transform: 'scaleY(0)' },
      }
    }, 
  },
  },
  plugins: [require("daisyui",'flowbite/plugin')],
  
}
