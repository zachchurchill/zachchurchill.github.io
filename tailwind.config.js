/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "background": "#232136",
        "foreground": "#e0def4",
        "cursor": "#eb6f92",
        "selection": "#908caa",
        "white": "#f2f2f2",
        "cyan": "#61d6d6",
      },
    },
  },
  variants: {},
  plugins: [],
}
