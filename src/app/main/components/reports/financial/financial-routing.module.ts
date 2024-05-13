import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'defaulters', loadChildren: () => import('./defaulters/defaulters.module').then(m => m.DefaultersModule) },
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
  ])],
  exports: [RouterModule]
})
export class FinancialRoutingModule { }
