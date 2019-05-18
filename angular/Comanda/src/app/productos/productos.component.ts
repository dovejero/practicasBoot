import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() titulo: string;
  @Input() lisProducto: Producto[];
  @Output() listaSelec = new EventEmitter();
  constructor() {
    this.lisProducto = [];
  }

  seleccionado(elemento){
    // this.listadoProductos.push(elemento)
    this.listaSelec.emit(elemento);
  }


  ngOnInit() {
  }

}
