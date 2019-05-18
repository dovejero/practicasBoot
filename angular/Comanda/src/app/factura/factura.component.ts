import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  @Input() listadoPintar: any[];
  @Output() elementoElim = new EventEmitter;

  constructor() {
    this.listadoPintar = [];
  }
  suma() {
    let precioFinal = 0;
    if (this.listadoPintar && this.listadoPintar.length != 0) {
      for (let elemento of this.listadoPintar) {
        // console.log(elemento);
        precioFinal += elemento.producto.precio * elemento.cantidad;
      }
      return precioFinal;
    }
  }

  eliminar(producto){
    this.elementoElim.emit(producto);
  }
  
  ngOnInit() {
  }

}
