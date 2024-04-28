import { Component } from '@angular/core';
import { CreateOrderComponent } from "../create-order/create-order.component";

@Component({
    selector: 'app-order-list',
    standalone: true,
    templateUrl: './order-list.component.html',
    styleUrl: './order-list.component.css',
    imports: [CreateOrderComponent]
})
export class OrderListComponent {

}
