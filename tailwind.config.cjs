/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/components/*.{astro,html,js,jsx,svelte,ts,tsx,vue}",
    // "!src/pages/blog/*.{md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
