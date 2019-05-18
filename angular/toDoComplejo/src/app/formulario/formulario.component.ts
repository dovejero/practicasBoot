import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tareaTmp: any;
  @Output() todoSent = new EventEmitter();

  constructor() { 
    this.tareaTmp = {};

  }

  enviarDatos(){
    // console.log(this.tareaTmp)
    this.todoSent.emit(this.tareaTmp);
    this.tareaTmp = {};
  }
  ngOnInit() {
  }

}
