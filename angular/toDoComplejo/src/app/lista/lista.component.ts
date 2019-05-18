import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { toDo } from '../models/todo.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnChanges {
  @Input() listaDatos: toDo[];
  @Input() Pbooleano: boolean;
  @Input() numtareas: number;
  @Output() numtareasChange = new EventEmitter();
  
  constructor() {
    this.listaDatos = [];
  }
  eliminarItem(index){
    console.log(index);
    this.listaDatos.splice(index, 1);
    this.numtareasChange.emit(this.listaDatos.length);
  }
  marcarCompleta(estado){
    estado.completa = !estado.completa;
  }
  // ngOnInit() {
  //   this.numtareasChange.emit(this.listaDatos.length);
  // }
  ngOnChanges(changes: SimpleChanges){
    console.log('SC: ', changes);
    // this.numtareasChange.emit(this.listaDatos.length);
  }
}
