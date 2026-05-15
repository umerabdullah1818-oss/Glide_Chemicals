// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1AB8A8',
          DEFAULT: '#15998E', // Brand teal
          dark: '#0D7A72',
        },
        chemical: {
          acid: '#F59E0B',
          base: '#15998E',
          organic: '#14B8A6',
          inorganic: '#0891B2',
          surfactant: '#06B6D4',
          polymer: '#0EA5E9',
        },
        background: {
          light: '#F0FDFA',
          dark: '#0F172A'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'molecule-spin': 'molecule-spin 20s linear infinite',
        'wave': 'wave 15s linear infinite',
        'bubble': 'bubble 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        'molecule-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        bubble: {
          '0%, 100%': { 
            transform: 'translateY(0) scale(1)',
            opacity: 0.7
          },
          '50%': { 
            transform: 'translateY(-100px) scale(1.2)',
            opacity: 1
          },
        }
      }
    },
  },
  plugins: [],
}