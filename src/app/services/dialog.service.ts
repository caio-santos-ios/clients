import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { FormCreateClientComponent } from "../components/form-create-client/form-create-client.component";

@Injectable({ providedIn: 'root' })
export class DialogService {
    constructor(private dialog: MatDialog) {}

    openModalCreateClient() {
        this.dialog.open(FormCreateClientComponent, {})
    }
    
    closeModalCreateClient() {
        this.dialog.closeAll()
    }
}