import { Component } from '@angular/core';
import { FormCreateClientComponent } from "../../components/form-create-client/form-create-client.component";
import { HeaderComponent } from "../../components/header/header.component";
import { ClientListComponent } from '../../components/client-list/client-list.component';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';
import { ClientRequest } from '../../api/client.request';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogService } from '../../services/dialog.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    providers: [ClientService, ClientRequest, DialogService],
    styleUrl: './home.component.css',
    imports: [CommonModule, FormCreateClientComponent, HeaderComponent, ClientListComponent, MatDialogModule ]
})
export class HomeComponent {
    constructor(private dialogService: DialogService) {}

    createClient() {
        this.dialogService.openModalCreateClient()
    }
}
