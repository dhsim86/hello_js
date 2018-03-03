var express = require('express');
var app = express();
var path = require('path');

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require("./webpack.config");
var compiler = webpack(webpackConfig);

app.use(express.static(__dirname));
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
}));

app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.set('/', function (req, res) {
  res.send('index');
})

app.listen(3000);
console.log("Server running on port 3000");