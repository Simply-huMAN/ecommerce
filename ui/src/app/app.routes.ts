import { Routes } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
import { ProductsComponent } from './component/products/products.component';

export const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'products', component: ProductsComponent },
];
