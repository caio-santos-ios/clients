import { Component } from '@angular/core';
import { AsideComponent } from "../../components/aside/aside.component";

@Component({
    selector: 'app-details-client-page',
    standalone: true,
    templateUrl: './details-client-page.component.html',
    styleUrl: './details-client-page.component.css',
    imports: [AsideComponent]
})
export class DetailsClientPageComponent {

}
