import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forChild(appRoutes);
