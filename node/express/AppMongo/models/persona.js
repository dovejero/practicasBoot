const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let personaSchema = new Schema({
    nombre: String,
    apellidos: String,
    edad: Number,
    empresa: String,
    coche: Boolean
})

personaSchema.virtual('nombre_completo').get(function () {
    return this.nombre + " " + this.apellidos
})

personaSchema.virtual('nombre_completo').set(function (value) {
    let stringSplit = value.split(' ')
    this.nombre = stringSplit[0];
    this.apellidos = stringSplit[1];
})
module.exports = mongoose.model('Persona', personaSchema)