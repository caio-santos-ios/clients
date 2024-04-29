import { Component, effect, signal } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IOrder } from '../../../interfaces/order.interface';
import { InputMaskModule } from 'primeng/inputmask';
import { ProductListComponent } from "../../product/product-list/product-list.component";
import { OrdersService } from '../../../services/orders.service';
import { OrderListComponent } from "../order-list/order-list.component";

@Component({
    selector: 'app-create-order',
    standalone: true,
    templateUrl: './create-order.component.html',
    styleUrl: './create-order.component.css',
    providers: [OrdersService],
    imports: [ReactiveFormsModule, CommonModule, FormsModule, InputMaskModule, ProductListComponent, OrderListComponent]
})
export class CreateOrderComponent {
  readonly listProducts = signal<any>([
    { id: 1, name: "Produto 1", price: 780.99 },
    { id: 2, name: "Produto 2", price: 300.99 },
  ])

  constructor(private orderService: OrdersService) {
    effect(() => {
      const product: any = this.orderService.selectedProduct();
      console.log(product)
      // this.orderCreateForm.value.unitaryValue = product.price;
      // this.orderCreateForm.value.product = product.name;
    })
  }
 
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
    const quanty = Number(event.target.value);
    const value = Number(this.orderCreateForm.value.unitaryValue); 
   
    // MULTIPLICA O PREÇO DO ITEM PELA QUANTIDADE ESCOLHIDA E FORMATA PARA A MOEDA REAL.
    const result = (value * quanty).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    
    this.orderCreateForm.value.amount = result;
  }

  includeOrder() {
    const data = this.orderCreateForm.value as IOrder;
    this.orderService.addProductOrdersOpen(data);
  }
}
