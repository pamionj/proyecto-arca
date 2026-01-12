/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./content/**/*.{md}",
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require("@tailwindcss/typography"),
    ],
  }
  