import { Component, OnInit } from '@angular/core';
import { AlumnosServiceService } from 'src/app/service/alumnos-service.service';

@Component({
  selector: 'app-api-alumnos',
  templateUrl: './api-alumnos.component.html',
  styleUrls: ['./api-alumnos.component.css']
})
export class ApiAlumnosComponent implements OnInit {
  alumnos: any;
  constructor(private alumnosServiceService: AlumnosServiceService) {
    this.alumnos = [{}]
  }

  ngOnInit() {
    this.alumnosServiceService.getAll().then((res) => {
      this.alumnos = res;
      console.log(this.alumnos)
    }).catch((error) => {
      console.log('Error: ', error)
    })
  }

  eliminar(id) {
    this.alumnosServiceService.delId(id).then((res) => {
      console.log('Id: ', id)
    }).catch((error) => {
      console.log('Error: ', error)
    })
  }

}
