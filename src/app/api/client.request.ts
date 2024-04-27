import { Injectable, signal } from "@angular/core";
import { IClient } from "../interfaces/client.interface";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class ClientRequest {
    private url: string = 'http://localhost:5018/api/v1/clients';

    constructor( private http: HttpClient  ) {}

    getAllClient() {
        return this.http.get<IClient[]>(this.url)
    }

    getLatestClient() {
        return this.http.get<IClient[]>(`${this.url}/latest`)
    }
}