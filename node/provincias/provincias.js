let fs = require('fs')
let provincias = require('./localizacion.json')
let contador = 1;
// console.log(provincias);
let stream = fs.createWriteStream('./localizacion.sql')

Object.entries(provincias).forEach(entry => {
    let key = entry[0];
    let value = entry[1];
    stream.write(`INSERT INTO provincias (idProvincia, nombre) VALUES (${contador}, '${key}'); \n`);
    value.forEach((item) => {
        stream.write(`INSERT INTO municipios (idProvincia, nombre, lat, lng) VALUES (${contador}, '${item['Población']}' , ${item['Latitud']}, ${item['Longitud']}); \n`);
    })
    contador++;
});

stream.close();