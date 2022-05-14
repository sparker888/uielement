// tailwind.config.js
module.exports = {
  future: {},
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gravital-lighter-blue': '#1E293B',
        'gravital-darker-blue': '#0F172A',
      },
      keyframes: {
        introAnim: {
          '0%': { opacity: 0, transform: 'translateY(-25px)' },
          '25%': { opacity: 1, transform: 'translateY(0)' },
          '75%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-25px)' },
        },
      },
      animation: {
        'fadingText': 'introAnim 3s forwards infinite',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
}