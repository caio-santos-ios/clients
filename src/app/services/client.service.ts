import { Injectable, signal } from "@angular/core";
import { IClient } from "../interfaces/client.interface";
import { ClientRequest } from "../api/client.request";

@Injectable({ providedIn: 'root' })
export class ClientService {
    readonly clientList = signal<IClient[]>([]);
    readonly clientListLatest = signal<IClient[]>([])

    constructor (private clientRequest: ClientRequest) {
        this.clientRequest.getAllClient().subscribe((clients) => {
            this.clientList.set(clients)
        }),
        this.clientRequest.getLatestClient().subscribe((clients) => {
            this.clientListLatest.set(clients)
        })
    }

    getAllClients() {
        return this.clientList();
    }

    getLatest() {
        return this.clientListLatest();
    }
}