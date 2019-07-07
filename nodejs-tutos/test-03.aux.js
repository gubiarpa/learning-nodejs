
/*
module.exports.suscriptores = suscriptores;
module.exports.saludar = saludar;
*/

// Ahora en formato json
module.exports = {
    suscriptores : 22000,
    saludar : () => {
        console.log('Hey, Yeri!');
    },
    sumar : (a, b) => {
        return a + b;
    },
    mostrar: (a) => a + 10
};
