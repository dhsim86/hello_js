var path = require('path')
var webpack = require('webpack');

module.exports = {
  entry: './apps/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ],
  resolve: {
    alias: {
     // Vendor: path.resolve(__dirname, './apps/vendor')
    }
  }
};