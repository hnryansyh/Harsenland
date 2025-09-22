/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
"./public/**/*.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {
  colors: {
    brand: { navy: '#0b1437', blue: '#1a2b6b' },
  },
  keyframes: {
    slideDown: {
      '0%': { transform: 'translateY(-100%)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
    fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
    heroImageIn: {
      '0%': { filter: 'brightness(200%)', opacity: '0.2' },
      '100%': { filter: 'brightness(100%)', opacity: '1' },
    },
    overlayFade: { '0%': { opacity: '1' }, '100%': { opacity: '0' } },

    /* NEW — smooth single-line headline reveal */
    textReveal: {
      '0%':   { opacity: '0', letterSpacing: '.25em', filter: 'blur(4px)', transform: 'translateY(0px)' },
      '100%': { opacity: '1', letterSpacing: '.20em', filter: 'blur(0)',   transform: 'translateY(0)' }
    },
  },
  animation: {
    slideDown: 'slideDown 700ms ease-out forwards',
    fadeIn: 'fadeIn 700ms ease-out forwards',
    heroImageIn: 'heroImageIn 1200ms ease-out forwards',
    overlayFade: 'overlayFade 1200ms ease-out forwards',

    /* NEW */
    textReveal: 'textReveal 900ms ease-out forwards',
  },
  fontFamily: {
    primaryMedium:['Medium'],
    montserrat: ['Montserrat']
  }
}
},

};
