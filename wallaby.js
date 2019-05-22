module.exports = wallaby => ({
  files: [
    'package.json',
    'private/jest/fileMock.js',
    'private/jest/setupTests.js',
    'src/**/*.js',
    '!src/**/*.test.js',
  ],

  tests: ['src/**/*.test.js'],

  env: {
    type: 'node',
    runner: 'node',
  },

  compilers: {
    '**/*.js': wallaby.compilers.babel(),
  },

  testFramework: 'jest',

  setup: wallaby => {
    const jestConfig = require('./package.json').jest
    wallaby.testFramework.configure(jestConfig)
  },

  debug: true,
})
