import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-update',
  standalone: true,
  imports: [CommonModule, InputMaskModule, FormsModule, ReactiveFormsModule],
  templateUrl: './client-update.component.html',
  styleUrl: './client-update.component.css'
})
export class ClientUpdateComponent {
  constructor(private clientService: ClientService) { }
  
  // readonly client = signal('')
  // readonly id = localStorage.getItem('id');

  // clientCreateForm = new FormGroup({
  //   name: new FormControl(this.clientList[0].name),
  //   lastName: new FormControl(this.clientList[0].lastName),
  //   email: new FormControl(this.clientList[0].email),
  //   cellPhone: new FormControl(this.clientList[0].cellPhone),
  //   fixed: new FormControl(this.clientList[0].fixed),
  //   state: new FormControl(this.clientList[0].state),
  //   city: new FormControl(this.clientList[0].city),
  //   zipCode: new FormControl(this.clientList[0].zipCode),
  //   number: new FormControl(this.clientList[0].number),
  //   road: new FormControl(this.clientList[0].road),
  //   neighborhood: new FormControl(this.clientList[0].neighborhood), // Bairro
  //   reference: new FormControl(this.clientList[0].reference),
  //   isPersonFisic: new FormControl(this.clientList[0].isPersonFisic),
  //   document: new FormControl(this.clientList[0].document),
  //   observation: new FormControl(this.clientList[0].observation)
  // });


  // get clientList() {
  //   return this.clientService.read();
  //   // return this.clientService.read().filter((el: any) => el.id == this.id);
  // }

  // saveUpdated() {
  //   console.log(this.clientList)
  //   console.log(this.clientCreateForm.value);
  // }
}
