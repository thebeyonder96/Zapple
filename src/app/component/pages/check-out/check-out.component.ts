import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  order: Order = new Order();
  checkoutForm!: FormGroup;

  constructor(
    private cartS: CartService,
    private userS: UserService,
    private fb: FormBuilder,
    private toast: ToastrService
  ) {
    const cart = cartS.getCart();
    this.order.items = cart.items;
    this.order.totoalPrice = cart.totalPrice;
  }

  ngOnInit() {
    let { name, address } = this.userS.currentUser;
    this.checkoutForm = this.fb.group({
      name: [name, Validators.required],
      address: [address, Validators.required],
    });

    console.log(this.order);
  }

  get fc() {
    return this.checkoutForm.controls;
  }

  createOrder() {
    if (this.checkoutForm.invalid) {
      this.toast.warning('Please fill the inputs', 'Invalid input');
      return;
    }

    this.order.name = this.fc.name.value;
    this.order.address = this.fc.address.value;

    console.log(this.order);
  }
}
