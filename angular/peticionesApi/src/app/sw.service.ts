import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwService {

  constructor(private httpClient: HttpClient) {

  }

  getPlanets() {
    return this.httpClient.get('https://swapi.co/api/planets/?format=json')
  }

  getPlanetsPromise() {
    return this.httpClient.get('https://swapi.co/api/planets/?format=json').toPromise();
  }
  getPlanetsUrl(url) {
    return this.httpClient.get(url).toPromise();
  }

  postMaxMin(objeto) {
    return this.httpClient.post('http://randomnum.ngrok.io/random/num', objeto).toPromise();
  }
}
