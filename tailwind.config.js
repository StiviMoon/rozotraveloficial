export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rozo-orange': '#F26522',
        'rozo-amber': '#FBB040',
        'rozo-green': '#2E7D32',
        'rozo-green-light': '#4CAF50',
        'rozo-brown': '#6D4C2F',
        'rozo-cream': '#FAF6EE',
        'rozo-dark': '#2B2B2B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(135deg, #F26522, #FBB040)',
        'gradient-green': 'linear-gradient(135deg, #1B5E20, #2E7D32)',
      }
    },
  },
  plugins: [],
}
