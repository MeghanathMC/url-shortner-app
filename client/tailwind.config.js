 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html","./src/**/*.{html,js,ts,tsx,jsx}"],
   theme: {
     extend: {
      backgroundImage: { 
       banner: "url('/banner.webp')"
      }
     },
   },
   plugins: [],
 }