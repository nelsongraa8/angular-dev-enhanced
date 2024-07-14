/* eslint-disable no-console */
const { execSync } = require('child_process');

try {
  const output = execSync('git diff --cached --name-only', { encoding: 'utf-8' });

  const files = output.split('\n').filter(file => file.startsWith('src/') && file.endsWith('.spec.ts'));

  if (files.length > 0) {
    console.error('Error: No se permite hacer commit de archivos .spec.ts en src/ o subdirectorios.');
    console.error(files.join('\n'));
    process.exit(1); // Sale con error, bloqueando el commit
  }
} catch (error) {
  console.error('Error al ejecutar el script de pre-commit:', error);
  process.exit(1); // Sale con error si hay un problema ejecutando el script
}
