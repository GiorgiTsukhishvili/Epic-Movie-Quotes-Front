/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-gradient':
          'linear-gradient(187.16deg, #181623 0.07%, #191725 51.65%, #0D0B14 98.75%)',
        interstellar: 'url(/assets/imgs/interstellar.jpg)',
        trt: 'url(/assets/imgs/trt.jpg)',
        lotr: 'url(/assets/imgs/lotr.jpg)',
        'interstellar-gradient':
          'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 55.21%, rgba(0, 0, 0, 0) 100%);',
        'trt-gradient':
          'linear-gradient(180deg, rgba(17, 16, 26, 0.95) 0%, rgba(8, 8, 13, 0.13) 50%, rgba(0, 0, 0, 0) 100%)',
        'interstellar-gradient':
          'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 55.21%, rgba(0, 0, 0, 0) 100%);',
      },
      colors: {
        zinc: {
          150: '#F0F0F0',
          350: '#D9D9D9',
        },
        red: {
          650: '#E31221',
        },
      },
    },
  },
  plugins: [],
};
