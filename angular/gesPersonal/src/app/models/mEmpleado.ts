export class mEmpleado{
    nombre: string;
    apellidos: string;
    departamento: string;
    imagen: string;

    constructor(pNombre, pApellidos, pDepartamento, pImagen){
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.departamento = pDepartamento;
        this.imagen = pImagen;
    }
}