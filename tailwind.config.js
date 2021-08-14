const purge = process.env.NODE_ENV === 'production';
module.exports = {
  mode: 'jit',
  purge: {
    enabled: purge,
    content: ['./build/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'background': '#F9FBFC',
        'background-grey': '#E2EAED',
        'title': '#242F51',
        'description': '#616368',
        'money': '#242F51'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
