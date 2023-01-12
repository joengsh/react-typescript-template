import { defineConfig } from 'cypress';
import coverageTask from '@cypress/code-coverage/task';
import webpackDev from './webpack.dev';
// import webpackProd from './webpack.prod';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: ['cypress/**/*.*', 'src/main.tsx'],
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig: webpackDev,
    },
    setupNodeEvents(on, config) {
      coverageTask(on, config);
      return config;
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      coverageTask(on, config);
      return config;
    },
  },
});
