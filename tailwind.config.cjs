const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      green: colors.green,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      white: {
        DEFAULT: '#ffffff'
      },
      primary: {
        DEFAULT: '#02008d'
      },
    },
  },

  variants: {
    extend: {
      backgroundColor: ['hover'],
      shadow: ['hover'],
    }
  },

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
