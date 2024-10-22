const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/Containers/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
};
