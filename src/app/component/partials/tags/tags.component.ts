import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent {
  tags!: Tag[];

  constructor(private foodService: FoodService) {
    foodService.getAllTags().subscribe((val) => {
      this.tags = val;
    });
  }
}
