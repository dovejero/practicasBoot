import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../models/libro.model';
import { EscritoresService } from '../escritores.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  id: number;
  arrLibros: Libro[]
  constructor(private activatedRoute: ActivatedRoute, private escritoresService: EscritoresService) { 
    this.activatedRoute.parent.params.subscribe(params => {
      console.log(params.identificador);
      this.id = params.identificador;
      this.arrLibros = this.escritoresService.getLibrosEscritor(params.identificador);
      console.log(this.arrLibros);

    })
  }

  ngOnInit() {
  }

}
