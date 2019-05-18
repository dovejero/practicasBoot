import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() elemento = new EventEmitter()
  constructor() { }

  botonEnvio(elemLista){
    console.log(elemLista);
    this.elemento.emit(elemLista);
  }

  ngOnInit() {
  }

}
