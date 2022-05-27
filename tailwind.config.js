module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'red-sete-belo': '#D9114A',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
