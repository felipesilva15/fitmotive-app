import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'defaulters', loadChildren: () => import('./defaulters/defaulters.module').then(m => m.DefaultersModule) }
  ])],
  exports: [RouterModule]
})
export class FinancialRoutingModule { }
