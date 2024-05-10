import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', loadChildren: () => import('./list-charge/list-charge.module').then(m => m.ListChargeModule) },
  ])],
  exports: [RouterModule]
})
export class ChargeRoutingModule { }
