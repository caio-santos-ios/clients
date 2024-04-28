import { Component } from '@angular/core';
import { AsideComponent } from "../../components/aside/aside.component";
import { ClientListComponent } from "../../components/client/client-list/client-list.component";
import { DialogService } from '../../services/dialog.service';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client.service';
import { ClientCreateComponent } from '../../components/client/client-create/client-create.component';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-client-page',
    standalone: true,
    templateUrl: './client-page.component.html',
    styleUrl: './client-page.component.css',
    imports: [AsideComponent, ClientListComponent, CommonModule, ButtonModule],
})
export class ClientPageComponent {
    constructor(private clientService: ClientService, private dialogService: DialogService) {}

    get clientList() {
      return this.clientService.getClient()
    }
      
    createPost() {
      this.dialogService.openModal(ClientCreateComponent);
    }
}
