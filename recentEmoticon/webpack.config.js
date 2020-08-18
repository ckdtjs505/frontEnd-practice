const path = require('path');

module.exports = {
    mode : 'development',
    entry: './assets/js/main.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map'
  };