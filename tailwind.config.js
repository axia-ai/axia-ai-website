module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        width_1:"55% ",
        width_2:"45%"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        Hover_button:"rgb(126,34,206)",
        service_titel:"rgb(77,77,77)",
        custom_bg:"rgb(248,249,255)",
        custom_purple: "rgb(149, 100, 185)",
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
