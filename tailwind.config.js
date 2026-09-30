/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1a1a1a',
          gray: '#666666',
          lightGray: '#e5e5e5',
        }
      }
    },
  },
  plugins: [],
}
