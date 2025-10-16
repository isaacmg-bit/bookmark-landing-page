/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5368df',
        primary2: '#242946',
        secondary: '#fa5757',
        dark: '#242a45',
        gray: '#9194a1',
        'light-gray': '#f7f7f7',
        shadow: 'rgba(128, 128, 128, 0.199)',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        'h1': '1.5rem',
        'h1-desktop': '2rem',
        'h2': '1.9rem',
        'h2-desktop': '3rem',
        'p': '0.95rem',
        'p-desktop': '1.10rem',
      },
      fontWeight: {
        'h1': '500',
        'h2': '500',
        'p': '400',
        'buttons': '700',
      },
      lineHeight: {
        'p': '1.6rem',
      },
      boxShadow: {
        'custom': '0 0.625rem 0.938rem 0 rgba(128, 128, 128, 0.199)',
      },
      // 👇 Aquí añadimos tus breakpoints personalizados
      screens: {
        'xl': '1440px',
      },
    },
  },
  plugins: [],
}
