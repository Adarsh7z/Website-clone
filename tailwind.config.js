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
          dark: '#0E1416',
          'dark-deep': '#080D0E',
          'dark-2': '#0F171A',
          'teal-shadow': '#0D1517',
          'teal-dark': '#142226',
          charcoal: '#182529',
          cyan: '#14B8A6',
          'cyan-light': '#2DD4BF',
          'cyan-hover': '#0D9488',
          emerald: '#10B981',
          offwhite: '#F8FAFC',
          muted: '#94A3B8',
          card: 'rgba(20, 34, 38, 0.65)',
          border: 'rgba(45, 212, 191, 0.15)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -4px rgba(20, 184, 166, 0.45)',
        'cyan-glow-lg': '0 0 45px -5px rgba(20, 184, 166, 0.55)',
        'halo': '0 0 100px 30px rgba(20, 184, 166, 0.12)',
      },
    },
  },
  plugins: [],
}
