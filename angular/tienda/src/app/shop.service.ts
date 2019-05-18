import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  pedido: number;
  headers = new HttpHeaders();
  cantidadProductos: number;
  constructor(private httpClient: HttpClient) {

  }
  getAll(): Promise<any> {
    return this.httpClient.get('http://neolandshop.ngrok.io/items/').toPromise();
  }
  getOne(item: string): Promise<any> {
    if (item == 'all') {
      return this.getAll();
    } else {
      return this.httpClient.get('http://neolandshop.ngrok.io/items/' + item).toPromise();
    }
  }

  getToken() {
    return this.httpClient.post('http://neolandshop.ngrok.io/items/newcart', {}).toPromise();
  }

  addProd(idProd) {
    this.headers = this.headers.set('Cart-Token', localStorage.getItem('tokenCarrito'));
    return this.httpClient.post('http://neolandshop.ngrok.io/items/new', { item_id: idProd }, { headers: this.headers }).toPromise();
  }

  getCarrito() {
    this.headers = this.headers.set('Cart-Token', localStorage.getItem('tokenCarrito'));
    return this.httpClient.get('http://neolandshop.ngrok.io/items/cart', { headers: this.headers }).toPromise();
  }

  deleteProducto(idProducto) {
    this.headers = this.headers.set('Cart-Token', localStorage.getItem('tokenCarrito'));
    return this.httpClient.delete('http://neolandshop.ngrok.io/items/delete/' + idProducto, { headers: this.headers }).toPromise();
  }

}
