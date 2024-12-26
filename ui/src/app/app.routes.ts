import { Routes } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
import { ProductsComponent } from './component/products/products.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SettingsComponent } from './component/settings/settings.component';
import { OverviewComponent } from './component/overview/overview.component';

export const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { 
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },
  { path: 'products', component: ProductsComponent },
];
