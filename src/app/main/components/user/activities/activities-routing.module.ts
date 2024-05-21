import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ActivitiesComponent }
  ])],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
