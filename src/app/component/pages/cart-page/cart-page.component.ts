import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/cart';
import { cartItem } from 'src/app/shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  cart!: Cart;

  constructor(private cartService: CartService) {
    cartService.getCartObservable().subscribe((item) => {
      this.cart = item;
    });
  }

  removeFromCart(cartItem: cartItem) {
    console.log(cartItem);

    this.cartService.removeFromCart(cartItem.food.id);
    console.log(cartItem.food.id);
  }

  changeQuantity(cartItem: cartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    console.log(quantity);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
}
