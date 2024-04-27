import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientRequest {
  readonly BASE_URL = "http://localhost:5018/api/v1/clients";

  constructor(private http: HttpClient) { }

  create(client: any) {
    return this.http.post(`${this.BASE_URL}`, client)
  }

  getClients() {
    return this.http.get(`${this.BASE_URL}`)
  }

  update() {}
  delete() {}
}
