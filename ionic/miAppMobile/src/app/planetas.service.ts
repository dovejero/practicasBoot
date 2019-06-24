import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {
  serverApi: string;
  constructor(private httpClient: HttpClient) {
    this.serverApi = 'https://swapi.co/api/planets/'
  }

  getPlanetas() {
    return this.httpClient.get(this.serverApi).toPromise();
  }
}
