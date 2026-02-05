import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Contacto } from './contacto/contacto';
export const routes: Routes = [
{ path: 'products', component: ProductList, title: 'Lista de productos' },
{ path: 'contacto', component: Contacto, title: 'Contacto' },
{ path: '', redirectTo: '/products', pathMatch: 'full' },
];