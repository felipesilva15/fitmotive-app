import { FinancialModule } from './financial/financial.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'financial', loadChildren: () => import('./financial/financial.module').then(m => m.FinancialModule) }
  ])],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
