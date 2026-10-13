/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0a0a',
          2: '#131313',
          3: '#1a1a1a',
        },
        paper: '#ffffff',
        bone: '#f5f5f3',
        silver: {
          100: '#e8e8e8',
          200: '#d5d7d9',
          300: '#a9abae',
          400: '#8a8c90',
          500: '#6e7074',
        },
        muted: {
          DEFAULT: '#5c5e61',
          dark: '#a9abae',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
