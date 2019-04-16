class Profesor{
    constructor(pNombre, pApellido, pExperiencia){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.experiencia = pExperiencia;
    }

    mostrarProfesor (){
        let res = `PROFESOR (nombre: ${this.nombre}, apellidos: ${this.apellido}, experiencia:
        ${this.experiencia})`

        return res;
    }
    
}

class Asignatura{
    constructor(pNombre, pProfesor){
        this.nombre = pNombre;
        this.profesor = pProfesor;
    }

    mostrarAsignatura(muestraProfesor) {
        if (muestraProfesor){
            let res = `ASIGNATURA (nombre: ${this.nombre})
            Asignatura impartida por: ${this.profesor.mostrarProfesor()}`

            return res;
        }
    }
    
}

class Estudiante{
    constructor(pNombre, pApellido){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.asignatura = new Array();
    }
    agregarAsignatura(asignatura){
        this.asignatura.push(asignatura);
    }

    mostrarEstudiante (){

        let res = `ESTUDIANTE (nombre: ${this.nombre}, apellidos: ${this.apellido} )
        Estas son las asignaturas que cursa: `

        for (let index = 0; index < this.asignatura.length; index++) {
             res += this.asignatura[index].mostrarAsignatura(true);
        }
        return res;
    }
    
}

class Universidad {
    constructor (pNombre){
        this.nombre = pNombre;
        this.alumnos = new Array ();
    }
    agregarAlumno(estudiante){
        this.alumnos.push(estudiante)
    }
    obtenerAlumnosAsignatura(nombreAsignatura){
        let contador = 0;
        for (let i = 0; i < this.alumnos.length; i++) {
            for (let j = 0; j < this.alumnos[i].asignatura.length; j++) {
                if (this.alumnos[i].asignatura[j].nombre == nombreAsignatura){
                    // console.log(this.alumnos[i].asignatura[j].nombre);
                    contador++;
                };
            }
        }
        return contador;
    }
    mostrarUniversidad(){
        let res = `UNIVERSIDAD(nombre: ${this.nombre})`
        for (let index = 0; index < this.alumnos.length; index++) {
            res += this.alumnos[index].mostrarEstudiante();
        }
        return res;
    }
}

//Profesor
let profesor1 = new Profesor('Ramón', 'García', 5);
let profesor2 = new Profesor('Rosa', 'Martinez', 9);
// console.log(profesor1.mostrarProfesor());
// console.log(profesor2.mostrarProfesor());

//Asignatura
let algebra = new Asignatura('Álgebra', profesor1);
let electronica = new Asignatura('Electrónica', profesor2);
let fisica = new Asignatura('Física', profesor2);

// console.log(algebra.mostrarAsignatura(false));
// console.log(electronica.mostrarAsignatura(true));
// console.log(fisica.mostrarAsignatura(true));

//Estudiante

let estudiante1 = new Estudiante('Pepe', 'Ortiz')
let estudiante2 = new Estudiante('Ana', 'Jiménez')
let estudiante3 = new Estudiante('Lola', 'López')
estudiante1.agregarAsignatura(algebra)
estudiante1.agregarAsignatura(fisica)
estudiante2.agregarAsignatura(electronica)
estudiante3.agregarAsignatura(algebra)
estudiante3.agregarAsignatura(electronica)
estudiante3.agregarAsignatura(fisica)
// console.log(estudiante1.mostrarEstudiante());
// console.log(estudiante2.mostrarEstudiante());
// console.log(estudiante3.mostrarEstudiante());

//Universidad
let uni1 = new Universidad('UC3M')
uni1.agregarAlumno(estudiante1)
uni1.agregarAlumno(estudiante2)
uni1.agregarAlumno(estudiante3)
console.log(uni1.mostrarUniversidad())
console.log(uni1.obtenerAlumnosAsignatura('Electrónica'))