/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cyberpunk Electric Neon Palette
        cyber: {
          bg: '#0A0A0F',           // Deep charcoal/black background
          bgAlt: '#0B0D10',        // Fallback darker bg
          cyan: '#00F0FF',         // Electric cyan (primary neon)
          magenta: '#FF00AA',      // Hot magenta (secondary accent)
          lime: '#39FF14',         // Lime green (highlights/success)
          purple: '#4A148C',       // Soft purple-gray (muted accents)
          text: '#F0F4FF',         // Bright off-white primary text
          textAlt: '#E0F7FF',      // Cyan-tinted text
          textMuted: '#A0B0C0',    // Muted gray-cyan secondary text
        },
      },
      // Neon glow shadows
      boxShadow: {
        'neon-cyan': '0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3), 0 0 30px rgba(0, 240, 255, 0.2)',
        'neon-cyan-lg': '0 0 15px rgba(0, 240, 255, 0.6), 0 0 30px rgba(0, 240, 255, 0.4), 0 0 50px rgba(0, 240, 255, 0.3)',
        'neon-magenta': '0 0 10px rgba(255, 0, 170, 0.5), 0 0 20px rgba(255, 0, 170, 0.3), 0 0 30px rgba(255, 0, 170, 0.2)',
        'neon-magenta-lg': '0 0 15px rgba(255, 0, 170, 0.6), 0 0 30px rgba(255, 0, 170, 0.4), 0 0 50px rgba(255, 0, 170, 0.3)',
        'neon-lime': '0 0 10px rgba(57, 255, 20, 0.5), 0 0 20px rgba(57, 255, 20, 0.3), 0 0 30px rgba(57, 255, 20, 0.2)',
        'neon-lime-lg': '0 0 15px rgba(57, 255, 20, 0.6), 0 0 30px rgba(57, 255, 20, 0.4), 0 0 50px rgba(57, 255, 20, 0.3)',
        'hologram': 'inset 0 0 20px rgba(0, 240, 255, 0.1), 0 0 20px rgba(0, 240, 255, 0.2)',
      },
      // Cyber text shadows
      textShadow: {
        'neon-cyan': '0 0 10px rgba(0, 240, 255, 0.8), 0 0 20px rgba(0, 240, 255, 0.5)',
        'neon-magenta': '0 0 10px rgba(255, 0, 170, 0.8), 0 0 20px rgba(255, 0, 170, 0.5)',
        'neon-lime': '0 0 10px rgba(57, 255, 20, 0.8), 0 0 20px rgba(57, 255, 20, 0.5)',
        'glitch': '2px 2px 0px rgba(255, 0, 170, 0.7), -2px -2px 0px rgba(0, 240, 255, 0.7)',
      },
      // Cyberpunk animations
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'glitch-skew': 'glitch-skew 10s infinite',
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 3s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'cyber-float': 'cyber-float 3s ease-in-out infinite',
        'data-stream': 'data-stream 20s linear infinite',
        'typing': 'typing 3.5s steps(40) 1s 1 normal both, blink 0.75s step-end infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'glitch-skew': {
          '0%': { transform: 'skew(0deg)' },
          '10%': { transform: 'skew(-2deg)' },
          '20%': { transform: 'skew(0deg)' },
          '30%': { transform: 'skew(2deg)' },
          '40%': { transform: 'skew(0deg)' },
          '50%': { transform: 'skew(-1deg)' },
          '60%': { transform: 'skew(0deg)' },
          '70%': { transform: 'skew(1deg)' },
          '80%': { transform: 'skew(0deg)' },
          '90%': { transform: 'skew(-1deg)' },
          '100%': { transform: 'skew(0deg)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '41.99%': { opacity: '1' },
          '42%': { opacity: '0' },
          '43%': { opacity: '0' },
          '43.01%': { opacity: '1' },
          '47.99%': { opacity: '1' },
          '48%': { opacity: '0' },
          '49%': { opacity: '0' },
          '49.01%': { opacity: '1' },
        },
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.8), 0 0 40px rgba(0, 240, 255, 0.5), 0 0 60px rgba(0, 240, 255, 0.3)',
          },
        },
        'cyber-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'data-stream': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00F0FF' },
        },
      },
      // Custom grid patterns
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)',
        'neon-gradient': 'linear-gradient(135deg, #00F0FF 0%, #FF00AA 100%)',
        'cyber-radial': 'radial-gradient(circle at center, rgba(0, 240, 255, 0.1) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      // Perspective for 3D tilt effects
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
    },
  },
  plugins: [
    // Custom plugin for text-shadow utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-neon-cyan': {
          textShadow: '0 0 10px rgba(0, 240, 255, 0.8), 0 0 20px rgba(0, 240, 255, 0.5)',
        },
        '.text-shadow-neon-magenta': {
          textShadow: '0 0 10px rgba(255, 0, 170, 0.8), 0 0 20px rgba(255, 0, 170, 0.5)',
        },
        '.text-shadow-neon-lime': {
          textShadow: '0 0 10px rgba(57, 255, 20, 0.8), 0 0 20px rgba(57, 255, 20, 0.5)',
        },
        '.text-shadow-glitch': {
          textShadow: '2px 2px 0px rgba(255, 0, 170, 0.7), -2px -2px 0px rgba(0, 240, 255, 0.7)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
