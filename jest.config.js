/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  // coverageProvider: 'v8',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/__test__/**/*',
    '!src/index.tsx',
    '!**/*.stories.*',
  ],
  setupFilesAfterEnv: ['./config/jest/setupTests.ts', 'jest-canvas-mock'],
  snapshotResolver: '<rootDir>/config/jest/snapshotResolver.js',
  // transform: {
  //   '^.+\\.(t|j)sx?$': [
  //     '@swc/jest',
  //     {
  //       jsc: {
  //         experimental: {
  //           plugins: [['swc-plugin-coverage-instrument', {}]],
  //         },
  //       },
  //     },
  //   ],
  // },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@asset/(.*)$': '<rootDir>/src/asset/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__test__/mock/fileMock.ts',
    '\\.(css|less)$': '<rootDir>/src/__test__/mock/styleMock.ts',
    '\\.svg$': '<rootDir>/src/__test__/mock/svg.ts',
  },
  coverageDirectory: 'coverage/jest',
};
