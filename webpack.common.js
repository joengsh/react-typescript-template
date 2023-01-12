/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist/',
  },
  module: getLoaders(),
  plugins: getPlugins(),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
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
    rules: [esbuild, cssRule, svgRule, svgUrlRule],
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
  const analyzer = new BundleAnalyzerPlugin();

  return [tsChecker, htmlWebpack, miniCssExtract, analyzer];
}
