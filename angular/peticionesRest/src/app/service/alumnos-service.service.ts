import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosServiceService {
  idForm: number;
  constructor(private httpClient: HttpClient) {
    this.idForm = 1;
  }



  getAll() {
    return this.httpClient.get('http://localhost:3000/api/alumnos').toPromise();
  }
  addNew(datos) {
    console.log('DATOS DATOS: ', datos)
    return this.httpClient.post('http://localhost:3000/api/alumnos', datos).toPromise();
  }
  delId(id) {
    return this.httpClient.delete('http://localhost:3000/api/alumnos/' + id).toPromise();
  }
  editAlum(datos) {
    console.log('DATOS DATOS: ', datos)
    return this.httpClient.post('http://localhost:3000/api/alumnos', datos).toPromise();
  }
  getById(id) {
    console.log('DATOS DATOS: ', id)
    return this.httpClient.get('http://localhost:3000/api/alumnos/' + id).toPromise();
  }

}
