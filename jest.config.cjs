/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'json-summary'],
  setupFilesAfterEnv: ['./config/jest/setupTests.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.cjs',
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.cjs',
  },
};
