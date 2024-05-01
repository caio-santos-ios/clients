import { Component, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { HeaderFilterComponent } from '../header-filter/header-filter.component';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule, HeaderFilterComponent],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent {
  readonly listProduct = signal<IProduct[]>([]);
  readonly itensPerPege = signal<number>(10);
  readonly currentPage = signal<number>(0);
  readonly totalPages = signal<number>(Math.ceil(this.productService.productList().length / this.itensPerPege()));

  constructor(private productService: ProductService) {
    const list = this.productService.productList().slice(this.currentPage(), this.itensPerPege());
    this.listProduct.set(list);
    console.log(list)
  }

  get products() {
    return this.listProduct();
  }

  get curretPageNumber() {
    return this.currentPage();
  }

  get pageNumber() {
      return this.totalPages();
  }

  pagination(start: number) {
    const end = start + this.itensPerPege();

    const newList = this.productService.productList().slice(start, end);
    this.listProduct.set(newList);
  }

  nextPage() {
    if((this.currentPage() + 1) <= (this.totalPages() - 1)) {
        this.currentPage.update(currentPage => currentPage + 1)
        this.pagination(this.itensPerPege() * this.currentPage())
    }
  }

  backPage() {
    if(this.currentPage() > 0) {
        this.currentPage.update(currentPage => currentPage - 1)
        this.pagination(this.itensPerPege() * this.currentPage())
    }
  }
}
