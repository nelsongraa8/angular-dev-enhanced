import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import eslintComments from 'eslint-plugin-eslint-comments';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.port.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // puertos suelen necesitar interfaces incompletas
    },
  },
  {
    files: ["src/**/*.ts"],
    languageOptions: { globals: globals.browser },
    rules: {
      // Buenas prácticas
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"], // más estricto que "multi-line"
      "array-callback-return": "warn",
      "default-case": "error",
      "prefer-const": "error",
      "prefer-arrow-callback": "error",
      "no-var": "error",

      // TS aware
      "no-undef": "off", // TS ya lo gestiona
      "no-unused-vars": "off", // TS ya lo gestiona
      "@typescript-eslint/no-unused-vars": [
				"warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // Estilo / legibilidad
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/no-redeclare": "warn",
      "@typescript-eslint/no-shadow": "warn",
			"@typescript-eslint/no-explicit-any": "off", // con any

      // Evitar abusos
      "eslint-comments/no-unlimited-disable": "error",
      "eslint-comments/no-unused-disable": "warn",
    },
    plugins: {
      "eslint-comments": eslintComments,
    },
  },
  {
    files: ["tests/**/*.ts"],
    languageOptions: { globals: globals.node },
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // útil en tests
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-console": "off", // permitido en tests
      "prefer-const": "off",
      "no-empty-function": "off",
      "no-redeclare": "off",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.node },
    rules: {
      "brace-style": ["warn", "1tbs"],
      "no-console": "off",
      "global-require": "off",
      "@typescript-eslint/no-var-requires": "off",
    },
  },
  prettier,
	{
		ignores: [
			'eslint.config.mjs',
			'dist/',
			'public/',
			'node_modules/',
			'npm-debug.log',
			'.vscode/*',
			'.angular/*',
			'coverage/',
			'tests/coverage/',
		],
	},
];
