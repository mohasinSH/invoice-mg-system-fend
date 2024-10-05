module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      fontFamily:{
        fredoka:['Fredoka','sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
