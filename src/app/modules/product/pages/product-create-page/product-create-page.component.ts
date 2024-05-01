import { Component } from '@angular/core';
import { AsideComponent } from "../../../../components/aside/aside.component";
import { HeaderComponent } from "../../../../components/header/header.component";
import { CreateProductComponent } from "../../components/create-product/create-product.component";

@Component({
    selector: 'app-product-create-page',
    standalone: true,
    templateUrl: './product-create-page.component.html',
    styleUrl: './product-create-page.component.css',
    imports: [AsideComponent, HeaderComponent, CreateProductComponent]
})
export class ProductCreatePageComponent {

}
