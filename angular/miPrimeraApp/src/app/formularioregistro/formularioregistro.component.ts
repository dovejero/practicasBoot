import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularioregistro',
  templateUrl: './formularioregistro.component.html',
  styleUrls: ['./formularioregistro.component.css']
})
export class FormularioregistroComponent implements OnInit {
  persona: any;

  constructor() { 
    this.persona = {};
  }
  botonFormulario(){
    console.log('Datos formulario: ', this.persona);
  }
  ngOnInit() {
  }

}
