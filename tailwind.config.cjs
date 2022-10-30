/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'background-base': '#121212',
        'background-highlight': '#1a1a1a',
        'background-press': '#000',
        'background-elevated-base': '#242424',
        'background-elevated-highlight': '#2a2a2a',
        'background-elevated-press': '#000',
        'background-tinted-base': 'hsla(0,0%,100%,.07)',
        'background-tinted-highlight': 'hsla(0,0%,100%,.1)',
        'background-tinted-press': 'hsla(0,0%,100%,.04)',
        'text-base': '#fff',
        'text-subdued': '#a7a7a7',
        'text-bright-accent': '#1ed760',
        'text-announcement': '#3d91f4',
        'essential-base': '#fff',
        'essential-subdued': '#727272',
        'essential-bright-accent': '#1ed760',
        'essential-announcement': '#0d72ea',
        'decorative-base': '#fff',
        'decorative-subdued': '#292929',
        'spotify-green': '#1ed760',
        error: '#e91429',
        negative: '#f15e6c',
        warning: '#ffa42b',
        positive: '#1ed760',
      },
      height: {
        'artist-header': '374px',
        'album-header': '340px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
