var path = require('path');

module.exports = {
  entry: './apps/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};