import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {
  colorSemaforo: string;
  indice: number;
  Acolor: string[];
  pararIntervalo: any;
  oculto: boolean;
  constructor() {
    this.colorSemaforo = 'rojo';
    this.Acolor = ['rojo', 'ambar', 'verde'];
    this.oculto = true;
  }

  cambiarColor(color) {
    console.log(color);
    clearInterval(this.pararIntervalo);
    this.colorSemaforo = color;

  }

  ocultar(){
    console.log('ocultar');
    this.oculto = !this.oculto;
  }

  ngOnInit() {
    this.indice = 0;
    this.pararIntervalo= setInterval(() => {
      if (this.indice == 3) {
        this.indice = 0;
      } 
      this.colorSemaforo = this.Acolor[this.indice];
      
      this.indice++;
    }, 1000);
  }

}
