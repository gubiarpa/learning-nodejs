const fs = require('fs');

console.log('Iniciado');

// 'utf-8' es para convertir de 'c3 89 73 74 ...' -> 'Éste es un archivo...'
/*
fs.readFile('data.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(`Error ${error}`);
    } else {
        console.log(data);
    }
});
*/

let data = fs.readFileSync('data.txt', 'utf-8');
console.log(data);

console.log('Finalizado');

/*
: Renombrar archivo :
fs.rename('data.txt', 'data-renombrado.txt', (error) => {
    if (error) throw error;
    console.log('¡Renombrado!');
});
*/

fs.appendFile('data.txt', 'Gracias por suscribirte', (error) => {
    if (error) console.log(`Error ${error}`);
});