import { Component, signal } from '@angular/core';
import { AsideComponent } from "../../../../components/aside/aside.component";
import { CreateOrderComponent } from "../../components/create-order/create-order.component";
import { OrderListOpenComponent } from "../../components/order-list-open/order-list-open.component";
import { OrderListComponent } from "../../components/order-list/order-list.component";
import { ProductListComponent } from "../../../product/components/product-list/product-list.component";
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
