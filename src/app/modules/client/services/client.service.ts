import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  readonly BASE_URL = "http://localhost:5018/api/v1/clients";

  constructor(private http: HttpClient) { }

  create(client: any) {
    return this.http.post(this.BASE_URL, client);
  }

  read() {
    return this.http.get(this.BASE_URL);
  }

  retrive(id: string) {
    return this.http.get(`${this.BASE_URL}/${id}`)
  }
  
  update(id: string, client: any) {
    return this.http.put(`${this.BASE_URL}/${id}`, client)
  }

  delete(id: string) {
    return this.http.delete(`${this.BASE_URL}/${id}`)
  }
}