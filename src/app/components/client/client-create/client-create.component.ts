import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IPost } from '../../../interfaces/post.interface';
import { DialogService } from '../../../services/dialog.service';
import { ClientService } from '../../../services/client.service';
import { HttpClient } from '@angular/common/http';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  selector: 'app-client-create',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, InputMaskModule],
  templateUrl: './client-create.component.html',
  styleUrl: './client-create.component.css'
})
export class ClientCreateComponent {
  constructor(private clientService: ClientService, private dialogService: DialogService, private http: HttpClient) {}

  readonly address = signal<any>('');

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
    this.clientCreateForm.value
    this.clientCreateForm.value.state = this.myAddress.uf;
    this.clientCreateForm.value.city = this.myAddress.localidade;
    this.clientCreateForm.value.neighborhood = this.myAddress.bairro;
    this.clientCreateForm.value.road = this.myAddress.logradouro;

    const data = this.clientCreateForm.value as IPost;
    
    this.clientService.create(data);
    this.dialogService.closeModal();
  }

  cancelCreated() {
    this.dialogService.closeModal();
  }

  async searchZiCode(e: any) {
    const zipCode = e.target.value
    let myZipCode = zipCode.replace(/\D/g, "");

    if(myZipCode.length === 8) {
      try {
        this.http.get(`https://viacep.com.br/ws/${myZipCode}/json/`).subscribe((data: any) => {
          if(data.erro) {
            return
          }

          this.address.set(data);
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  get myAddress() {
    return this.address();
  }
}
