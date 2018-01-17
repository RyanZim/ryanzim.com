module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-cssnext')({
      features: {
        customProperties: false,
      },
    }),
    require('postcss-extend-rule'),
  ],
};
