export class Libro{
    id: number;
    titulo: string;
    publicado: number;
    imagen: string;
    escritor: number;

    constructor(pId, pTitulo, pPublicado, pImagen, pEscritor){
        this.id = pId;
        this.titulo = pTitulo;
        this.publicado = pPublicado;
        this.imagen = pImagen;
        this.escritor = pEscritor;
    }
}

