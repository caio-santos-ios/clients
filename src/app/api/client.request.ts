import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IClient } from "../interfaces/client.interface";

@Injectable({ providedIn: "root"})
export class ClientRequest{
    private url: string = 'http://localhost:5018/api/v1/clients';
    
    constructor(private http: HttpClient) {}

    getClient(){
        return this.http.get<IClient[]>(this.url);
    }

    postClient(client: IClient) {
        return this.http.post<IClient>(this.url, client)
    }
}