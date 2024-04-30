import { Component } from '@angular/core';
import { AsideComponent } from "../../components/aside/aside.component";

@Component({
    selector: 'app-product-page',
    standalone: true,
    templateUrl: './product-page.component.html',
    styleUrl: './product-page.component.css',
    imports: [AsideComponent]
})
export class ProductPageComponent {

}
