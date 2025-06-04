/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        "card-background": "rgba(var(--card-background))",
        text: "rgba(var(--text))",
        subtext: "rgba(var(--subtext))",
        button: "rgba(var(--button))",
        "button-hover": "rgba(var(--button-hover))",
        "button-active": "rgba(var(--button-active))",
        border: "rgba(var(--border))",
      },
      extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out both',
      },
    },
    },
  },
  plugins: [],
};
