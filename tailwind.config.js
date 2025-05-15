/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    'index.html',
    './books/*.html',
    './meads/*.html',
    './ferments/*.html',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "background": "#232136",
        "text": "#e0def4",
        "highlight": {
          "high": "#56526e",
        },
        "love": {
          "moon": "#eb6f92",
          "dawn": "#b4637a",
        },
        "subtle": {
          "moon": "#908caa",
          "dawn": "#797593",
        },
        "foam": {
          "moon": "#9ccfd8",
          "dawn": "#56949f",
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
