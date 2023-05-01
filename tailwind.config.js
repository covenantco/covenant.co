const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './_site/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        covenantBlue: {
          200: '#DAE2F1',
          500: '#447DF6',
          900: '#0E102E'
        }
      },
      fontFamily: {
        'lora': ['Lora'],
        'inter': ['Inter'],
      },
    },
  },
  plugins: [
    require('tailwind-children')
  ]
}
