const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // entry file
    entry: ['@babel/polyfill', './src/js/main.js', './src/sass/main.scss'],

    //  컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'css/style.css '}),
        new HtmlWebpackPlugin({
            title: '',
            template: path.resolve(__dirname, 'index.html'),
            filename: path.join(__dirname, 'dist/index.html')
          }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/js')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    //'style-loader', // creates style nodes from JS strings
                    'css-loader',   // translates CSS into CommonJS
                    'sass-loader'   // compiles Sass to CSS, using Node Sass by default
                ],
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true,
        overlay: true,
        publicPath: '/',
        port: 4000,
        historyApiFallback: true,
        before: (app, server, compiler) => {
            app.get('/api/keywords', (req, res) => {
                res.json([
                    { keyword: 'italiy' },
                    { keyword: 'cook' },
                    { keyword: 'season' },
                    { keyword: 'home party'}
                ])
            })
        }
    }
}