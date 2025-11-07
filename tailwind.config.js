// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  safelist: [
    'text-h1',
    'text-h2',
    'text-p',
    'text-h1-desktop',
    'text-h2-desktop',
    'text-p-desktop',
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
        shadow: "rgba(128, 128, 128, 0.199)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      fontSize: {
        h1: "1.5rem",
        h2: "1.9rem",
        p: "0.95rem",
        "p-desktop": "1.10rem",
        "h1-desktop": "2rem",
        "h2-desktop": "3rem",
      },
      fontWeight: {
        h1: "500",
        h2: "500",
        p: "400",
        buttons: "700",
      },
      lineHeight: {
        p: "1.6rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xxl: "1440px",
      },
      boxShadow: {
        base: "0 0.625rem 0.938rem 0 rgba(128, 128, 128, 0.199)",
      },
    },
  },
};
