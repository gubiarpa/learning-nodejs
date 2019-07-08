const fs = require('fs');

console.log('Iniciado');

// Leer un archivo
let data = fs.readFileSync('data.txt', 'utf-8'); // 'utf-8' es para convertir de 'c3 89 73 74 ...' -> 'Éste es un archivo...'
console.log(data);

console.log('Finalizado');
