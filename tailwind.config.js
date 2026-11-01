/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        ink: "#0e0e0c",
        "ink-100": "#151512",
        "ink-200": "#1c1c18",
        bone: "#ece8df",
        muted: "#8c887d",
        line: "rgba(236, 232, 223, 0.12)",
        acid: "#c8f04a",
      },
      fontFamily: {
        display: ['"Syne"', "sans-serif"],
        serif: ['"Instrument Serif"', "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
        body: ['"Manrope"', "sans-serif"],
      },
      screens: {
        xs: "450px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        rise: {
          from: { transform: "translateY(110%)" },
          to: { transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        rise: "rise 1.1s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};
