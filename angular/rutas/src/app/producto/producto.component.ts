import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  // ruta: any;
  ruta2: string;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      // console.log(params);
      // this.ruta = params;
      this.ruta2= params.identificador;

    })
   }

  ngOnInit() {
  }

}
