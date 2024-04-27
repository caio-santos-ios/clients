import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule],
  providers: [ClientService],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {
  constructor(private clientService: ClientService) {}

  get clientList() {
    return this.clientService.getAllClients();
  }

  async deleteClient(e: Event | any) {
    
  }
}
