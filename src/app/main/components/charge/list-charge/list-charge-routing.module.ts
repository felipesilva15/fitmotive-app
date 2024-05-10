import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListChargeComponent } from './list-charge.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ListChargeComponent }
  ])],
  exports: [RouterModule]
})
export class ListChargeRoutingModule { }
