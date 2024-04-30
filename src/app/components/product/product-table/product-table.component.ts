import { Component, signal } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent {
  constructor(private productService: ProductService) { }

  get getProducts () {
    return this.productService.products()
  }

  get myListFilted() {
    return this.productService.listFilted();
  }

  get isListFilted() {
    return this.productService.isListFiled();
  }
}
