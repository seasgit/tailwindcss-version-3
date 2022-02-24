module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:{
          100:'#90be6d',
          200:'#43aa8b'
        }
      },
      fontSize: {
      '10xl': ['9rem', { lineHeight: '1' }],
    },
    },
  },
  plugins: [],
}
