module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        charcoal: {
          900: '#121212',
          800: '#1A1A1A',
          700: '#232323',
          600: '#2D2D2D',
        },
        primary: {
          DEFAULT: '#6366F1',
          light: '#818CF8',
          dark: '#4F46E5',
        },
        accent: {
          purple: '#A855F7',
          blue: '#3B82F6',
        },
        success: '#10B981',
        warning: '#F59E0B',
        status: {
          available: '#22C55E',
          busy: '#EF4444',
        },
        text: {
          primary: '#FAFAFA',
          secondary: '#A1A1A1',
          muted: '#6B6B6B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glow': 'radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
