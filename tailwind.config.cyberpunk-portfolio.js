/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cyberpunk Electric Neon Palette
        cyber: {
          bg: '#0A0A0F',           // Deep charcoal/black
          bgAlt: '#0B0D10',        // Fallback dark bg
          cyan: '#00F0FF',         // Electric cyan
          magenta: '#FF00AA',      // Hot magenta
          lime: '#39FF14',         // Lime green
          purple: '#4A148C',       // Muted purple
          text: '#F0F4FF',         // Bright off-white
          textMuted: '#A0B0C0',    // Muted gray-cyan
        },
      },
      boxShadow: {
        // Neon glow effects
        'neon-cyan': '0 0 15px rgba(0, 240, 255, 0.5), 0 0 30px rgba(0, 240, 255, 0.25)',
        'neon-cyan-lg': '0 0 20px rgba(0, 240, 255, 0.6), 0 0 40px rgba(0, 240, 255, 0.3), 0 0 60px rgba(0, 240, 255, 0.15)',
        'neon-magenta': '0 0 15px rgba(255, 0, 170, 0.5), 0 0 30px rgba(255, 0, 170, 0.25)',
        'neon-magenta-lg': '0 0 20px rgba(255, 0, 170, 0.6), 0 0 40px rgba(255, 0, 170, 0.3), 0 0 60px rgba(255, 0, 170, 0.15)',
        'neon-lime': '0 0 12px rgba(57, 255, 20, 0.67), 0 0 25px rgba(57, 255, 20, 0.5)',
        'neon-lime-lg': '0 0 20px rgba(57, 255, 20, 0.75), 0 0 40px rgba(57, 255, 20, 0.4)',
        'hologram': 'inset 0 0 20px rgba(0, 240, 255, 0.1), 0 0 30px rgba(0, 240, 255, 0.2)',
      },
      textShadow: {
        // Text glow effects (requires plugin or custom CSS)
        'glow-cyan': '0 0 10px rgba(0, 240, 255, 0.8), 0 0 20px rgba(0, 240, 255, 0.5), 0 0 30px rgba(0, 240, 255, 0.3)',
        'glow-magenta': '0 0 10px rgba(255, 0, 170, 0.8), 0 0 20px rgba(255, 0, 170, 0.5)',
        'glow-lime': '0 0 10px rgba(57, 255, 20, 0.9), 0 0 20px rgba(57, 255, 20, 0.6)',
        'glitch': '2px 2px 0px rgba(255, 0, 170, 0.75), -2px -2px 0px rgba(0, 240, 255, 0.75)',
      },
      keyframes: {
        // Glitch effect animations
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'glitch-skew': {
          '0%, 100%': { transform: 'skew(0deg)' },
          '10%': { transform: 'skew(2deg) translateX(2px)' },
          '20%': { transform: 'skew(-2deg) translateX(-2px)' },
          '30%': { transform: 'skew(0deg)' },
        },
        // Neon glow pulse
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(0, 240, 255, 0.5), 0 0 30px rgba(0, 240, 255, 0.25)',
          },
          '50%': {
            boxShadow: '0 0 25px rgba(0, 240, 255, 0.8), 0 0 50px rgba(0, 240, 255, 0.4), 0 0 75px rgba(0, 240, 255, 0.2)',
          },
        },
        'glow-pulse-magenta': {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(255, 0, 170, 0.5), 0 0 30px rgba(255, 0, 170, 0.25)',
          },
          '50%': {
            boxShadow: '0 0 25px rgba(255, 0, 170, 0.8), 0 0 50px rgba(255, 0, 170, 0.4)',
          },
        },
        'glow-pulse-lime': {
          '0%, 100%': {
            boxShadow: '0 0 12px rgba(57, 255, 20, 0.67), 0 0 25px rgba(57, 255, 20, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(57, 255, 20, 0.9), 0 0 40px rgba(57, 255, 20, 0.6)',
          },
        },
        // Scanline movement
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        // Progress bar shimmer
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        // Typing effect
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        // 3D tilt for HUD cards
        'cyber-float': {
          '0%, 100%': { transform: 'translateY(0px) rotateX(0deg)' },
          '50%': { transform: 'translateY(-10px) rotateX(2deg)' },
        },
        // Flicker effect
        flicker: {
          '0%, 100%': { opacity: '1' },
          '41%': { opacity: '1' },
          '42%': { opacity: '0.8' },
          '43%': { opacity: '1' },
          '45%': { opacity: '0.85' },
          '46%': { opacity: '1' },
        },
      },
      animation: {
        'glitch': 'glitch 0.5s linear infinite',
        'glitch-skew': 'glitch-skew 10s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'glow-pulse-magenta': 'glow-pulse-magenta 2s ease-in-out infinite',
        'glow-pulse-lime': 'glow-pulse-lime 2s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'typing': 'typing 3.5s steps(40, end), blink 0.75s step-end infinite',
        'cyber-float': 'cyber-float 3s ease-in-out infinite',
        'flicker': 'flicker 3s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    // Custom plugin for text-shadow utilities
    function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    },
  ],
}
