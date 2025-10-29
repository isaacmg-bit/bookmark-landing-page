/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5368df",    
        primary2: "#242946",    
        secondary: "#fa5757",    
        dark: "#242a45",    
        gray: "#9194a1",    
        lightGray: "#f7f7f7",     
        white: "#ffffff",     
        shadow: "rgba(128, 128, 128, 0.199)" 
      },
      fontSize: {
        h1: ["1.5rem", "2rem"],
        h2: ["1.9rem", "2.5rem"],
        p: ["0.95rem", "1.6rem"],
        "p-desktop": ["1.10rem", "1.6rem"],
        "h1-desktop": ["2rem", "2.4rem"],
        "h2-desktop": ["3rem", "3.6rem"]
      },
      fontWeight: {
        h1: 500,
        h2: 500,
        p: 400,
        buttons: 700
      }
    }
  },
  plugins: [],
}