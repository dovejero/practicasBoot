class Animal {
    constructor (pNombre, pSexo) { 
        this.nombre = pNombre;
        this.sexo = pSexo;
    }
}

class Perro extends Animal{
    constructor(pNombre, pSexo, pRaza) {
        super(pNombre, pSexo);
        this.raza = pRaza;
    }

    mostrar() {
        // return 'Mi nombre es ' + this.nombre + ' y mi sexo es ' + this.sexo;
        return `Mi nombre es ${this.nombre} y mi sexo es ${this.sexo}`
    }
}

class Pajaro extends Animal{
    constructor(pNombre, pSexo, pVuela) {
        super(pNombre, pSexo);
        this.vuela = pVuela;
    }

    mostrar() {
        // return 'Mi nombre es ' + this.nombre + ' y mi sexo es ' + this.sexo;
        return `Mi nombre es ${this.nombre} y mi sexo es ${this.sexo} y `
    }
}

let perro1 = new Perro('Boby', 'M', 'pitbull');
let pajaro1 = new Pajaro('Pepa', 'F', 'canario');
console.log(perro1.mostrar());
console.log(pajaro1.mostrar());