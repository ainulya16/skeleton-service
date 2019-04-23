module.exports = {
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 0,
      statements: 0
    }
  },
  testMatch: ['**/tests/**/*.[jt]s?(x)', '**/src/**/?(*.)+(spec|test).[jt]s?(x)'],
  reporters: ['default', 'jest-junit'],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'text', 'cobertura'],
  collectCoverageFrom: ['src/**/*.js', 'src/*.js']
};
