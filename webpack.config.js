var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['@skatejs/web-components', './src'],

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: 'manifest.json',
        to: 'manifest.json',
      },
      {
        from: 'assets/icon-144.png',
        to: 'icon-144.png',
      },
      {
        from: 'assets/icon-256.png',
        to: 'icon-256.png',
      }
    ]),
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};

