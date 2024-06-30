module.exports = function(config) {
  config.set({
    basePath: './tests',
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,

    reporters: ['progress', 'coverage'],

    // Configuración de karma-coverage
    coverageReporter: {
      type: 'html',
      dir: './coverage',
      subdir: '.',

      // Configuración de umbral de cobertura
      check: {
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80
        }
      }
    },

    // Asegúrate de que todos tus archivos fuente estén incluidos aquí para la cobertura
    preprocessors: {
      'src/**/*.js': ['coverage']
    },

  });
};
