import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
    let foodObservable:Observable<food[]>
    this.route.params.subscribe((val) => {
      if (val.searchTerm) {
        foodService.getFoodBySearch(val.searchTerm).subscribe(val=>{
          this.foods = val
        })
      }
      else if (val.tag) {
        this.foodService.getFoodByTag(val.tag).subscribe((val) => {
          this.foods = val;
        });
      }

      else {
        foodObservable = foodService.getAll();

        foodObservable.subscribe(val=>{
          this.foods = val;
        })
      }
    });
  }
}
