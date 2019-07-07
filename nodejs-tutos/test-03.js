const aux = require('./test-03.aux');

setTimeout(() => {
    console.log('Terminé');
}, 2000);

let rpta = aux.sumar(4, 5);
console.log(`Respuesta: ${rpta}`);

let mostrar = aux.mostrar(4);
console.log(`Mostrar: ${mostrar}`);

//