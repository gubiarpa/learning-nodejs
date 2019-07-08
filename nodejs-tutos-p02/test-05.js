const fs = require('fs');

// Copiar archivo
fs.createReadStream('data.txt').pipe(fs.createWriteStream('data-bug.txt'));