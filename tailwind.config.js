/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'gurey': '#2C2C32',
        'dark' : '#2525B',
        'asul' : '#0066B8',
        'light': '#ffffff',
      },
      

    },
  },
  plugins: [],
}

