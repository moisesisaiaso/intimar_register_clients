// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    'autoprefixer': {},
    'postcss-custom-properties': {
      preserve: false
    },
    'postcss-nested': {},
  },
};
