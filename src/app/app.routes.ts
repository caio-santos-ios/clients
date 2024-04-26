import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: "contato", component: ContactComponent },
    { path: "", component: HomeComponent }
];
