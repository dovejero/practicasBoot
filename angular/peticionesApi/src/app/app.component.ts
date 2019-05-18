import { Component } from '@angular/core';
import { SwService } from './sw.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number;
  planetas: any;
  url: string;
  disSiguiente: boolean;
  disAnterior: boolean;
  envioPostMax: number;
  envioPostMin: number;
  valRandom: string;

  constructor(private swService: SwService) {
    this.disAnterior = true;
    this.disSiguiente = false;
    this.contador = 1;
    this.swService.getPlanets().subscribe((res) => {
      // this.planetas = res['results']
    })
    this.swService.getPlanetsPromise().then((res) => {
      console.log(res)
      this.planetas = res['results']
      this.url = res['next'];
    }).catch((error) => {
      console.log('Error: ', error)
      this.planetas = [{ name: 'Error' }];
    })

  }

  paginado(masOmenos) {
    this.contador = this.contador + masOmenos;
    this.swService.getPlanetsUrl('https://swapi.co/api/planets/?page=' + this.contador + '&format=json').then((res) => {
      this.planetas = res['results']
    })
  }

  siguiente() {
    this.swService.getPlanetsUrl(this.url).then((res) => {
      this.url = res['next'];
      if (this.url == null) {
        this.disSiguiente = true;
      } else {
        this.disSiguiente = false;
      }
      this.planetas = res['results'];
    })
  }

  anterior() {
    this.swService.getPlanetsUrl('https://swapi.co/api/planets/?page=' + this.contador + '&format=json').then((res) => {
      this.planetas = res['results']
      this.url = res['previous'];
      if (this.url == null) {
        this.disAnterior = true;
      } else {
        this.disAnterior = false;
      }
    })
  }

  genRandom() {
    let objeto = { 'max': this.envioPostMax, 'min': this.envioPostMin }
    this.swService.postMaxMin(objeto).then((res) => {
      this.valRandom = res['success']
    })
  }
}