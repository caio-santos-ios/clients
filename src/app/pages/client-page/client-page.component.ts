import { Component } from '@angular/core';
import { AsideComponent } from "../../components/aside/aside.component";
import { ClientListComponent } from "../../components/client-list/client-list.component";
import { DialogService } from '../../services/dialog.service';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-client-page',
    standalone: true,
    templateUrl: './client-page.component.html',
    styleUrl: './client-page.component.css',
    imports: [AsideComponent, ClientListComponent, CommonModule],
    providers: [ClientService]
})
export class ClientPageComponent {
    constructor(private dialogService: DialogService, private clientService: ClientService) {}

    get latestClient() {
        return this.clientService.getLatest();
    }

    createClient() {
        this.dialogService.openModalCreateClient();
    }

    
}
