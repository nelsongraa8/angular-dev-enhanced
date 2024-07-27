module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // codigo antes de ejecutar cada test
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>\\src\\app\\$1',
    '@src/(.*)': '<rootDir>\\src\\$1'
  },
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/tests/coverage/',
    '<rootDir>/tests/e2e/',
    '<rootDir>/tests/performance/'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/main.ts',
    '!src/**/*.module.ts',
    '!src/**/*.array.ts',
    '!src/**/*.config.ts',
    '!src/**/*.routes.ts',
    '!src/environments/*.ts',
    '!src/**/*.mock.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
