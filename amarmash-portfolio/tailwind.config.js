/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FAFAFA',
          dark: '#0A0A0C',
          'dark-2': '#121217',
          'dark-3': '#1A1A1F',
          'dark-4': '#25252D',
        },
        accent: {
          DEFAULT: '#00D4AA',
          hover: '#00B894',
          muted: '#00D4AA33',
        },
        'accent-secondary': '#FF6B35',
        signal: '#2D5BFF',
        foreground: {
          DEFAULT: '#0A0A0C',
          dark: '#FAFAFA',
          muted: '#6B7280',
          'muted-dark': '#9CA3AF',
        },
      },
      fontFamily: {
        display: ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(139, 139, 139, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 139, 139, 0.1) 1px, transparent 1px)",
        'grid-pattern-dark': "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flow-line': 'flowLine 2s linear infinite',
      },
      keyframes: {
        flowLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}
