import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forChild(appRoutes);
