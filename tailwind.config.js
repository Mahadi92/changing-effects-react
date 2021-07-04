module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      ubuntu: ['Ubuntu', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      courier: ['Courier Prime', 'monospace']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
