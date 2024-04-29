import { Component, signal } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IOrder } from '../../../interfaces/order.interface';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, InputMaskModule],
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.css'
})
export class CreateOrderComponent {
  readonly list = signal<any[]>([])
  
  orderCreateForm = new FormGroup({
      createdAt: new FormControl(""),
      client: new FormControl(""),
      paymentForm: new FormControl(""),
      nature: new FormControl(""),
      product: new FormControl(""),
      quanty: new FormControl(),
      unitaryValue: new FormControl(""),
      amount: new FormControl('0'),
      deliveryDate: new FormControl()
  })

  get orderList() {
    return this.list();
  }

  createOrder() {
    const data = this.orderCreateForm.value as IOrder
    this.list.update((orders: any) => [...orders, data])
  }

  amont(event: any) {
    const valueUnitary = event.target.value

    if(valueUnitary && this.orderCreateForm.value.quanty) {
      const amount = Number(valueUnitary) * this.orderCreateForm.value.quanty

      if(!Number.isNaN(amount)) {
        this.orderCreateForm.value.amount = String(amount)
        return
      }
    }
  }
}
