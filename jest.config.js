// /** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/__test__/**/*',
    '!src/index.tsx',
  ],
  setupFilesAfterEnv: ['./config/jest/setupTests.js'],
  snapshotResolver: '<rootDir>/config/jest/snapshotResolver.js',
  transform: {
    '^.+\\.(t|j)sx?$': [
      'esbuild-jest',
      {
        sourcemap: true,
        loaders: {
          '.spec.ts': 'tsx',
        },
      },
    ],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@asset/(.*)$': '<rootDir>/src/asset/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__test__/mock/fileMock.ts',
    '\\.(css|less)$': '<rootDir>/src/__test__/mock/styleMock.ts',
    '\\.svg$': '<rootDir>/src/__test__/mock/svg.ts',
  },
};
