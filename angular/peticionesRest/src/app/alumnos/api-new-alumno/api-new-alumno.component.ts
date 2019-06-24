import { Component, OnInit } from '@angular/core';
import { AlumnosServiceService } from 'src/app/service/alumnos-service.service';

@Component({
  selector: 'app-api-new-alumno',
  templateUrl: './api-new-alumno.component.html',
  styleUrls: ['./api-new-alumno.component.css']
})
export class ApiNewAlumnoComponent implements OnInit {
  alumno: any;
  constructor(private alumnosServiceService: AlumnosServiceService) {
    this.alumno = {};
  }

  ngOnInit() {
  }

  enviarAlumno() {
    this.alumno['fecha_matricula'] = new Date();
    this.alumnosServiceService.addNew(this.alumno).then((res) => {
      console.log('Alumno: ', this.alumno)
    }).catch((error) => {
      console.log('Error: ', error)
    })

  }

}
