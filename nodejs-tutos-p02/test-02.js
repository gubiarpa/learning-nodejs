const fs = require('fs');

console.log('Iniciado');

// 'utf-8' es para convertir de 'c3 89 73 74 ...' -> 'Éste es un archivo...'
let data = fs.readFileSync('data.txt', 'utf-8');
console.log(data);

console.log('Finalizado');
fs.rename('data.txt', 'data-renamed.txt', (error) => {
    if (error) throw error;
    console.log('¡Renamed!');
});
