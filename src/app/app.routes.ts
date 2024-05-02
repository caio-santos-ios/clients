import { Routes } from '@angular/router';

// DASHBOARD
import { DashboardPageComponent } from './modules/dashboard/pages/dashboard-page/dashboard-page.component';

// CLIENT
import { ClientPageComponent } from './modules/client/pages/client-page/client-page.component';
import { DetailsClientPageComponent } from './modules/client/pages/details-client-page/details-client-page.component';

// SALES
import { SalesPageComponent } from './modules/sale/pages/sales-page/sales-page.component';

// FINANCIAL
import { FinancialPageComponent } from './modules/financial/pages/financial-page/financial-page.component';

// SHOPPING
import { ShoppingPageComponent } from './modules/shopping/pages/shopping-page/shopping-page.component';

// CONTRELLERSHIP
import { ControllershipPageComponent } from './modules/controllership/pages/controllership-page/controllership-page.component';

// PRODUCT
import { ProductPageComponent } from './modules/product/pages/product-page/product-page.component';
import { ProductListPageComponent } from './modules/product/pages/product-list-page/product-list-page.component';
import { ProductTablePageComponent } from './modules/product/pages/product-table-page/product-table-page.component';
import { ProductCreatePageComponent } from './modules/product/pages/product-create-page/product-create-page.component';

// SUPORT
import { SuportPageComponent } from './modules/support/pages/suport-page/suport-page.component';

export const routes: Routes = [
    { path: "", component: DashboardPageComponent },
    { path: "vendas", component: SalesPageComponent },
    { path: "clientes", component: ClientPageComponent },
    // { path: "cadastrar-clientes", component: }
    { path: "clientes/:id", component: DetailsClientPageComponent },
    { path: "financeiro", component: FinancialPageComponent },
    { path: "compras", component: ShoppingPageComponent },
    { path: "controladoria", component: ControllershipPageComponent },
    { path: "produtos", component: ProductPageComponent },
    { path: "cadastrar-produtos", component: ProductCreatePageComponent },
    { path: "tabela-produtos", component: ProductTablePageComponent },
    { path: "lista-produtos", component: ProductListPageComponent },
    { path: "chamados", component: SuportPageComponent }
];
