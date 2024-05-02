import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-support',
    standalone: true,
    templateUrl: './support.component.html',
    styleUrl: './support.component.css',
    imports: [HeaderComponent]
})
export class SupportComponent {

}
