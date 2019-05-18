import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegloginService {
  headers = new HttpHeaders();
  constructor(private httpClient: HttpClient) {

  }

  registrar(objeto) {
    return this.httpClient.post('http://registrate.ngrok.io/register', objeto).toPromise();
  }

  validar(objeto) {
    return this.httpClient.post('http://registrate.ngrok.io/login', objeto).toPromise();

  }
  premiar() {
    this.headers = this.headers.set('user-token', localStorage.getItem('token'));
    return this.httpClient.get('http://registrate.ngrok.io/premio', { headers: this.headers }).toPromise();
  }
}

