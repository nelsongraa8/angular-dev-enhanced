/* eslint-disable no-console */
const { execSync } = require('child_process');

try {
  // Obtiene detalles de los archivos en el área de preparación, incluyendo el estado (A para agregado, D para eliminado)
  const output = execSync('git diff --cached --name-status', { encoding: 'utf-8' });

  // Filtra solo los archivos .spec.ts que están siendo agregados en el directorio src/ o subdirectorios
  const files = output.split('\n').filter(line => {
    const [status, file] = line.split('\t');
    return status === 'A' && file.startsWith('src/') && file.endsWith('.spec.ts');
  });

  if (files.length > 0) {
    console.error('Error: No se permite hacer commit de archivos .spec.ts en src/ o subdirectorios.');
    // Muestra solo los nombres de los archivos, sin el estado
    console.error(files.map(line => line.split('\t')[1]).join('\n'));
    process.exit(1); // Sale con error, bloqueando el commit
  }
} catch (error) {
  console.error('Error al ejecutar el script de pre-commit:', error);
  process.exit(1); // Sale con error si hay un problema ejecutando el script
}
