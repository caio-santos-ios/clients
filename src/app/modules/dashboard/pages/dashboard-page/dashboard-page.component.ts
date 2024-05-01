import { Component } from '@angular/core';
import { AsideComponent } from "../../../../components/aside/aside.component";
import { DashboardComponent } from "../../components/dashboard/dashboard.component";
import { HeaderComponent } from "../../../../components/header/header.component";

@Component({
    selector: 'app-dashboard-page',
    standalone: true,
    templateUrl: './dashboard-page.component.html',
    styleUrl: './dashboard-page.component.css',
    imports: [AsideComponent, DashboardComponent, HeaderComponent]
})
export class DashboardPageComponent {

}
