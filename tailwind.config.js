module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        introHeadingBlack: '#111827',
        introHeadingGrey: '#6D7280',
        secondaryBackround: '#F5F7FA',
        primary: '#9564B9',
        primaryHover: '#7C3A9E',
      }
    },
  },
  plugins: [],
}
