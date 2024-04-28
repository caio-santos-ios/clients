import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Injectable({ providedIn: 'root' })
export class DialogService {
    constructor(private dialog: MatDialog) {}

    openModalDelete(value: string) {
        return console.log(value)
    }

    openModal(component: any) {
        this.dialog.open(component)
    }
    
    closeModal() {
        this.dialog.closeAll()
    }
}