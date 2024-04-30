import { Component } from '@angular/core';
import { ProductTableComponent } from "../../../components/product/product-table/product-table.component";
import { AsideComponent } from "../../../components/aside/aside.component";

@Component({
    selector: 'app-product-list-page',
    standalone: true,
    templateUrl: './product-list-page.component.html',
    styleUrl: './product-list-page.component.css',
    imports: [ProductTableComponent, AsideComponent]
})
export class ProductListPageComponent {
    
}
