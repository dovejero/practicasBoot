let verdadero: boolean = true;
let entero: number = 4
let cadena: string = `esto es un número ${entero}`

console.log(verdadero, entero, cadena);
let arrNum: number[] = [1,2,3,4,5,6];
let arrAny: any[] = ['hola', 2, 3, true];

function sumar(a: number): number{
    return a;
}

class Persona {

    nombre: string
    apellidos: string
    edad: number

    constructor(pNombre: string, pApellidos: string, pEdad: number) {
        this.nombre = pNombre
        this.apellidos = pApellidos
        this.edad = pEdad
    }

    mostrar(): string {
        return `${this.nombre} ${this.apellidos}`
    }
}
let persona = new Persona('Boby', 'M', 12).mostrar();
console.log(persona);