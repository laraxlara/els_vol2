/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-linear": "linear-gradient(40deg, rgba(255,36,250,1) 0%, rgba(169,0,246,1) 8%, rgba(98,9,113,1) 19%, rgba(0,0,0,1) 70%, rgba(0,0,0,1) 100%);"
      },
    },
    fontFamily: {
      'serif': ['DM Serif Display', "serif"],
      'sans': ['DM Sans', "sans-serif"]
    }
  },
  plugins: [],
};
