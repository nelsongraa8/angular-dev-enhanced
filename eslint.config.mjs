import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ["**/*.{ts,js,mjs,cjs}"],
		languageOptions: { globals: globals.browser },
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
			indent: ["error", "tab"], // Usa tabulaciones para la indentación
			semi: "error", // Requiere punto y coma al final de las sentencias
			"prefer-const": "error", // Sugiere usar `const` para variables que nunca se reasignan
			"no-unused-vars": "warn", // Advierte si hay variables declaradas pero no utilizadas
			eqeqeq: ["error", "always"], // Requiere el uso de === y !== en lugar de == y !=
			curly: ["error", "multi-line"], // Obliga al uso de llaves en bloques de múltiples líneas
			"array-callback-return": "warn", // Advierte si los callbacks de arrays no retornan un valor
			"default-case": "error", // Requiere cláusula default en estructuras switch
			"dot-notation": "off", // Desactiva la regla que recomienda usar notación de punto en lugar de corchetes
			"no-empty-function": "warn", // Advierte sobre funciones vacías
			"no-empty-function": "warn", // Advierte sobre funciones vacías
			"no-redeclare": "error", // Prohíbe redeclarar variables en el mismo ámbito
			"no-shadow": "warn", // Advierte sobre variables en ámbitos anidados que ocultan variables exteriores
			"no-undef": "off", // Prohíbe el uso de variables que no han sido declaradas
			"no-unreachable": "error", // Prohíbe código inalcanzable
			"no-var": "error", // Exige el uso de let o const en lugar de var
			"prefer-arrow-callback": "error", // Recomienda usar funciones flecha en callbacks
			"no-multi-spaces": "error", // Prohíbe múltiples espacios en blanco
			quotes: ["error", "single", { avoidEscape: true, allowTemplateLiterals: true }],
			"comma-dangle": [
				"error",
				{
					arrays: "always-multiline",
					objects: "always-multiline",
					imports: "always-multiline",
					exports: "always-multiline",
					functions: "always-multiline",
				},
			],
		},
	},
	{
		files: ["**/*.{ts}"],
		languageOptions: { globals: globals.browser },
		rules: {
			"no-console": "warn", // Advierte sobre el uso de console.log()
			"brace-style": ["error", "1tbs", { allowSingleLine: true }], // Estilo de llaves "one true brace style"
		},
	},
	{
		files: ["**/*.{js,mjs,cjs}"],
		languageOptions: { globals: globals.node },
		rules: {
			"brace-style": ["error", "1tbs"],
			"no-console": "warn",
			"global-require": "off", // Desactiva la regla que requiere el uso de import en lugar de require
			"no-require-imports": "off", // Desactiva la regla que prohíbe el uso de require para importar
			"import/no-commonjs": "off", // Desactiva la regla que prohíbe el uso de la sintaxis CommonJS
			"@typescript-eslint/no-var-requires": "off", // Desactiva la regla que prohíbe el uso de require
		},
	},
	{
		ignores: [
			// this file
			"eslint.config.mjs",

			// Compiled output
			"dist/",
			"tmp/",
			"out-tsc/",
			"bazel-out/",
			"public/",

			// Node
			"node_modules/",
			"npm-debug.log",
			"yarn-error.log",

			// IDEs and editors
			".idea/",
			".project",
			".classpath",
			".c9/",
			"*.launch",
			".settings/",

			// Visual Studio Code
			".vscode/*",
			"!.vscode/settings.json",
			"!.vscode/tasks.json",
			"!.vscode/launch.json",
			"!.vscode/extensions.json",
			".history/*",

			// Miscellaneous
			".angular/*",
			".sass-cache/*",
			"connect.lock/",
			"coverage/",
			"tests/coverage/",
			"testem.log",
			"typings/",

			// System files
			".DS_Store",
			"Thumbs.db",
		],
	},
];
