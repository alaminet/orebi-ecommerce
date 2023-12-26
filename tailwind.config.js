/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "350px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
      },
      container: {
        center: true,
      },
      colors: {
        "light-gray": "#F5F5F3",
        "primary-black": "#262626",
      },
    },
  },
  plugins: [],
};
