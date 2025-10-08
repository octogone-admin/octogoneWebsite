/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Couleurs marine
    'bg-marine-50', 'bg-marine-100', 'bg-marine-200', 'bg-marine-300', 'bg-marine-400', 'bg-marine-500', 'bg-marine-600', 'bg-marine-700', 'bg-marine-800', 'bg-marine-900',
    'text-marine-50', 'text-marine-100', 'text-marine-200', 'text-marine-300', 'text-marine-400', 'text-marine-500', 'text-marine-600', 'text-marine-700', 'text-marine-800', 'text-marine-900',
    'border-marine-50', 'border-marine-100', 'border-marine-200', 'border-marine-300', 'border-marine-400', 'border-marine-500', 'border-marine-600', 'border-marine-700', 'border-marine-800', 'border-marine-900',
    'hover:bg-marine-50', 'hover:bg-marine-100', 'hover:bg-marine-200', 'hover:bg-marine-300', 'hover:bg-marine-400', 'hover:bg-marine-500', 'hover:bg-marine-600', 'hover:bg-marine-700', 'hover:bg-marine-800', 'hover:bg-marine-900',
    'hover:text-marine-50', 'hover:text-marine-100', 'hover:text-marine-200', 'hover:text-marine-300', 'hover:text-marine-400', 'hover:text-marine-500', 'hover:text-marine-600', 'hover:text-marine-700', 'hover:text-marine-800', 'hover:text-marine-900',
    'from-marine-400', 'from-marine-500', 'from-marine-600', 'from-marine-700', 'from-marine-800', 'from-marine-900',
    'to-marine-400', 'to-marine-500', 'to-marine-600', 'to-marine-700', 'to-marine-800', 'to-marine-900',
    // Couleurs gold
    'bg-gold-50', 'bg-gold-100', 'bg-gold-200', 'bg-gold-300', 'bg-gold-400', 'bg-gold-500', 'bg-gold-600', 'bg-gold-700', 'bg-gold-800', 'bg-gold-900',
    'text-gold-50', 'text-gold-100', 'text-gold-200', 'text-gold-300', 'text-gold-400', 'text-gold-500', 'text-gold-600', 'text-gold-700', 'text-gold-800', 'text-gold-900',
    'border-gold-50', 'border-gold-100', 'border-gold-200', 'border-gold-300', 'border-gold-400', 'border-gold-500', 'border-gold-600', 'border-gold-700', 'border-gold-800', 'border-gold-900',
    'hover:bg-gold-50', 'hover:bg-gold-100', 'hover:bg-gold-200', 'hover:bg-gold-300', 'hover:bg-gold-400', 'hover:bg-gold-500', 'hover:bg-gold-600', 'hover:bg-gold-700', 'hover:bg-gold-800', 'hover:bg-gold-900',
    'hover:text-gold-50', 'hover:text-gold-100', 'hover:text-gold-200', 'hover:text-gold-300', 'hover:text-gold-400', 'hover:text-gold-500', 'hover:text-gold-600', 'hover:text-gold-700', 'hover:text-gold-800', 'hover:text-gold-900',
    'from-gold-400', 'from-gold-500', 'from-gold-600', 'from-gold-700', 'from-gold-800', 'from-gold-900',
    'to-gold-400', 'to-gold-500', 'to-gold-600', 'to-gold-700', 'to-gold-800', 'to-gold-900',
  ],
  theme: {
    screens: {
      'xs': '376px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        gold: {
          50: '#fdf9f0',
          100: '#f9efd8',
          200: '#f2deb0',
          300: '#eac987',
          400: '#e2b45f',
          500: '#dcb26b', // Couleur principale gold
          600: '#c99e5f',
          700: '#a67b47',
          800: '#86623a',
          900: '#6b4e2e',
          950: '#3b2a19',
          light: '#FCF8F1', // LightGold pour les tuiles
        },
        marine: {
          50: '#e5f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66abff',
          400: '#338fff',
          500: '#0073ff',
          600: '#005ccb',
          700: '#004498',
          800: '#002d64',
          900: '#002236', // Couleur principale marine
          950: '#001018',
        },
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        'scroll-shrink': {
          '0%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' }
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        'shrink-on-scroll': 'scroll-shrink 1s ease-out forwards'
      },
    },
  },
  plugins: [],
}
