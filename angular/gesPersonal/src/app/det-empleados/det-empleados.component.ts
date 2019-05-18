import { Component, OnInit, Input } from '@angular/core';
import { mEmpleado } from '../models/mEmpleado';

@Component({
  selector: 'app-det-empleados',
  templateUrl: './det-empleados.component.html',
  styleUrls: ['./det-empleados.component.css']
})
export class DetEmpleadosComponent implements OnInit {
  @Input() empleado: mEmpleado;
  constructor() { 
    this.empleado = new mEmpleado('', '', '', '')
  }

  ngOnInit() {
  }

}
