import { Injectable } from '@angular/core';
import { food } from '../shared/models/food';
import { sampleTags, sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class FoodService {

  constructor() {}

  // Get all foods
  getAll(): food[] {
    return sample_foods;
  }

  // Get food by search
  getFoodBySearch(searchTerm:string){
    return this.getAll().filter(food=> food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  // Get all tags
  getAllTags(){
    return sampleTags;
  }

  // Get food by tag
  getFoodByTag(tag:string):food[]{
    return tag == 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))
  }
}
