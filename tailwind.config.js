 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary' : '#0c2444',
        'secondary' : '#ac9444'
      },
      fontSize:{
        '32': '2rem',
        '18': '1.125rem',
        '22': '1.375rem',
      },
      backgroundImage: {
        'hero-bg-img' : "url('/images/heroBcgroundImg/campus_spring_scenic-1920.webp')"
      }
    },
  },
  plugins: [],
}