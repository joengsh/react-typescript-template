/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'cypress';
import coverageTask from '@cypress/code-coverage/task';
import webpackDev from './webpack.dev';
const dotenvFile = require('./config/utils').dotenvFile;

const { addMatchImageSnapshotPlugin } = require('@simonsmith/cypress-image-snapshot/plugin');

require('dotenv').config({ path: dotenvFile() });

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
      addMatchImageSnapshotPlugin(on, config);
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      coverageTask(on, config);
      config.baseUrl = process.env.CYPRESS_BASE_URL || 'http://localhost:3000';
      config.env.API_URL = process.env.CYPRESS_API_URL;
      config.env.API_TOKEN = process.env.CYPRESS_API_TOKEN;
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});
