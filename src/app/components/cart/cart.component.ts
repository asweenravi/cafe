import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataFeederService } from 'src/app/services/data-feeder.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart;
  constructor(
    private router: Router,
    private dataFeeder: DataFeederService
  ) { }

  ngOnInit() {
    this.cart = this.dataFeeder.getCart();
  }

  navigateToHome() {
    this.router.navigate(['home']);
  }

}
