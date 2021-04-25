const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        teal: colors.teal,
        celeste: colors.lightBlue,
        morado: {
          50: '#e8eaf6',
          100: '#c5cae9',
          200: '#9fa8da',
          300: '#7986cb',
          400: '#5c6bc0',
          500: '#3f51b5',
          600: '#3949ab',
          700: '#303f9f',
          800: '#283593',
          900: '#1a237e'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
