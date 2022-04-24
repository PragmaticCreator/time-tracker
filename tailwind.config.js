module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      display: ['Rubik', 'sans-serif'],
      body: ['Rubik', 'sans-serif'],
      sans: ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: {
          primary: 'hsl(246, 80%, 60%)',
          soft: 'hsl(195, 74%, 62%)',
          darker: 'hsl(226, 43%, 10%)',
          dark: 'hsl(235, 46%, 20%)',
          desaturated: 'hsl(235, 45%, 61%)',
          pale: 'hsl(236, 100%, 87%)',
        },
        red: {
          primary: 'hsl(15, 100%, 70%)',
          secondary: 'hsl(348, 100%, 68%)',
        },
        lime: {
          primary: 'hsl(145, 58%, 55%)',
        },
        orange: {
          soft: 'hsl(43, 84%, 65%)',
        },
        violet: {
          primary: 'hsl(264, 64%, 52%)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
