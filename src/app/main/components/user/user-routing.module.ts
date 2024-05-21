import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'activities', loadChildren: () => import('./activities/activities.module').then(m => m.ActivitiesModule) }
  ])],
  exports: [RouterModule]
})
export class UserRoutingModule { }
