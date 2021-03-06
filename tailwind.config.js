module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1200px',
      },
    },
    extend: {
      backgroundImage: {
        'cameroon-banner': "url('/images/cameroon-banner.jpeg')",
        agriculture: "url('/images/agriculture.jpg')",
        infrastructure: "url('/images/infrastructure.jpg')",
        forestry: "url('/images/forestry.jpg')",
        zoning: "url('/images/zoning.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
