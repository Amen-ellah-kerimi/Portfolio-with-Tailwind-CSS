/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./js/**/*.js",
    "./utils/**/*.js",
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#282C33',
        'card-bg': '#20242B',
        'quote-bg': '#282C33',
        'code-bg': '#21252B',

        'primary-text': '#ABB2BF',
        'light-text': '#E0E0E0',
        'secondary-text': '#8B949E',

        'accent-purple': '#C778DD',
        'accent-pink': '#C778DD',
        'accent-blue': '#5269EE',

        'border-primary': '#3E4450',
        'border-accent': '#C778DD',
      },
      fontFamily:{
        'mono': ['Fira Code', 'Consolas', 'Menlo', 'monospace'],
        'sans': ['Inter', 'Roboto', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '100': '25rem',
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'card-glow': '0 0 15px rgba(199, 120, 221, 0.2)',
        'quote-shadow': '0 5px 15px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'pulse-accent': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'border-pulse': 'borderPulse 2s infinite',
      },
      keyframes: {
        fadeIn: {'0%': {opacity: 0}, '100%': {opacity: 1}},
        borderPulse: {
          '0%, 100%': {borderColor: 'rgba(199, 120, 221, 0.5)'},
          '50%': {borderColor: 'rgba(199, 120, 221, 1)'},
        },
      },
    },
  },
  plugins: [],
}

