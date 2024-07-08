import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts}'],
    languageOptions: { globals: globals.browser },
    rules: {
      semi: 'error', // Requiere punto y coma al final de las sentencias
      'prefer-const': 'error', // Sugiere usar `const` para variables que nunca se reasignan
      'no-unused-vars': 'warn', // Advierte sobre variables declaradas pero no utilizadas
      eqeqeq: ['error', 'always'], // Requiere el uso de === y !== en lugar de == y !=
      'no-console': 'warn', // Advierte sobre el uso de console.log()
      curly: ['error', 'multi-line'], // Requiere llaves para bloques multilínea
      'brace-style': ['error', '1tbs', { allowSingleLine: true }], // Estilo de llaves "one true brace style"
      'array-callback-return': 'warn', // Asegura que los callbacks de métodos de array retornen un valor
      'default-case': 'error', // Requiere una cláusula `default` en los `switch`
      'dot-notation': 'error', // Prefiere la notación de punto sobre la de corchetes para acceder a propiedades
      'no-empty-function': 'warn', // Advierte sobre funciones vacías
      'no-multi-spaces': 'error', // Prohíbe múltiples espacios en blanco
      'no-redeclare': 'error', // Prohíbe redeclarar variables
      'no-shadow': 'warn', // Advierte sobre declaraciones de variables en un ámbito externo
      'no-undef': 'error', // Prohíbe el uso de variables no declaradas
      'no-unreachable': 'error', // Prohíbe código inalcanzable
      'no-var': 'error', // Requiere let o const en lugar de var
      'prefer-arrow-callback': 'warn', // Sugiere usar arrow functions como callbacks
      quotes: [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'always-multiline',
        },
      ],
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.node },
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single'],
      'brace-style': ['error', '1tbs'],
      'prefer-const': 'error',
      'no-var': 'error',
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      eqeqeq: ['error', 'always'],
      curly: 'error',
      'no-console': 'warn',
      'global-require': 'off', // Desactiva la regla que requiere el uso de import en lugar de require
      'no-require-imports': 'off', // Desactiva la regla que prohíbe el uso de require para importar
      'import/no-commonjs': 'off', // Desactiva la regla que prohíbe el uso de la sintaxis CommonJS
      '@typescript-eslint/no-var-requires': 'off', // Desactiva la regla que prohíbe el uso de require
    },
  },
  {
    ignores: [
      // Compiled output
      '/dist',
      '/tmp',
      '/out-tsc',
      '/bazel-out',

      // Node
      '/node_modules',
      'npm-debug.log',
      'yarn-error.log',

      // IDEs and editors
      '.idea/',
      '.project',
      '.classpath',
      '.c9/',
      '*.launch',
      '.settings/',

      // Visual Studio Code
      '.vscode/*',
      '!.vscode/settings.json',
      '!.vscode/tasks.json',
      '!.vscode/launch.json',
      '!.vscode/extensions.json',
      '.history/*',

      // Miscellaneous
      '.angular/*',
      '.sass-cache/*',
      '/connect.lock',
      '/coverage',
      '/tests/coverage',
      '/libpeerconnection.log',
      'testem.log',
      '/typings',

      // System files
      '.DS_Store',
      'Thumbs.db',
    ],
  },
];
