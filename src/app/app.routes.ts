import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';

export const routes: Routes = [
    { path: "", component: DashboardPageComponent },
    // { path: "vendas" }
    { path: "clientes", component: ClientPageComponent },
    // { path: "financeiro", component: ClientPageComponent },
    // { path: "compras", component: ClientPageComponent },
    // { path: "controladoria", component: ClientPageComponent },
];
