const config = require('./webpack.config');

module.exports = {
  ...config,
  mode: 'production',
  optimization: {
    minimize: true,
  },
};
