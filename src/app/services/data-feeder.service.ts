import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFeederService {
  cart = [];
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://temp.dash.zeta.in/food.php');
  }

  addToCart(item) {
    this.cart.push(item);
  }

  getCart() {
    return this.cart;
  }


}
