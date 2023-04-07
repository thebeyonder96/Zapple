import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isHover=false;
  cartQuantity=0;

  constructor(private cartService:CartService){
    cartService.getCartObservable().subscribe(val=>{
      this.cartQuantity = val.totalCount
    })
  }

  hover(){
    this.isHover= !this.isHover
  }


}
