import { Injectable } from '@angular/core';
import { ESCRITORES } from './db/escritores.db';
import { LIBROS } from './db/libros.db';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  getAll(){
    return ESCRITORES;
  }

  getUnEscritor(id){
    return ESCRITORES.find(item => item.id == id)
  }

  getLibrosEscritor(idEscritor){
    return LIBROS.filter(item => item.escritor == idEscritor)
  }
}
