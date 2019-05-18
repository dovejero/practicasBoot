export class toDo{
    titulo: string;
    descripcion: string;
    categoria: string;
    completa: boolean;

    constructor(pTitulo, pDescriptcion, pCategoria){
        this.titulo = pTitulo;
        this.descripcion = pDescriptcion;
        this.categoria = pCategoria;
        this.completa = false;
    }
}