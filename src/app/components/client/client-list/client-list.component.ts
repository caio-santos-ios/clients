import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { DialogService } from '../../../services/dialog.service';
import { ClientCreateComponent } from '../client-create/client-create.component';

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
    this.dialogService.openModal(ClientCreateComponent);
  }

  cancelClient() {
    this.dialogService.closeModal();
  }

  viewClient(id: any) {
    console.log(id)
  }

  deleteClient(id: any) {
    const isDeleted = confirm("Dejesa deletar o cliente?")

    if(!isDeleted) return this.dialogService.closeModal();
    
    this.clientService.delete(id.target.id)
  }
}
