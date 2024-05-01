import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderFilterComponent } from "../header-filter/header-filter.component";
import { CardProductComponent } from "../card-product/card-product.component";
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interfaces/product.interface';

@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    imports: [CommonModule, ReactiveFormsModule, FormsModule, HeaderFilterComponent, CardProductComponent]
})
export class ProductListComponent {
    readonly listProduct = signal<IProduct[]>([]);
    readonly cardPerPage = signal<number>(10);
    readonly currentPage = signal<number>(0);
    readonly totalPages = signal<number>(Math.ceil(this.productService.productList().length / this.cardPerPage()));

    constructor(private productService: ProductService) {
        const list = this.productService.productList().slice(this.currentPage(), this.cardPerPage())
        this.listProduct.set(list);
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
        const end = start + this.cardPerPage();

        const newList = this.productService.productList().slice(start, end);
        this.listProduct.set(newList);
    }
    
    nextPage() {
        if((this.currentPage() + 1) <= (this.totalPages() - 1)) {
            this.currentPage.update(currentPage => currentPage + 1)
            this.pagination(this.cardPerPage() * this.currentPage())
        }
    }

    backPage() {
        if(this.currentPage() > 0) {
            this.currentPage.update(currentPage => currentPage - 1)
            this.pagination(this.cardPerPage() * this.currentPage())
        }
    }
}
