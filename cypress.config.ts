/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'cypress';
import coverageTask from '@cypress/code-coverage/task';
import webpackDev from './webpack.dev';

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
      coverageTask(on, config);
      return config;
    },
  },
});
