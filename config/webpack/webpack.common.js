/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack'); // only add this if you don't have yet
const dotenvFile = require('../../config/utils').dotenvFile;

// replace accordingly './.env' with the path of your .env file
const Dotenv = require('dotenv-webpack');
const path = require('path');

const shouldGenReport = process.env.WEBPACK_REPORT === 'true';
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  entry: process.cwd() + '/src/index.tsx',
  output: {
    path: process.cwd() + '/dist/',
  },
  module: getLoaders(),
  plugins: getPlugins(),
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
    fallback: {
      fs: false,
      os: false,
      stream: require.resolve('stream'),
      module: require.resolve('module'),
      path: 'path-browserify',
      crypto: require.resolve('crypto-browserify'),
      'process/browser': require.resolve('process/browser'),
    },
    alias: {
      '@': path.resolve(process.cwd(), '/src/'),
      '@components': path.resolve(process.cwd(), '/src/components'),
      '@assets': path.resolve(process.cwd(), '/src/assets'),
      '@utils': path.resolve(process.cwd(), '/src/utils'),
      process: 'process/browser',
    },
  },
};

/**
 * Loaders used by the application.
 */
function getLoaders() {
  const babelConfig = {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
      '@emotion/babel-preset-css-prop',
      '@babel/preset-typescript',
      [
        '@babel/preset-env',
        {
          modules: false,
        },
      ],
    ],
    plugins: [
      'istanbul',
      'babel-plugin-twin',
      'babel-plugin-macros',
      // 'babel-plugin-styled-components',
    ],
  };

  const babelTsRule = {
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: babelConfig,
      },
    ],
  };
  // if (NODE_ENV !== 'production') {
  //   babelTsRule.use.push({
  //     loader: 'ts-loader',
  //   });
  // }
  const babelJsRule = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: babelConfig,
      },
    ],
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
    // rules: [swcRule, swcTsRule, cssRule, svgRule, svgUrlRule],
    rules: [babelJsRule, babelTsRule, cssRule, svgRule, svgUrlRule],
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
        from: 'public/**/*',
        globOptions: {
          dot: true,
          gitignore: true,
          ignore: ['index.html'],
        },
      },
    ],
  });
  const htmlWebpack = new HtmlWebpackPlugin({
    template: path.resolve(process.cwd(), '/public/index.html'),
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
    tsChecker,
    htmlWebpack,
    miniCssExtract,
    analyzer,
    reactPlugin,
    processPlugin,
    dotenvPlugin,
  ];
}
