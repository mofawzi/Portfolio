/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        // Neutral "ink" scale (slightly cool) and one accent, matching the resume's blue.
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5d9e2',
          300: '#b1b8c8',
          400: '#8791a7',
          500: '#68738c',
          600: '#525c73',
          700: '#434b5e',
          800: '#2a2f3b',
          900: '#171a22',
          950: '#0b0d12',
        },
        accent: {
          300: '#93b4ff',
          400: '#6b93ff',
          500: '#4a74f5',
          600: '#3457dc',
          700: '#2b45b2',
        },
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
