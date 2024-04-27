import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormCreateClientComponent } from "./components/form-create-client/form-create-client.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AsideComponent } from "./components/aside/aside.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormCreateClientComponent, FooterComponent, AsideComponent]
})
export class AppComponent {

}
