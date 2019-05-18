import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  resultado: string;
  numero: string;
  calculado: boolean;
  constructor() {
    this.resultado = "0";
    this.numero = "0";
    this.calculado = false;
   }
  operador(valor: string){
    if (this.resultado == "0" || this.calculado == true){
      this.resultado = valor;
      this.calculado = false;
    } else {
        this.resultado += valor;
    }
  }
  igual(valor: string){
      this.resultado= eval(this.resultado);
      this.calculado = true;
  }
  ngOnInit() {
  }

}
