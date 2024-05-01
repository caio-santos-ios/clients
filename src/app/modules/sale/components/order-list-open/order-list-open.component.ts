import { Component } from '@angular/core';
import { OrdersService } from '../../../../services/orders.service';
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
    let myQuanty: number = 0;
    let value: number = 0;
    const orders = this.orderService.ordersOpen();
    orders.map((el: any) => {
      let quanty = Number(el.quanty);
      myQuanty = quanty + myQuanty;
      let amount = Number(el.amount);
      value = value + amount 
    })

    const newData = {
      client: orders[0].client,
      amount: value,
      quanty: myQuanty,
      paymentForm: orders[0].paymentForm,
      nature: orders[0].nature
    }

    this.orderService.createOrder(newData);
    this.orderService.ordersOpen.update((value: any) => [])
  }
}
