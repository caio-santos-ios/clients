import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { IClient } from '../../interfaces/client.interface';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-form-create-client',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-create-client.component.html',
  styleUrl: './form-create-client.component.css'
})

export class FormCreateClientComponent {
  constructor(private clientService: ClientService, private dialogService: DialogService) {}

  registerForm = new FormGroup({
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
  
  onSubmit(){
    const data = this.registerForm.value as IClient
    console.log(data)
    this.registerForm.reset()
    this.dialogService.closeModalCreateClient();
    // this.clientService.postClient(data)
  }

  cancelCreated() {
    this.dialogService.closeModalCreateClient()
  }
}