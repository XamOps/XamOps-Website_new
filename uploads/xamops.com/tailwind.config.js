/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        parchment: '#f5f4ed',
        ivory: '#faf9f5',
        'ivory-2': '#f0eee4',
        terracotta: '#c96442',
        'terracotta-deep': '#a44d31',
        ink: '#141413',
        'ink-2': '#1d1d1b',
        olive: '#5e5d59',
        'olive-2': '#8a8880',
        rule: '#e3e1d6',
        'rule-dark': '#2a2926',
        moss: '#5b6b3a',
        ochre: '#b48a3c',
      },
      fontFamily: {
        serif: ['Georgia', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        hero: '32px',
      },
    },
  },
  plugins: [],
};
