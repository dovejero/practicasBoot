import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrComida: Producto[];
  arrBebida: Producto[];
  listaTratadaView: any[];

  constructor() {

    this.arrComida = [
      new Producto('Patatas Bravas', 4.5, 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/09/05/15361549567323.jpg'),
      new Producto('Huevos Rotos', 4.5, 'https://canalcocina.es/medias/_cache/zoom-ce2dc95fd5d8cc134220da1eaeb0ad51-920-518.jpg'),
      new Producto('Calamares', 4.5, 'https://s4.eestatic.com/2015/05/07/cocinillas/Cocinillas_31506850_116173945_1706x960.jpg'),
      new Producto('Tortilla', 4.5, 'https://canalcocina.es/medias/_cache/zoom-dac253a43451f88cc51c1b0d746a78bd-920-518.jpg'),
      new Producto('Bocadillo', 4.5, 'https://canalcocina.es/medias/_cache/zoom-31951e127067c6b4567116f2faca7860-920-518.jpg')
    ]
    this.arrBebida = [
      new Producto('Refresco', 4.5, 'https://www.nicepng.com/png/full/355-3555175_refrescos-en-png-soft-drink.png'),
      new Producto('Cerveza', 4.5, 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/11/19/15426304202045.jpg'),
      new Producto('Vino', 4.5, 'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365cdf3787b2187a1f114a/vino-tinto.jpg'),
      new Producto('Zumo', 4.5, 'https://definicion.de/wp-content/uploads/2015/05/Zumo.jpg')
    ]
    this.listaTratadaView = []
  }
  listaTratada(pProducto) {
    if (this.listaTratadaView.length == 0) {
      this.listaTratadaView.push({ cantidad: 1, producto: pProducto });
    } else {
      // let indice = 0
      // let encontrado = false

      let prodEncontrado = this.listaTratadaView.find((item) => item.producto.nombre == pProducto.nombre)

      if (prodEncontrado) {
        prodEncontrado.cantidad++
      } else {
        this.listaTratadaView.push({ cantidad: 1, producto: pProducto });
      }

      // for (let i=0; i<this.listaTratadaView.length; i++){
      //   if (this.listaTratadaView[i].producto.nombre == pProducto.nombre){
      //     encontrado = true;
      //     indice = i;
      //   }
      // }
      // if (encontrado){
      //   this.listaTratadaView[indice].cantidad ++
      // } else {
      //   this.listaTratadaView.push({ cantidad: 1, producto: pProducto });
      // }
    }
  }
  eliminarProducto(pProducto){

    let indiceEncontrado = this.listaTratadaView.findIndex((item) => item.producto.nombre == pProducto.producto.nombre);
    
    if (this.listaTratadaView[indiceEncontrado].cantidad > 1) {
      this.listaTratadaView[indiceEncontrado].cantidad--
    } else {
      this.listaTratadaView.splice(indiceEncontrado, 1)
    }

  }
}
