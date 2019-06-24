import { Component, OnInit, Input } from '@angular/core';
import { AlumnosServiceService } from 'src/app/service/alumnos-service.service';

@Component({
  selector: 'app-api-edit-alum',
  templateUrl: './api-edit-alum.component.html',
  styleUrls: ['./api-edit-alum.component.css']
})
export class ApiEditAlumComponent implements OnInit {
  alumno: any;

  constructor(private alumnosServiceService: AlumnosServiceService) {
    this.alumno = {};
  }

  ngOnInit() {
    this.alumnosServiceService.getById(this.alumnosServiceService.idForm).then((res) => {
      this.alumno = res;
    }).catch((error) => {
      console.log('Error: ', error)
    })
  }

  enviarAlumno() {
    this.alumno['fecha_matricula'] = new Date();
    this.alumnosServiceService.editAlum(this.alumno).then((res) => {
      console.log('Alumno: ', this.alumno)
    }).catch((error) => {
      console.log('Error: ', error)
    })
  }

}
