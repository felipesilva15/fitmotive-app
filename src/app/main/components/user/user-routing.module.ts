import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'activities', loadChildren: () => import('./activities/activities.module').then(m => m.ActivitiesModule) },
    { path: 'subscription', loadChildren: () => import('./subscription/subscription.module').then(m => m.SubscriptionModule) }
  ])],
  exports: [RouterModule]
})
export class UserRoutingModule { }
