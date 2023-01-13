/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack'); // only add this if you don't have yet

// replace accordingly './.env' with the path of your .env file
const Dotenv = require('dotenv-webpack');
const path = require('path');

const shouldGenReport = process.env.WEBPACK_REPORT === 'true';

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist/',
  },
  module: getLoaders(),
  plugins: getPlugins(),
  resolve: {
    fallback: {
      fs: false,
      os: false,
      path: 'path-browserify',
    },
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      process: 'process/browser',
    },
  },
};

/**
 * Loaders used by the application.
 */
function getLoaders() {
  const babel = {
    test: /\.(js|jsx|ts|tsx)?$/,
    loader: 'babel-loader',
  };

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
      extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
    },
  };

  const cssRule = {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
  };

  const svgRule = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
    use: ['@svgr/webpack'],
  };

  const svgUrlRule = {
    test: /\.svg$/i,
    type: 'asset',
    resourceQuery: /url/, // *.svg?url
  };

  const loaders = {
    rules: [babel, esbuild, cssRule, svgRule, svgUrlRule],
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
  const analyzer = new BundleAnalyzerPlugin({
    analyzerMode: shouldGenReport ? 'server' : 'disabled',
  });
  const processPlugin = new webpack.ProvidePlugin({
    process: 'process/browser',
  });
  const dotenvPlugin = new Dotenv();

  return [tsChecker, htmlWebpack, miniCssExtract, analyzer, processPlugin, dotenvPlugin];
}
