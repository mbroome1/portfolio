// tailwind.config.js
module.exports = {
    purge: [
      // Use *.tsx if using TypeScript
      './pages/**/*.js',
      './components/**/*.js'
    ],
    theme: {
      extend: {
        fontFamily: {
          nunito: ['Nunito', 'Arial', 'sans-serif'],
          lato: ['Lato', 'Arial', 'sans-serif'],
          inter: ['Inter', 'Arial', 'sans-serif'],
          karla: ['Karla', 'Arial', 'sans-serif'],
          ubuntu: ['Ubuntu', 'Arial', 'sans-serif'],
          ephesis: ['Ephesis', 'cursive']
        }
      }
    },
    variants: {},
    plugins: [],

  }
  