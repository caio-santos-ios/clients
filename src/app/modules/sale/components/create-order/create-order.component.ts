import { Component, effect, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IOrder } from '../../../../interfaces/order.interface';
import { InputMaskModule } from 'primeng/inputmask';
import { ProductListComponent } from "../../../product/components/product-list/product-list.component";
import { OrdersService } from '../../../../services/orders.service';
import { OrderListComponent } from "../order-list/order-list.component";

@Component({
    selector: 'app-create-order',
    standalone: true,
    templateUrl: './create-order.component.html',
    styleUrl: './create-order.component.css',
    imports: [ReactiveFormsModule, CommonModule, FormsModule, InputMaskModule, ProductListComponent, OrderListComponent]
})
export class CreateOrderComponent {
  readonly listProducts = signal<any>([
    { id: 1, name: "Produto 1", price: 780.99 },
    { id: 2, name: "Produto 2", price: 300.99 },
  ])

  constructor(private orderService: OrdersService) {}
 
  orderCreateForm = new FormGroup({
    createdAt: new FormControl(""),
    client: new FormControl(""),
    paymentForm: new FormControl(""),
    nature: new FormControl(""),
    quanty: new FormControl(),
    product: new FormControl(""),
    unitaryValue: new FormControl(""),
    amount: new FormControl('0'),
    deliveryDate: new FormControl('')
  })

  get listProduct() {
    return this.listProducts();
  }

  sumAmount(event: any) {
    const value = Number(event.target.value); 

    const result = this.orderCreateForm.value.quanty * value; 
    this.orderCreateForm.value.unitaryValue = String(value);
    this.orderCreateForm.value.amount = String(result);
  }

  includeOrder() {
    const data = this.orderCreateForm.value as IOrder;

    this.orderService.addProductOrdersOpen(data);
  }
}
