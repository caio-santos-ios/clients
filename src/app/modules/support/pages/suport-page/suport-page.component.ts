import { Component } from '@angular/core';
import { AsideComponent } from "../../../../components/aside/aside.component";
import { HeaderComponent } from "../../../../components/header/header.component";
import { SupportComponent } from "../../components/support/support.component";

@Component({
    selector: 'app-suport-page',
    standalone: true,
    templateUrl: './suport-page.component.html',
    styleUrl: './suport-page.component.css',
    imports: [AsideComponent, HeaderComponent, SupportComponent]
})
export class SuportPageComponent {

}
