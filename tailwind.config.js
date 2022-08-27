module.exports = {
  content: [
    "./src/pages/**/*.{js, jsx, ts, tsx}",
    "./src/components/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      "tangerine-yellow": "#F9CE0B",
      "dark-pink": "#EE4E6B",
      "persimmon": "#EA5F01",
      "navy-blue": "#005BD7",
      "cerulean": "#0080A7",
      "crusoe-green": "#154E3F",
      "medium-Purple": "#9972E5",
      "twine": "#C07D53",
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
