/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./src/custom/**/*.{js,jsx,ts,tsx}", // Add your custom folder here
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

