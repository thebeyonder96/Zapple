import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  foods!: any[];

  constructor(private foodService: FoodService, private route: ActivatedRoute) {
    this.route.params.subscribe((val) => {
      // By search
      if (val.searchTerm) {
        this.foods = foodService.getFoodBySearch(val.searchTerm);
      }
      // By tag
      else if (val.tag) {
        this.foods = this.foodService.getFoodByTag(val.tag);
      }
      // Default all foods

      else {
        this.foods = foodService.getAll();
      }
    });
  }
}
