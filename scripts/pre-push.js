#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-require-imports */
const { execSync } = require('child_process');

function run(cmd, description) {
  console.log(`🔹 ${description}...`);
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (err) {
		console.log(err);
    console.error(`❌ Error en: ${description}`);
    process.exit(1);
  }
}

console.log('🚀 Iniciando pre-push checks...');

run('pnpm lint:fix', 'Revisando sintaxis y estilo de código (Lint)');
run('pnpm stylelint:fix', 'Revisando CSS/SCSS (Stylelint)');
run('pnpm build', 'Compilando el proyecto');

console.log('✅ Todas las verificaciones pasaron correctamente!');
console.log(`🎉 Felicidades, ${execSync('git config user.name').toString().trim()}! Tu código está listo para el push.`);

process.exit(0);
