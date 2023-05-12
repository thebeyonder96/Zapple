import { Component, Input } from '@angular/core';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-checkout-order-list',
  templateUrl: './checkout-order-list.component.html',
  styleUrls: ['./checkout-order-list.component.scss'],
})
export class CheckoutOrderListComponent {
  @Input() order!: Order;
}
