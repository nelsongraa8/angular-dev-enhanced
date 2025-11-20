#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-require-imports */
const { execSync } = require('child_process');

function run(cmd, description) {
	console.log(`🔹 ${description}...`);
	try {
		execSync(cmd, { stdio: 'inherit' });
	} catch (error) {
		console.error(`❌ Error en: ${description}. Corrige antes de hacer commit.`);
		console.error(error.message);
		process.exit(1);
	}
}

console.log('🚀 Iniciando pre-commit checks...');

// Obtener solo archivos staged
const stagedFiles = execSync('git diff --cached --name-only').toString().trim();
if (!stagedFiles) {
	console.log('⚠️ No hay archivos staged. Nada que verificar.');
	process.exit(0);
}

// Lint y estilo
run('pnpm lint:fix', 'Revisando sintaxis y estilo de código (Lint)');
run('pnpm stylelint:fix', 'Revisando CSS/SCSS (Stylelint)');

// Prettier
run(`pnpx prettier --check`, 'Verificando formato de código (Prettier)');
console.log('✅ Pre-commit checks pasaron correctamente!');

console.log(`🎉 Buen trabajo, ${execSync('git config user.name').toString().trim()}! Tu commit está limpio.`);

process.exit(0);
