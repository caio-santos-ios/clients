import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IPost } from '../../interfaces/post.interface';
import { DialogService } from '../../services/dialog.service';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-create.component.html',
  styleUrl: './client-create.component.css'
})
export class ClientCreateComponent {
  constructor(private clientService: ClientService, private dialogService: DialogService) {}

  clientCreateForm = new FormGroup({
    name: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    cellPhone: new FormControl(""),
    fixed: new FormControl(""),
    state: new FormControl(""),
    city: new FormControl(""),
    zipCode: new FormControl(""),
    number: new FormControl(""),
    road: new FormControl(""),
    neighborhood: new FormControl(""), // Bairro
    reference: new FormControl(""),
    isPersonFisic: new FormControl(true),
    document: new FormControl(""),
    observation: new FormControl("")
  });

  submit() {
    const data = this.clientCreateForm.value as IPost;
    this.clientService.create(data);
    this.dialogService.closeModalCreateClient();
  }

  cancelCreated() {
    this.dialogService.closeModalCreateClient();
  }
}
