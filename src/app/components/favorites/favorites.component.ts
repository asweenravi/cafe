import { Component, OnInit } from '@angular/core';
import { DataFeederService } from 'src/app/services/data-feeder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites = [];
  cart;
  constructor(
    private dataFeeder: DataFeederService,
    private router: Router) { }

  ngOnInit() {
    this.getFavourite();
    this.getCartNumber();
  }

  getFavourite() {
    const self =  this;
    this.dataFeeder.getData().subscribe((data) => {
      console.log(data);
      // tslint:disable-next-line:no-string-literal
      data['recipes'].forEach(element => {
        if (element.isFavourite) {
          self.favorites.push(element);
        }
      });
      console.log(self.favorites);
    });
  }

  getCartNumber() {
    this.cart = this.dataFeeder.getCart();
  }

  openCart() {
    this.router.navigate(['cart']);
  }

  addToCart(item) {
    this.dataFeeder.addToCart(item);
    alert('one item added successfully');
  }

}
