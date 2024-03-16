/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('/public/bg-header-desktop.svg')",
        'mobile': "url('/public/bg-header-mobile.svg')"
      }
    },
  },
  plugins: [],
}