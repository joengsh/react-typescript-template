/* eslint-disable @typescript-eslint/no-var-requires */
const prod = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist/',
  },
  module: getLoaders(),
  plugins: getPlugins(),
  devServer: {
    static: './public',
    hot: true,
  },
  devtool: prod ? undefined : 'source-map',
};

/**
 * Loaders used by the application.
 */
function getLoaders() {
  const esbuild = {
    test: /\.(js|jsx|ts|tsx)?$/,
    loader: 'esbuild-loader',
    options: {
      loader: 'tsx',
      target: 'es2020',
    },
    // use: 'ts-loader',
    exclude: /node_modules/,
    resolve: {
      extensions: ['.ts', '.js', '.tsx', '.jsx', 'json'],
    },
  };

  const cssRule = {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
  };

  const loaders = {
    rules: [esbuild, cssRule],
  };

  return loaders;
}

/**
 * Plugins
 */
function getPlugins() {
  const htmlWebpack = new HtmlWebpackPlugin({
    template: 'index.html',
  });
  const miniCssExtract = new MiniCssExtractPlugin();
  const tsChecker = new ForkTsCheckerPlugin();

  return [tsChecker, htmlWebpack, miniCssExtract];
}
