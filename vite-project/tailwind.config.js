/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        darkgrey : '#4c4d5f',
        yellowish: '#f8db62',
        green: '#00b289'
      },
    },
  },
  plugins: [],
}

