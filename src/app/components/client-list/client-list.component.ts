import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ClientRequest } from '../../api/client.request';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule],
  providers: [ClientService, ClientRequest],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {
  constructor(private clientService: ClientService) {}

  get clientList() {
    return this.clientService.getClients();
  }

  async deleteClient(e: Event | any) {
    try {
      const id: any = e.target.id;
      await this.clientService.deleteClient(id); 
    } catch (error) {
      
    }
  }
}
