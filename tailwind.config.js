/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'rgba(10, 10, 10, 0.06) 0px 1.2px 1.2px 0px, rgba(10, 10, 10, 0.04) 0px 5px 10px',
        'image': 'rgba(0, 0, 0, 0.08) 0px 0.8px 0.8px 0px, rgba(0, 0, 0, 0.04) 0px 3.2px 6.4px',
      },
    },
  },
  plugins: [],
}