import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { DataFeederService } from 'src/app/services/data-feeder.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {
  foodItem;
  constructor(
    private route: ActivatedRoute,
    private dataFeeder: DataFeederService,
    private router: Router) { }

  ngOnInit() {
    this.getFoodDetails();
  }

  getFoodDetails() {
    const self = this;
    this.dataFeeder.getData().subscribe((data) => {
    // tslint:disable-next-line:no-string-literal
      self.foodItem = data['recipes'][self.route.params['value'].id];
    });
  }

  navigateToHome() {
    this.router.navigate(['home']);
  }

}
