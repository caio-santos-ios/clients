import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {
  constructor(private clientService: ClientService, private dialogService: DialogService) {}

  get clientList() {
    return this.clientService.getClient()
  }
  
  createClient() {
    this.dialogService.openModalCreateClient();
    
  }

  cancelClient() {
    this.dialogService.closeModalCreateClient();
  }

  deleteClient(id: any) {
    console.log(id)
  }
}
