import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { mEmpleado } from '../models/mEmpleado';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() empleadoSent = new EventEmitter()
  empleado: mEmpleado;
  constructor() { 
    this.empleado = new mEmpleado('','','','');
  }

  enviarEmpleado(){
    this.empleadoSent.emit(this.empleado);
    this.empleado = new mEmpleado('','','','');
  }

  ngOnInit() {
  }

}
