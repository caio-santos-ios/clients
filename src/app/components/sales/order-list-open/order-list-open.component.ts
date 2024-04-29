import { Component } from '@angular/core';
import { OrdersService } from '../../../services/orders.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-list-open',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list-open.component.html',
  styleUrl: './order-list-open.component.css'
})
export class OrderListOpenComponent {
  constructor(private orderService: OrdersService) {}

  get getOrdersOpen() {
    return this.orderService.ordersOpen();
  }

  finishOrder() {
    const orders = this.orderService.ordersOpen();

    this.orderService.createOrder(orders);
    this.orderService.ordersOpen.update((value: any) => [])
  }
}
