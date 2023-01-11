module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-turbo-build',
  ],
  framework: '@storybook/react',
  features: {
    previewMdx2: true,
    storyStoreV7: true,
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
