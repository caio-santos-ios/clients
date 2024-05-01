import { Component } from '@angular/core';
import { AsideComponent } from "../../../../components/aside/aside.component";
import { HeaderComponent } from "../../../../components/header/header.component";

@Component({
    selector: 'app-product-page',
    standalone: true,
    templateUrl: './product-page.component.html',
    styleUrl: './product-page.component.css',
    imports: [AsideComponent, HeaderComponent]
})
export class ProductPageComponent {

}
