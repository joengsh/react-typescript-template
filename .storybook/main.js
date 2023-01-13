const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-turbo-build',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  features: {
    previewMdx2: true,
    storyStoreV7: true,
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config, other) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, '../', 'src'),
      '@components': path.resolve(__dirname, '../', 'src/components'),
      '@assets': path.resolve(__dirname, '../', 'src/assets'),
      '@utils': path.resolve(__dirname, '../', 'src/utils'),
    };
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
      use: ['@svgr/webpack'],
    });
    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset/resource',
      resourceQuery: /url/, // *.svg?url
      generator: {
        filename: 'static/assets/[path][name][ext]',
      },
    });

    return config;
  },
};
