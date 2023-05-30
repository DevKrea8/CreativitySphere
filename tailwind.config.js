/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: {"50":"#940B9F","100":"#7755D3", "200":"#8B119D", "300":"#BD3DFC", "400":"#BE00DD", "500":"#F9F5FF"}
      } 
    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}