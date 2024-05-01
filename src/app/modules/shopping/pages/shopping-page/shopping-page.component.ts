import { Component } from '@angular/core';
import { AsideComponent } from "../../../../components/aside/aside.component";
import { HeaderComponent } from "../../../../components/header/header.component";

@Component({
    selector: 'app-shopping-page',
    standalone: true,
    templateUrl: './shopping-page.component.html',
    styleUrl: './shopping-page.component.css',
    imports: [AsideComponent, HeaderComponent]
})
export class ShoppingPageComponent {

}
