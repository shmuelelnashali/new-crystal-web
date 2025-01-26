/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue_color: "#002A78",
        light_blue: " #F7F9FD",
      },
      gridTemplateColumns: {
        // Create a dynamic grid based on a number
        dynamic: "repeat(var(--grid-cols), minmax(0, 1fr))",
      },
      boxShadow: {
        input: " 0px 0px 6.12px -4.68px #0000001A",
      },
    },
  },

  plugins: [],
};
