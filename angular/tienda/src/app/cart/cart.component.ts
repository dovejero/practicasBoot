import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  listaCarrito: any;
  constructor(private shopService: ShopService) {

  }

  ngOnInit() {
    this.getCarrito();
  }

  getCarrito() {
    this.shopService.getCarrito().then((res) => {
      console.log(res);
      this.listaCarrito = res;
    }).catch((error) => {
      console.log('error')
    })
  }

  deleteProducto(idProducto) {
    this.shopService.deleteProducto(idProducto).then((res) => {
      console.log(res);
      this.getCarrito()
      // this.listaCarrito = res;
    }).catch((error) => {
      console.log('error')
    })
  }
}
