import { cartItem } from './cartItem';
import { LatLng } from 'leaflet';

export class Order {
  id!: string;
  items!: cartItem[];
  totoalPrice!: number;
  name!: string;
  address!: string;
  addressLatLng?: LatLng;
  paymentId!: string;
  createdAt!: string;
  status!: string;
}
