const _ = require('lodash');

if (process.argv[2] === 'usuario') {
    if (process.argv[3] === 'u5u4r10') {
        let x = { nombre : "Billy" }
        let y = { apodo : "gubiarpa" }
        let z = [
            { nombre : "Nicolás", apellido : "Arredondo", apodo : "yicodash", edad : 7 },
            { nombre : "Tiana", apellido : "Arredondo", apodo : "wawish", edad : 3 }
        ]

        // let resultado = _.assign(x, y);
        // console.log(resultado);

        // _.times(3, () => console.log('Giuseppi'));

        // Buscar objetos según propiedad
        let resultado = _.find(z, { apellido : "Arredondo"});
        console.log(resultado);
    } else {
        console.log('Usuario inválido');
    }
}

