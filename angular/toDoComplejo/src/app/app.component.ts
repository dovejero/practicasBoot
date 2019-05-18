import { Component } from '@angular/core';
import { toDo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoComplejo';
  arrayTareas: toDo[];
  // valorInicial: number;
  numeroTareas: number;
  booleanoP : boolean;

  constructor(){
    this.arrayTareas = [];
    this.booleanoP = true;
    // this.valorInicial = 10;
    this.numeroTareas = 0;
  }

  metodoOutput(valor: any){
    let objetoValor = new toDo(valor.titulo, valor.descripcion, valor.categoria);
    this.arrayTareas.push(objetoValor);
    this.numeroTareas = this.arrayTareas.length;
    this.booleanoP = !this.booleanoP;
    console.log('Valor: ', this.arrayTareas);
  }
}
