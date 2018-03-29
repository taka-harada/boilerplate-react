const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app/app.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, '../src')
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {
                  'modules': false
                }]
              ]
            }
          }
          //{
          //  loader: 'eslint-loader'
          //}
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(eot|otf|ttf|woff2?|svg)(\?.+)?$/,
        include: [
          path.resolve(__dirname, '../src', 'font')
        ],
        use: {
          loader: 'url-loader',
          options: {
            name: 'assets/font/[name].[ext]'
          }
        }
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false
            }
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
              exports: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: './src/view/index.pug'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: 8081,
    watchContentBase: true,
    open: true
  }
}
