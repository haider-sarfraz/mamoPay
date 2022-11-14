/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    // fontSize: {
    //   xs: ['12px', '20px'],
    //   sm: ['14px', '22px'],
    // },
    extend: {
      spacing: {
        '1.25': '0.313rem',//5px
        '4.25': '1.063rem',//17px
        '4.5': '1.125rem',//18px
        '8.5': '2.125rem',//34px
        '16.25': '4.063rem',//65px
        '35': '8.75rem',//140px
        '42.5': '10.625rem',//170px
        '53': '13.25rem',//212px
        '61': '15.25rem',//244px
        '65': '16.25rem',//260px
        '94.5': '23.625rem',//378px 
      },
      lineHeight: {
        '4.5': '1.125',//18px
      },
      borderRadius: {
        '10': '2.5rem',//40px
      },
      minWidth: {
        '6': '1.5rem',//24px
        '61': '15.25rem',//244px
        '65': '16.25rem',//260px
      },
      maxWidth: {
        '61': '15.25rem',//244px
        '65': '16.25rem',//260px
        'tab-filters-lg': 'calc(100% - 170px)',//for filter tabs in table on large screen
        'tag-filters-tablet': 'calc(100% - 170px)',
      },
      height: {
        'page': `calc(100% - 65px - 140px)`,
        'modal': `calc(100vh - 48px - 48px)`,
      },
      minHeight: {
        '6': '1.5rem',//24px
      },
      colors: {
        'mamo-blue-50': '#E7E7FF',
        'mamo-blue-500': '#3333FF',
        'mamo-blue-400': '#5252FF',
        'mamo-blue-300': '#7070FF',
        'mamo-pink-500': '#FF0066',
        'mamo-white-500': '#FFFFFF',
        'mamo-black-200': '#9BA1B3',
        'mamo-black-300': '#525A67',
        // Inconsistent styles naming below
        'bold-red-50': '#FFE8E3',
        'bold-red-500': '#E3291D',
        'black-25': '#F3F5F9',
        'black-50': '#E5E9F0',
        'black-100': '#C7CEDC',
        'black-200': '#9BA1B3',
        'black-300': '#525A67',
        'black-500': '#080826',
        'harmony-green-50': '#E3FAF1',
        'harmony-green-400': '#2DB37C',
        'modal-overlay': '#F3F5F9'
      },
    },
  },
  plugins: [],
}
