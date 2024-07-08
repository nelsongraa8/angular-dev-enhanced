module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // codigo antes de ejecutar cada test
  moduleNameMapper: {
    '@app/(.)': '<rootDir>/src/app/$1',
    '@src/(.)': '<rootDir>/src/$1'
  },
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/', '<rootDir>/tests/coverage/'],
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
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};
