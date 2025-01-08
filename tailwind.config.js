/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        custom: ['CustomFont', ''], 
      }, 
      scrollSnapType: { 
        none: 'none', 
        x: 'x', 
        y: 'y', 
        both: 'both', }, 
        scrollSnapAlign: { 
          start: 'start', 
          end: 'end', 
          center: 'center', 
          none: 'none', 
        }, 
      }, 
    }, 
    variants: { 
      scrollSnapType: ['responsive'], 
      scrollSnapAlign: ['responsive'], 
    },
  plugins: [],
}

