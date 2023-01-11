/* eslint-disable @typescript-eslint/no-var-requires */
const prod = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};

// /**
//  * Loaders used by the application.
//  */
// function getLoaders() {
//   const esbuild = {
//     test: /\.(js|jsx|ts|tsx)?$/,
//     loader: 'esbuild-loader',
//     options: {
//       loader: 'tsx',
//       target: 'es2015'
//     },
//     exclude: /node_modules/
//   };

//   const loaders = {
//     rules: [esbuild]
//   };

//   return loaders;
// }

// /**
//  * Plugins
//  */
// function getPlugins() {
//   const nodemon = new NodemonPlugin();
//   const tsChecker = new ForkTsCheckerPlugin();

//   return [tsChecker, nodemon];
// }
