import { Injectable } from '@angular/core';
import { PERSONAS } from  './db/personas.db';
@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor() { }

  getAll(){
    return PERSONAS;
  }

  getMayoresEdad(){
    return PERSONAS.filter(item => item.edad > 18)
  }

  getPersonasNombre(nombre){
    return PERSONAS.find(item => item.nombre == nombre)
  }
}
