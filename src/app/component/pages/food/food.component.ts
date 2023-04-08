import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent {
  Food!:food;

   constructor(private route:ActivatedRoute,private foodService:FoodService,private cartService:CartService,private router:Router){
    route.params.subscribe(val=>{
      if(val.id){
        foodService.getFoodById(val.id).subscribe(val=>{
          this.Food= val;
        })
        console.log(this.Food);

      }
    })
   }

   addToCart(){
    this.cartService.addToCart(this.Food);
    this.router.navigate(['/cart-page']);
   }
}
