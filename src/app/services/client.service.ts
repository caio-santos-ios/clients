import { Injectable, signal } from '@angular/core';
import { ClientRequest } from '../api/client.request';

@Injectable({ providedIn: 'root' })
export class ClientService {
  readonly clientList = signal<any[]>([])
  
  constructor(private clientRequest: ClientRequest) {
    this.clientRequest.getClients().subscribe((data: any) => {
      this.clientList.set(data);
    })
  }

  getClient() {
    return this.clientList();
  }

  create(client: any) {
    this.clientRequest.create(client).subscribe((data: any) => {
      this.clientList.update((clients) => [...clients, data]);
    });
  }

  delete(id: string) {
    this.clientRequest.delete(id).subscribe(() => {
      this.clientList.update((clients) => clients.filter(client => client.id != id))
    })
  }
}
