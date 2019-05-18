import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'todoSent';
  elementoLista: string[];
  constructor(){
    this.elementoLista = [];
  }
  eventoEnviar(elemento){
    console.log('ASDF',elemento)
    // let newElemento = elemento;
    // let newElemento = `${elemento}`;
    this.elementoLista.push(elemento);
  }
}
