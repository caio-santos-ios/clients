import { Component } from '@angular/core';
import { AsideComponent } from "../../components/aside/aside.component";
import { ClientListComponent } from "../../components/client-list/client-list.component";
import { DialogService } from '../../services/dialog.service';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client.service';

@Component({
    selector: 'app-client-page',
    standalone: true,
    templateUrl: './client-page.component.html',
    styleUrl: './client-page.component.css',
    imports: [AsideComponent, ClientListComponent, CommonModule],
})
export class ClientPageComponent {
    constructor(private clientService: ClientService, private dialogService: DialogService) {}

    get clientList() {
      return this.clientService.getClient()
    }
      
    createPost() {
      this.dialogService.openModalCreateClient();
    }
      
    recipeUrl(id: number) {
    return `/recipes/${id}`
    }
}
