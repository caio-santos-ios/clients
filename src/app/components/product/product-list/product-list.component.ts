import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  readonly productList = signal<any>('');

  constructor(private orderService: OrdersService) {}
  
  selectProduct(event: any) {
    const id = event.target.id;
    const product = this.orderService.listProducts().find((el: any) => el.id == id);
    this.orderService.product(product)
  }
}
