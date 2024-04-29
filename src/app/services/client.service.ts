import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClient } from '../interfaces/client.interface';

@Injectable({ providedIn: 'root' })
export class ClientService {
  readonly clientList = signal<any>([])
  readonly BASE_URL = "http://localhost:5018/api/v1/clients";
  
  constructor(private http: HttpClient) {
    this.http.get(this.BASE_URL).subscribe((data: any) => {
      this.clientList.set(data);
    })
  }

  getClient() {
    return this.clientList();
  }

  getByClient(id: string) {
    return this.clientList().filter((client: any) => client.id == id) 
  }

  async create(client: any) {
    this.http.post(`${this.BASE_URL}`, client).subscribe((clientData: any) => {
      this.clientList.update((clients: any) => [...clients, clientData]);
    })
  }

  async delete(id: string) {
    this.http.delete(`${this.BASE_URL}/${id}`).subscribe(_ => {
      this.clientList.update((clients) => clients.filter((client: IClient) => client.id != id))
    })
  }
}
