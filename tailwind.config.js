module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    safelist: [
      /^bg-/,
      /^text-/,
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minWidth: {
      '1/2': '50%',
      '1/4': '25%',
      '1/3': '33.333333%',
      '64': '16rem',
      '80': '20rem',
      '96': '30rem',
    },
    maxWidth: {
      '1/2': '50%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
