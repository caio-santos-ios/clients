import { Component } from '@angular/core';
import { AsideComponent } from "../../../components/aside/aside.component";

@Component({
    selector: 'app-product-create-page',
    standalone: true,
    templateUrl: './product-create-page.component.html',
    styleUrl: './product-create-page.component.css',
    imports: [AsideComponent]
})
export class ProductCreatePageComponent {

}
