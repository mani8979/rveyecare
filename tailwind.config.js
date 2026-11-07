/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#142F80',
          dark: '#0D2059',
          light: '#1E44B3',
          ultralight: '#EDF3FC'
        },
        secondary: {
          DEFAULT: '#F36B16',
          dark: '#D45408',
          light: '#FF8234',
          pale: '#FFF5EE'
        },
        soft: '#F3F6FC',
        charcoal: '#202638',
        muted: '#667085'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        telugu: ['"Noto Sans Telugu"', '"Plus Jakarta Sans"', 'sans-serif']
      },
      boxShadow: {
        orange: '0 8px 20px -2px rgba(243, 107, 22, 0.32)',
        navy: '0 10px 24px -4px rgba(20, 47, 128, 0.28)'
      }
    },
  },
  plugins: [],
}
