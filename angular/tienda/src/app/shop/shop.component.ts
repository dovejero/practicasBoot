import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  listaProductos: any;
  fProducto: string;
  idtoken: any;
  constructor(private shopService: ShopService) {
    this.fProducto = 'all';
    this.shopService.getAll().then((res) => {
      console.log(res)
      this.listaProductos = res;

    }).catch((error) => {

    })

  }

  ngOnInit() {
  }

  buscarCategoria() {
    this.shopService.getOne(this.fProducto).then((res) => {
      this.listaProductos = res;
    })
  }


  comprarProducto(idProducto) {
    if (localStorage.getItem('tokenCarrito')) {
      this.addProducto(idProducto);
      // Agregar al carrito
    } else {
      this.shopService.getToken().then((res) => {
        localStorage.setItem('tokenCarrito', res['token_cart']);
        this.addProducto(idProducto)
      }).catch((error) => {
        console.log('error')
      })
    }
  }

  addProducto(idProducto) {
    console.log('IP: ', idProducto);
    this.shopService.addProd(idProducto)
  }

}
