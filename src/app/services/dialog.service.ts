import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ClientCreateComponent } from "../components/client-create/client-create.component";

@Injectable({ providedIn: 'root' })
export class DialogService {
    constructor(private dialog: MatDialog) {}

    openModalCreateClient() {
        this.dialog.open(ClientCreateComponent, {})
    }
    
    closeModalCreateClient() {
        this.dialog.closeAll()
    }
}