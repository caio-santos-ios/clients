import { Component } from '@angular/core';
import { AsideComponent } from "../../../../components/aside/aside.component";

@Component({
    selector: 'app-financial-page',
    standalone: true,
    templateUrl: './financial-page.component.html',
    styleUrl: './financial-page.component.css',
    imports: [AsideComponent]
})
export class FinancialPageComponent {

}
