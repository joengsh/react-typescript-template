/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack'); // only add this if you don't have yet
const dotenvFile = require('../utils').dotenvFile;
const cwd = process.cwd();

// replace accordingly './.env' with the path of your .env file
const Dotenv = require('dotenv-webpack');
const path = require('path');

const shouldGenReport = process.env.WEBPACK_REPORT === 'true';

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: cwd + '/dist/',
  },
  module: getLoaders(),
  plugins: getPlugins(),
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
    fallback: {
      fs: false,
      os: false,
      path: 'path-browserify',
    },
    alias: {
      '@': path.join(cwd, 'src/'),
      '@components': path.join(cwd, 'src/components'),
      '@assets': path.join(cwd, 'src/assets'),
      '@utils': path.join(cwd, 'src/utils'),
      process: 'process/browser',
    },
  },
};

/**
 * Loaders used by the application.
 */
function getLoaders() {
  const babelRule = {
    test: /\.(js|jsx|ts|tsx)?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  };

  const swcRule = {
    test: /\.(js|jsx)?$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'swc-loader',
      options: {
        jsc: {
          experimental: {
            plugins: [['swc-plugin-coverage-instrument', {}]],
          },
        },
      },
    },
  };

  const swcTsRule = {
    test: /\.(ts|tsx)?$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'swc-loader',
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
          },
          experimental: {
            plugins: [['swc-plugin-coverage-instrument', {}]],
          },
        },
      },
    },
  };

  const cssRule = {
    test: /\.(s)?css$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            config: path.join(cwd, 'config/postcss.config.js'),
          },
        },
      },
    ],
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
    rules: [swcRule, swcTsRule, cssRule, svgRule, svgUrlRule],
    // rules: [babelRule, cssRule, svgRule, svgUrlRule],
  };

  return loaders;
}

/**
 * Plugins
 */
function getPlugins() {
  const copyPlugin = new CopyPlugin({
    patterns: [
      {
        from: 'public/',
        globOptions: {
          dot: true,
          gitignore: true,
          ignore: ['**/index.html'],
        },
      },
    ],
  });
  const htmlWebpack = new HtmlWebpackPlugin({
    template: 'public/index.html',
  });
  const miniCssExtract = new MiniCssExtractPlugin();
  const tsChecker = new ForkTsCheckerPlugin();
  const analyzer = new BundleAnalyzerPlugin({
    analyzerMode: shouldGenReport ? 'server' : 'disabled',
  });

  const reactPlugin = new webpack.ProvidePlugin({
    React: 'react',
  });

  const processPlugin = new webpack.ProvidePlugin({
    process: 'process/browser',
  });

  const dotenvPlugin = new Dotenv({
    path: dotenvFile(),
  });

  return [
    copyPlugin,
    // tsChecker,
    htmlWebpack,
    miniCssExtract,
    analyzer,
    reactPlugin,
    processPlugin,
    dotenvPlugin,
  ];
}
