module.exports = {
  theme: {
    fontFamily: {
      'sans': 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      'nunito': 'Nunito',
    },
    extend: {
      colors: {
        blue: {
          default: '#4a9ec1',
          dark: '#2a627a',
          darker: '#163441',
        },
        green: {
          light: '#d8ff8a',
          default: '#80be00',
          dark: '#336600',
          darker: '#1a3300',
        }
      },
    },
  },
  variants: {
    backgroundColor: ['hover'],
  },
  plugins: [],
}
