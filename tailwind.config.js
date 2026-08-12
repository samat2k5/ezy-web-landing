/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ezy: {
          navy: '#0F172A',
          'navy-dark': '#070A12',
          blue: '#1E40AF',
          azure: '#2563EB',
          cyan: '#06B6D4',
          teal: '#0D9488',
          emerald: '#10B981',
          indigo: '#4F46E5',
          violet: '#8B5CF6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-emerald': '0 0 35px -5px rgba(16, 185, 129, 0.25)',
        'glow-azure': '0 0 35px -5px rgba(37, 99, 235, 0.25)',
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.25)',
        'glow-violet': '0 0 35px -5px rgba(139, 92, 246, 0.25)',
        'card-hover': '0 25px 50px -12px rgba(15, 23, 42, 0.15)',
        'hero-shadow': '0 30px 60px -15px rgba(15, 23, 42, 0.35)',
      }
    },
  },
  plugins: [],
}
