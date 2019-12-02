const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtraxtPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return ({
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
          },
        },
        {
          test: /\.(s*)css$/,
          exclude: /node_modules/,
          use: [{
            loader: MiniCssExtraxtPlugin.loader,
          },
          'css-loader',
          'sass-loader',
          ],
        },
        {
          test: /\.(png|gif|jpg|svg)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: 'assets/[name].¨[ext]',
            },
          }],
        },
      ],
    },
    devServer: {
      contentBase: path.join(__dirname, './dist'),
      compress: true,
      historyApiFallback: true,
    },
    node: {
      fs: 'empty',
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: './index.html',
      }),
      new MiniCssExtraxtPlugin({
        filename: 'assets/[name].css',
      }),
      new webpack.DefinePlugin(envKeys),
    ],
  });
};
