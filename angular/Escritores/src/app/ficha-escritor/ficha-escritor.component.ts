import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-ficha-escritor',
  templateUrl: './ficha-escritor.component.html',
  styleUrls: ['./ficha-escritor.component.css']
})
export class FichaEscritorComponent implements OnInit {
  escritor: Escritor;
  mLibros: boolean;
  constructor(private escritoresService: EscritoresService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe((params) => {
      this.escritor = this.escritoresService.getUnEscritor(params.identificador);
    })
    this.mLibros = true;
    console.log('URL: ', this.router.url)
    // if (this.router.url == '/escritor/' + this.escritor.id){
    //   this.mLibros = true;
    // } else {
    //   this.mLibros = false;
    // }
    if (this.router.url.endsWith('/libros')) {
      this.mLibros = false;
    } else {
      this.mLibros = true;
    }
  }

  ngOnInit() {
  }

}
