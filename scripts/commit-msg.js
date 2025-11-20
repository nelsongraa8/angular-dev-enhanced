#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-require-imports */
const { execSync } = require('child_process');
const fs = require('fs');

const commitFile = process.argv[2];
const msg = fs.readFileSync(commitFile, 'utf-8').trim();

console.log('📝 Verificando que el mensaje de commit cumpla con las reglas de commitlint...');
try {
  execSync(`npx commitlint --edit "${commitFile}"`, { stdio: 'pipe' });
  console.log('✅ El mensaje del commit cumple las reglas de Commitlint.');
} catch {
  console.error('❌ El mensaje del commit no cumple las reglas de Commitlint.');
  process.exit(1);
}

console.log('📝 Verificando longitud del mensaje de commit...');
if (msg.length < 15) {
  console.warn(`❌ Mensaje muy corto (${msg.length} caracteres), intenta ser más descriptivo.`);
}
if (msg.length > 200) {
  console.warn(`❌ Mensaje muy largo (${msg.length} caracteres), intenta resumirlo.`);
}

console.log(`✅ Mensaje de commit verificado correctamente.`);
console.log(`¡Buen trabajo, ${execSync('git config user.name').toString().trim()}! 🎉`);

process.exit(0);
