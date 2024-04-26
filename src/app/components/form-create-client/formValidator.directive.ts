import { AbstractControl, ValidatorFn } from "@angular/forms";

export const foundationDateValidator = (): ValidatorFn => {
    return (control: AbstractControl): any => {
        if(control.value.touched != undefined) return
        const date = new Date().toString()

        // converte a data escolhida para milisegundos.
        const selectedDate = Date.parse(control.value)
        
        // converte a data de hoje para milisegundos.
        const myDate = Date.parse(date)
        
        return selectedDate > myDate ? { foundationDate: { value: control.value } } : null;
    };
}