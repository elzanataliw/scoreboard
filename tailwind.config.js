/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        screens: {
          mobile: { MIN: "360px", max: "639px" },
          navbar1: { MIN: "1280px", max: "1400px" },
          xsm: "400px",
        },
        backgroundImage: {
          pattern: "url('../src/assets/navbar-hover.svg')",
          "homepage-cover": "url('../src/assets/home/header_homepage.jpg')",
        },
        fontFamily: {
          Satisfy: ["Satisfy"],
          Montserrat: ["Montserrat"],
          Inter: ["Inter"],
        },
        keyframes: {
          marquee: {
            "0%": { transform: "translateX(0%)" },
            "100%": { transform: "translateX(-100%)" },
          },
          marquee2: {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(0%)" },
          },
        },
        animation: {
          "spin-slow-30": "spin 30s linear infinite",
          "spin-slow-25": "spin 25s linear infinite",
          "spin-slow-10": "spin 10s linear infinite",
          "marquee-infinite": "marquee 10s linear infinite",
        },
        colors: {
          basic: "#FFFFFF",
          "light-blue": "#5F9DF7",
          "dark-blue": "#1746A2",
          "orange": "#FF731D",
          "red": "#DD2A2A",
          "white": "#FFFFFF",
          "black": "000000"
        },
      },
    },
    plugins: [],
  };
  