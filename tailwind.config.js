const commonGridTemplate = {
  "fr/auto": "1fr auto",
  "auto/fr": "auto 1fr",
  "auto/fr/auto": "auto 1fr auto",
  "auto/auto/fr": "auto auto 1fr",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateColumns: {
        ...commonGridTemplate,
      },

      gridTemplateRows: {
        ...commonGridTemplate,
      },
    },
  },
  plugins: [],
};
