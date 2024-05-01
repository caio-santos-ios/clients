import { Component } from '@angular/core';
import { AsideComponent } from "../../../../components/aside/aside.component";
import { HeaderComponent } from "../../../../components/header/header.component";
import { ProductListComponent } from "../../components/product-list/product-list.component";

@Component({
    selector: 'app-product-list-page',
    standalone: true,
    templateUrl: './product-list-page.component.html',
    styleUrl: './product-list-page.component.css',
    imports: [AsideComponent, HeaderComponent, ProductListComponent]
})
export class ProductListPageComponent {
    
}