const fs = require('fs');

console.log('Inicializado');

// Leer directorio (asíncrona)
// fs.readdir('../../', (error, files) => {
//     files.forEach(file => {
//         console.log(file);
//     });
// });

// Leer directorio (síncrona)
fs.readdirSync('../../').forEach(file => {
    console.log(file);
});

console.log('Finalizado');