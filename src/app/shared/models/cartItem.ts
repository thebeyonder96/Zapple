import { food } from "./food";

export class cartItem{
  constructor(public food:food){}
  // food!:food;
  quantity:number= 1;
  price:number = this.food.price;
}
