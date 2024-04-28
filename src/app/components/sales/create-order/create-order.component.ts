import { Component } from '@angular/core';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [],
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.css'
})
export class CreateOrderComponent {
  constructor(private clientService: ClientService) {}

    get clientList() {
      return this.clientService.getClient();
    }
}
