import { Component, OnInit } from '@angular/core';
import { PersonasService } from './../personas.service';
@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {
  arrPersonas: any[];
  arrPersonasMayores: any[];
  arrPersonasNombre: any;
  nombre: string;
  constructor(private personasService: PersonasService) { 
    this.arrPersonas = [];
    this.arrPersonasMayores = [];
    this.arrPersonasNombre = [];
    this.nombre = '';
  }

  ngOnInit() {
    this.arrPersonas = this.personasService.getAll();
    this.arrPersonasMayores = this.personasService.getMayoresEdad();
    
  }
  buscarNombre(){
    console.log(this.nombre);
    this.arrPersonasNombre = this.personasService.getPersonasNombre(this.nombre);
  }

}
