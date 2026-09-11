import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F6F3',
          100: '#DDECE4',
          200: '#BFDACD',
          300: '#96C2B0',
          400: '#5BA085',
          500: '#285C4D', // secondary
          600: '#1B4E3E',
          700: '#0F4D3A', // primary
          800: '#0C3E2F',
          900: '#082E23',
          950: '#041B14'
        },
        charcoal: {
          DEFAULT: '#17201D',
          50: '#F5F7F6',
          100: '#E4E8E6',
          200: '#C7CEC9',
          300: '#9EAAA3',
          400: '#66736D', // muted
          500: '#46524C',
          600: '#323C37',
          700: '#242C28',
          800: '#1C2421', // primary text
          900: '#17201D', // dark
          950: '#0D1311'
        },
        surface: {
          DEFAULT: '#F7F8F6',
          pure: '#FFFFFF',
          subtle: '#F0F3F1',
          border: '#DDE4E0'
        },
        accent: {
          gold: '#C29B38',
          goldLight: '#F3EACF'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif']
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'card': '0 4px 20px -2px rgba(15, 77, 58, 0.06)',
        'card-hover': '0 10px 25px -4px rgba(15, 77, 58, 0.12)',
        'premium': '0 20px 40px -15px rgba(23, 32, 29, 0.08)'
      },
      maxWidth: {
        'theme': '1240px'
      }
    }
  },
  plugins: []
} satisfies Config;
