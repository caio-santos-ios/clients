import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { DialogService } from '../../../services/dialog.service';
import { ClientCreateComponent } from '../client-create/client-create.component';
import { ClientUpdateComponent } from '../client-update/client-update.component';

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

  updateClient(event: Event) {
    const id: any = event.target;
    localStorage.setItem('id', id.id)
    this.dialogService.openModal(ClientUpdateComponent)
  }

  deleteClient(event: Event) {
    const isDeleted = confirm("Dejesa deletar o cliente?")

    if(!isDeleted) return this.dialogService.closeModal();
    const id: any = event.target

    this.clientService.delete(id.id)
  }
}
