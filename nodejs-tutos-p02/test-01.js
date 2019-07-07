const fs = require('fs');

console.log('Iniciado');

// 'utf-8' es para convertir de 'c3 89 73 74 ...' -> 'Éste es un archivo...'
fs.readFile('data.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(`Error ${error}`);
    } else {
        console.log(data);
    }
});

console.log('Finalizado');
