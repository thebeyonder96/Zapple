import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isHover = false;
  cartQuantity = 0;
  isShow = false;
  userData!:User

  constructor(private cartService: CartService,private user:UserService) {
    cartService.getCartObservable().subscribe((val) => {
      this.cartQuantity = val.totalCount;
    });

    user.userObservable.subscribe(val=>{
      this.userData = val

    })
  }

  logout(){
    this.user.logout()
  }

  hover() {
    this.isHover = !this.isHover;
  }

  toggleNav() {
    this.isShow = !this.isShow;
  }

  get isAuth(){
    return this.userData.token;
  }
}
