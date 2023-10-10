/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    // colors: {
    //   // Using modern `rgb`
    //   dark: 'rgb(var(--color-dark) / <alpha-value>)',
    //   light: 'rgb(var(--color-light) / <alpha-value>)',
    //   primary: 'rgb(var(--color-primary) / <alpha-value>)',
    //   crorange: 'rgb(var(--color-crorange) / <alpha-value>)',
    //   verdigris: 'rgb(var(--color-verdigris) / <alpha-value>)',

    // },
    extend: {
      colors: {
        'dark': '#2D3142',
        'light': '#ECF1FF',
        'primary': '#B6C6F0',
        'crorange': '#FF8845',
        'verdigris': '#38A3A5',
        'cube': {
          50: "#e2cedc",
          100: "#d1b6d1",
          200: "#a18db2",
          300: "#706993",
          400: "#4b5277",
          500: "#34435e",
          600: "#223449",
          700: "#152436",
          800: "#0c1626",
          900: "#060918",
        }
      }
    },
  },
  plugins: [],
}
