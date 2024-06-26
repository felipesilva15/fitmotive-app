import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionComponent } from './subscription.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: SubscriptionComponent }
  ])],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
