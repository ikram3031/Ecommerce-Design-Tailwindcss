module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container:{
      center:true,
      padding: '1rem',
    },
    extend: {
      fontFamily:{
        poppins:"'Poppins', sans-serif", 
        roboto:"'Roboto', sans-serif",
      },
      colors: {
        'primary':'#fd3d57',
        'second': '#2b2d42',
        'theme-blue': '#5515ef',
        'theme-blue-dark': '#3c01ca',
        'theme-pink': '#eb589e',
      },
      boxShadow: {
        'theme-1': '0 0 60px -15px rgba(0, 0, 0, 0.7)',
        'theme-2': '15px 0 35px -5px rgba(0, 0, 0, 0.5)',
      },
      fontSize: {
        '10xl': '10rem',
        '16xl': '16rem',
        '17xl': '17rem',
        '18xl': '18rem',
        '19xl': '19rem',
        '20xl': '20rem',
      },
      letterSpacing: {
        'more-wide': '1rem',
      },
    },
  },
  variants: {
    extend: {
      display:['group-hover'],
      visibility:['group-hover'],
      scale: ['active', 'group-hover'],
      rotate: ['group-hover'],
      inset: ['hover', 'group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}