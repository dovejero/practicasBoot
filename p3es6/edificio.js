class Persona {
    constructor(pNombre, pApellido, pEdad){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.edad = pEdad
    }

    mostrar(){
        return `Inquilino ${this.nombre} ${this.apellido} su edad es ${this.edad} \n`
    }
}

class Vivienda {
    constructor(pPiso, pLetra){
        this.piso = pPiso;
        this.letra = pLetra;
        this.inquilinos = new Array();
    }

    agregarInquilino(pPersona){
        this.inquilinos.push(pPersona);
    };

    mostrar(){
        /* return `Mi nombre es ${this.inquilinos[0].nombre} mi apellido es ${this.inquilinos[0].apellido} y mi edad es  ${this.inquilinos[0].edad} . 
        Vivo en el piso ${this.piso} en la letra ${this.letra}` */

        // return ` ${this.inquilinos[0].mostrar()} . 
        // Vivo en el piso ${this.piso} en la letra ${this.letra}`

        let res = `Vivienda. Piso ${this.piso}. Letra ${this.letra} \n`
        // for (let i=0; i< this.inquilinos.length; i++){
        //     res += this.inquilinos[i].mostrar();
        // }
        for (let inquilino of this.inquilinos){
            res += inquilino.mostrar();
        }
        return res;
    }
}

class Edificio {
    constructor(pCalle, pCasas){
        this.calle = pCalle;
        this.casa = pCasas;
        this.viviendas = new Array();
    }

    agregarCasa(pVivienda){
        this.viviendas.push(pVivienda);
    }
    
    mostrar(){
        // return ` ${this.vivienda[0].mostrar()} . 
        // Vivo en el edificio de la calle ${this.calle} en la casa ${this.casa}`

        let res = `Edificio. Calle ${this.calle}. Casa ${this.casa} \n`
        for (let vivienda of this.viviendas){
            res += vivienda.mostrar();
        }
        return res;
    }
}

let persona1 = new Persona('Pepe', 'Perez', 25);
let persona2 = new Persona('Juan', 'Martin', 32);
let vivienda1 = new Vivienda ('Cuarto', 'G');
let vivienda2 = new Vivienda ('Primero', 'A');
vivienda1.agregarInquilino(persona1);
vivienda1.agregarInquilino(persona2);

let edificio1 = new Edificio('Ilustracion', 'Azul');
edificio1.agregarCasa(vivienda1);
edificio1.agregarCasa(vivienda2);

// console.log(persona1);
// console.log(vivienda1.mostrar());
console.log(edificio1.mostrar());

