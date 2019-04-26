var verdadero = true;
var entero = 4;
var cadena = "esto es un n\u00FAmero " + entero;
console.log(verdadero, entero, cadena);
var arrNum = [1, 2, 3, 4, 5, 6];
var arrAny = ['hola', 2, 3, true];
function sumar(a) {
    return a;
}
var Persona = /** @class */ (function () {
    function Persona(pNombre, pApellidos, pEdad) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.edad = pEdad;
    }
    Persona.prototype.mostrar = function () {
        return this.nombre + " " + this.apellidos;
    };
    return Persona;
}());
var persona = new Persona('Boby', 'M', 12).mostrar();
console.log(persona);
