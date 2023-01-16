/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack'); // only add this if you don't have yet
const dotenvFile = require('./config/utils').dotenvFile;

// replace accordingly './.env' with the path of your .env file
const Dotenv = require('dotenv-webpack');
const path = require('path');

const shouldGenReport = process.env.WEBPACK_REPORT === 'true';
// const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  entry: {
    'my-lib': './src/lib.tsx',
  },
  output: {
    path: path.resolve(__dirname, '_bundles'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'MyLib',
    umdNamedDefine: true,
  },
  optimization: {
    chunkIds: 'named',
  },
  module: getLoaders(),
  plugins: getPlugins(),
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
    fallback: {
      fs: false,
      os: false,
      path: 'path-browserify',
    },
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      process: 'process/browser',
    },
  },
};

/**
 * Loaders used by the application.
 */
function getLoaders() {
  // const istanbulRule = {
  //   test: /\.(js|jsx|ts|tsx)?$/,
  //   loader: 'babel-loader',
  // };
  // const istanbulRule = {
  //   test: /\.(js|jsx|ts|tsx)?$/,
  //   exclude: /node_modules/,
  //   use: ['@jsdevtools/coverage-istanbul-loader', 'ts-loader'],
  // };

  const babelRule = {
    test: /\.(js|jsx|ts|tsx)?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      declaration: false,
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
    // rules: [babelRule, cssRule, svgRule, svgUrlRule],
    rules: [swcRule, swcTsRule, cssRule, svgRule, svgUrlRule],
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
    tsChecker,
    htmlWebpack,
    miniCssExtract,
    analyzer,
    reactPlugin,
    processPlugin,
    dotenvPlugin,
  ];
}
