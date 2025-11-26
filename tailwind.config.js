/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#001F3F',
        navyLight: '#003366',
        gold: '#F59E0B',
        goldLight: '#FCD34D',
        cream: '#FFFBF5',
        sage: '#F8FAF6',
        charcoal: '#1A1A1A',
        lightGray: '#F5F5F5',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        cursive: ['Caveat', 'cursive'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        'content': '1320px',
        'text': '900px',
      },
      boxShadow: {
        'luxury': '0 20px 60px -15px rgba(0, 31, 63, 0.2), 0 10px 30px -10px rgba(245, 158, 11, 0.15)',
        'glow': '0 10px 40px -10px rgba(245, 158, 11, 0.4), 0 0 20px rgba(245, 158, 11, 0.2)',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'fade-in-up': 'fadeInUp 1s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
