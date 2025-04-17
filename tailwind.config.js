module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    '*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        // Replace CSS vars with fixed HSL/HEX values that match your theme
        border: '#2a2a2a',
        input: '#3a3a3a',
        ring: '#6d28d9',
        background: '#0c0c0c',
        foreground: '#f8fafc',
        primary: {
          DEFAULT: '#f8fafc',
          foreground: '#1e1e1e'
        },
        secondary: {
          DEFAULT: '#1e1e1e',
          foreground: '#f8fafc'
        },
        destructive: {
          DEFAULT: '#7f1d1d',
          foreground: '#f8fafc'
        },
        muted: {
          DEFAULT: '#1f1f1f',
          foreground: '#a3a3a3'
        },
        accent: {
          DEFAULT: '#2f2f2f',
          foreground: '#f8fafc'
        }
      },
      borderRadius: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.5rem'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
