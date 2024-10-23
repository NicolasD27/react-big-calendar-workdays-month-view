/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#E2E8F0",
          200: "#CBD5E1",
          300: "#676D78",
          400: "#343D4B",
          500: "#010C1E",
        },
        blue: {
          50: "#F5FAFF",
          100: "#EBF5FF",
          500: "#0085FF",
        },
        red: {
          100: "#FFD3E0",
          500: "#FF2462",
        },
      },
    },
  },
  plugins: [],
};
