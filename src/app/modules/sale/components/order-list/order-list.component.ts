import { Component } from '@angular/core';
import { CreateOrderComponent } from "../create-order/create-order.component";
import { OrdersService } from '../../../../services/orders.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-order-list',
    standalone: true,
    templateUrl: './order-list.component.html',
    styleUrl: './order-list.component.css',
    imports: [CreateOrderComponent, CommonModule]
})
export class OrderListComponent {
    constructor(private orderService: OrdersService) {}
    
    get getOrdersCreated() {
        return this.orderService.ordersCreated();  
    }
}