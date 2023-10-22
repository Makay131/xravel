/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "xravel-color-orange-1": "#ffa500",
        "xravel-color-orange-2": "rgba(255, 165, 0, 0.1)",
        "xravel-color-orange-3": "rgba(255, 251, 100, 0.5)",
        "xravel-color-primary-2": "#2696E9",
        "xravel-color-primary-3": "#1680AC",
        "xravel-color-white-1": "#f7f7f7",
        "xravel-color-white-2": "#eee",
        "xravel-color-white-3": "rgba(255,255,255, 0.2)",
        "xravel-color-black-1": "#444",
        "xravel-color-black-2": "rgb(14, 13, 13)",
        "xravel-color-black-3": "#222",
        "xravel-color-black-4": "rgb(17, 17, 17, 0.7)",
        "xravel-color-black-5": "rgba(1, 1, 1, 0.5)",
        "xravel-color-black-6": "#333",
        "xravel-color-black-7": "#666",
        "xravel-color-black-8": "rgba(0, 0, 0, .1)",
        "xravel-color-overlay-1": "rgba(0, 0, 0, 0.7)",
        "xravel-color-overlay-2": "rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'slide-brand': 'slide 135s infinite linear',
      },
      background: {
        'brand-fadeaway-left': 'linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255))',
        'button-slide': 'linear-gradient(90deg,#ffa500 50%, transparent 50%)',
      },
      boxShadow: {
        'xravel-shadow-1': '0 1rem 2rem rgba(0, 0, 0, 0.1)',
      },
      screens: {
        'purgatory-end': { 'raw': '(min-width: 1900px)' },
        // => @media (min-height: 800px) { ... }
      }
    },
  },
  plugins: [],
}

