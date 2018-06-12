module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-preset-env')({
      stage: 0,
    }),
    require('postcss-extend-rule'),
  ],
};
