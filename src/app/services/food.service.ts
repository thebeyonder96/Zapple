import { Injectable } from '@angular/core';
import { food } from '../shared/models/food';
import { sampleTags, sample_foods } from 'src/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  FOODS_BY_ID_URL,
  FOODS_BY_SEARCH_URL,
  FOODS_BY_TAG_URL,
  FOODS_TAG_URL,
  FOODS_URL,
} from '../shared/constants/url';
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  // Get all foods
  getAll(): Observable<food[]> {
    return this.http.get<food[]>(FOODS_URL);
  }

  // Get food by search
  getFoodBySearch(searchTerm: string) {

    return this.http.get<food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  // Get all tags
  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAG_URL);
  }

  // Get food by tag
  getFoodByTag(tag: string): Observable<food[]> {
    console.log(tag);

    return tag === 'All'
      ? this.getAll()
      : this.http.get<food[]>(FOODS_BY_TAG_URL + tag);
  }

  // Get food by id
  getFoodById(foodId: string): Observable<food> {
    return this.http.get<food>(FOODS_BY_ID_URL + foodId);
  }
}
