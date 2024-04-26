import { Injectable, signal } from "@angular/core";
import { IClient } from "../interfaces/client.interface";
import { ClientRequest } from "../api/client.request";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class ClientService {
    private url: string = 'http://localhost:5018/api/v1/clients';

    readonly clientList = signal<IClient[]>([]);

    constructor (private clientRequest: ClientRequest, private http: HttpClient) {
        this.clientRequest.getClient().subscribe(clients => {
            this.clientList.set(clients);
        })
    }

    getClients() {
        return this.clientList();
    }

    postClient(client: IClient) {
        this.clientRequest.postClient(client).subscribe(data => {
            this.clientList.update((clientList) => [...clientList, data])
        }) 
    }

    putClient(id: string) {

    }

    async deleteClient(id: string) {
        try {
            this.http.delete(`http://localhost:5018/api/v1/clients/${id}`).subscribe()
        } catch (error) {
            console.log(error)
        }
    }
}