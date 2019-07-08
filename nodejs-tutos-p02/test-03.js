const fs = require('fs');

console.log('Iniciado');

// Leer un archivo
let data = fs.readFileSync('data.txt', 'utf-8'); // 'utf-8' es para convertir de 'c3 89 73 74 ...' -> 'Éste es un archivo...'
console.log(data);

console.log('Finalizado');

// Agregar texto a un archivo
fs.appendFile('data.txt', '\nTexto agregado', (error) => {
    if (error) console.log(`Error: ${error}`);
});

// Eliminar un archivo
fs.unlink('data-delete.txt', (error) => {
    if (error) throw error;
    console.log('¡Removed!');
});

//
fs.createReadStream('data.txt').pipe(fs.createWriteStream('data-bug.txt'));