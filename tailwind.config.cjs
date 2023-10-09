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
      }
    },
  },
  plugins: [],
}
