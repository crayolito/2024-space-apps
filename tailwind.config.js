/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-nasa': '#051838',
        // 'custom-nasa': '#082a64',
//
      },
      boxShadow: {
        'white-soft': '0 4px 6px rgba(255, 255, 255, 0.1)',
        'white-3d': '0 15px 20px rgba(255, 255, 255, 0.3), 0 6px 10px rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        'google-codepro': ['Source Code Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

