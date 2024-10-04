import { Routes } from '@angular/router';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { HomeComponent } from './components/home/home.component';
import { OrderDetailComponent } from './components/order/order-detail/order-detail.component';
import { CustomerDetailComponent } from './components/customer/customer-detail/customer-detail.component';
import { CustomerFormComponent } from './components/customer/customer-form/customer-form.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'customers', component: CustomerListComponent },
    { path: 'customers/:id', component: CustomerDetailComponent },
    { path: 'orders', component: OrderListComponent },
    { path: 'orders/:id', component: OrderDetailComponent },
    { path: 'add-customer', component: CustomerFormComponent },
];
