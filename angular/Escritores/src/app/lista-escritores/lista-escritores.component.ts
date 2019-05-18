import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {
  arrEscritores: Escritor[]; 
  escritorDetalle: Escritor;
  constructor(private router: Router, private escritoresService: EscritoresService) {
    this.arrEscritores = this.escritoresService.getAll();

    console.log (this.arrEscritores);
  }

  hClick(ruta){
    this.router.navigate([ruta])
    console.log(this.router.url);
  }

  ngOnInit() {
  }

}
