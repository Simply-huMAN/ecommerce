import { Routes } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
import { ProductsComponent } from './component/products/products.component';
import { SettingsComponent } from './component/settings/settings.component';
import { ProfileComponent } from './component/settings/profile/profile.component';

export const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'settings', component: SettingsComponent},
  { path: 'settings/profile', component: ProfileComponent}
];
