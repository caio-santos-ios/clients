import { Component } from '@angular/core';
import { AsideComponent } from "../../components/aside/aside.component";
import { CreateOrderComponent } from "../../components/sales/create-order/create-order.component";

@Component({
    selector: 'app-sales-page',
    standalone: true,
    templateUrl: './sales-page.component.html',
    styleUrl: './sales-page.component.css',
    imports: [AsideComponent, CreateOrderComponent]
})
export class SalesPageComponent {

}
