import { Component, signal } from '@angular/core';
import { AsideComponent } from "../../components/aside/aside.component";
import { CreateOrderComponent } from "../../components/sales/create-order/create-order.component";
import { OrderListOpenComponent } from "../../components/sales/order-list-open/order-list-open.component";
import { OrderListComponent } from "../../components/sales/order-list/order-list.component";
import { ProductListComponent } from "../../components/product/product-list/product-list.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sales-page',
    standalone: true,
    templateUrl: './sales-page.component.html',
    styleUrl: './sales-page.component.css',
    imports: [AsideComponent, CreateOrderComponent, OrderListOpenComponent, OrderListComponent, ProductListComponent, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SalesPageComponent {

}
