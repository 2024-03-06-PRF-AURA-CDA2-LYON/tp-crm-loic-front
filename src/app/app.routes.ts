import { Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';

export const routes: Routes = [
    { path: '', component: CustomerListComponent, pathMatch: 'full' },
    // { path: 'Customers', component: LoginComponent },
    // { path: 'Orders', component: LoginComponent },
];
