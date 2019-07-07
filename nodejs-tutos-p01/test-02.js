const os = require('os'); // import os from 'os'; // es6
const fs = require('fs'); // manejo de archivos

let cpu = os.cpus(); // Objeto Json con info de la procesador
let sistema = os.platform(); // Nombre del sistema operativo
let usuario = os.hostname(); // Nombre del usuario (Hostname)

fs.appendFile('nicolas.txt', `Hola Nico al ${new Date()}\n`, function(error){
    if (error)
    {
        console.log('Surgió un error al crear el archivo.')
    }
});