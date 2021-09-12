// next.config.js
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // optional
  modifyVars: {
    '@primary-color': 'rgb(52, 211, 153)',
    '@secondary-color': '#635AFE',
    '@success-color': '#35BE52',
    '@layout-body-background': '#ffffff',
    '@layout-header-background': '#ffffff',
    '@border-radius-base': '.25rem',
    '@btn-primary-color': '#0C3C59',
    '@font-family':
      "'AvenirLTPro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  },
  // optional
  // lessVarsFilePath: './src/styles/variables.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...
  reactStrictMode: true,

  webpack(config) {
    return config;
  },
});
