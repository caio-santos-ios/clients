import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';
import { DetailsClientPageComponent } from './pages/details-client-page/details-client-page.component';
import { SalesPageComponent } from './pages/sales-page/sales-page.component';
import { FinancialPageComponent } from './pages/financial-page/financial-page.component';
import { ShoppingPageComponent } from './pages/shopping-page/shopping-page.component';
import { ControllershipPageComponent } from './pages/controllership-page/controllership-page.component';

export const routes: Routes = [
    { path: "", component: DashboardPageComponent },
    { path: "vendas", component: SalesPageComponent },
    { path: "clientes", component: ClientPageComponent },
    { path: "clientes/:id", component: DetailsClientPageComponent },
    { path: "financeiro", component: FinancialPageComponent },
    { path: "compras", component: ShoppingPageComponent },
    { path: "controladoria", component: ControllershipPageComponent },
];
