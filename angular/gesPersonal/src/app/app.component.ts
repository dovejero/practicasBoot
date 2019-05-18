import { Component } from '@angular/core';
import { mEmpleado } from './models/mEmpleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'gesPersonal';
  arrayEmpleados : mEmpleado[];
  constructor(){
    this.arrayEmpleados = [];
  }
  
  hEmpleadoSent(empleado){
    let newEmpleado = new mEmpleado(empleado.nombre, empleado.apellidos, empleado.departamento, empleado.imagen)
    this.arrayEmpleados.push(newEmpleado)
    console.log(this.arrayEmpleados);
  }
}
