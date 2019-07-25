import { Component, OnInit } from '@angular/core';
import { DataFeederService } from 'src/app/services/data-feeder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-listing',
  templateUrl: './food-listing.component.html',
  styleUrls: ['./food-listing.component.css']
})
export class FoodListingComponent implements OnInit {
  categories: any;
  activeCategory = '';
  recipes: any;
  inputText = '';
  displayRecipies: any;
  constructor(
    private dataFeeder: DataFeederService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    const self = this;
    this.dataFeeder.getData().subscribe((data) => {
      // tslint:disable-next-line:no-string-literal
      self.categories = data['categories'];
      // tslint:disable-next-line:no-string-literal
      self.recipes = data['recipes'];
      self.displayRecipies = JSON.parse(JSON.stringify(self.recipes));
    });
  }

  searchKeyWord(e) {
    this.recipes = [];
    this.displayRecipies.filter((element) => {
      if (this.activeCategory === '') {
        if (element.name.toLowerCase().includes(this.inputText.toLowerCase())) {
          this.recipes.push(element);
        }
      } else if (this.activeCategory === element.category) {
        if (element.name.toLowerCase().includes(this.inputText.toLowerCase())) {
          this.recipes.push(element);
        }
      }

    });
  }

  addToCart(item) {
    this.dataFeeder.addToCart(item);
    alert('one item added successfully');
  }


  openDetails(name) {
    this.router.navigate(['details', name]);
  }

}
