const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

cwd = file => {
  return path.join(process.cwd(), file || '')
}

module.exports = {
  entry: {
    src: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.css', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    modules: [cwd('node_modules'), cwd('src')]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    host: '0.0.0.0',
    port: 4000,
    disableHostCheck: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
       },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [/node_modules/]
      },
      {
        test: /\.es6$/,
        loaders: ['babel-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: '',
      template: path.resolve(__dirname, 'index.html'),
      filename: path.join(__dirname, '../dist/index.html')
    }),
    new BundleAnalyzerPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}