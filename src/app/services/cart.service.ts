import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { food } from '../shared/models/food';
import { cartItem } from '../shared/models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.cartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  // getCartObservable!:Observable<Cart>;
  constructor() {}

  addToCart(food: food) {
    let CartItem = this.cart.items.find((item) => {
      item.food.id == food.id;
    });
    if (CartItem) return;

    this.cart.items.push(new cartItem(food));
    this.cartToLocalStorage();
  }

  removeFromCart(foodId: string) {
    this.cart.items = this.cart.items.filter((item) => {
      console.log(item.food.id);

      item.food.id != foodId;
    });
    this.cartToLocalStorage();
  }

  changeQuantity(foodId: string, quantity: number) {
    let CartItem = this.cart.items.find(item => {
      console.log(item.food.id);
      // console.log(foodId);

      item.food.id === foodId;
    });
    console.log(CartItem);

    if (!CartItem) return;
    console.log(CartItem);


    CartItem.quantity = quantity;
    CartItem.price = quantity * CartItem.food.price;

    this.cartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.cartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private cartToLocalStorage() {
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.price,
      0
    );
    this.cart.totalCount = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.quantity,
      0
    );

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
    console.log(this.cart);
  }

  private cartFromLocalStorage(): Cart {
    const cartJSON = localStorage.getItem('cart');
    return cartJSON ? JSON.parse(cartJSON) : new Cart();
  }
}
