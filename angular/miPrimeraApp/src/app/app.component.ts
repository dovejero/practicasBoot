import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miPrimeraApp';
  varInput: string;
  salida: string;
  suma: number;
  numeros: number[];

  constructor() {
    this.varInput = 'Prueba 2 input'
  }

  eventoOutput(parametro: string){
    console.log('finalizado', parametro)
    this.salida = parametro;
  }
  OutputSuma(parametro: number){
    console.log('suma', parametro)
    this.suma = parametro;
  }
}
