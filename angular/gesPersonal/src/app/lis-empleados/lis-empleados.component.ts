import { Component, OnInit, Input } from '@angular/core';
import { mEmpleado } from '../models/mEmpleado';

@Component({
  selector: 'app-lis-empleados',
  templateUrl: './lis-empleados.component.html',
  styleUrls: ['./lis-empleados.component.css']
})
export class LisEmpleadosComponent implements OnInit {
  @Input() empleados: mEmpleado[];
  
  constructor() {
    this.empleados = [];
  }

  ngOnInit() {
  }

}
