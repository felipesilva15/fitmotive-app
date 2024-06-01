import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListWorkoutComponent } from './list-workout.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ListWorkoutComponent }
  ])],
  exports: [RouterModule]
})
export class ListWorkoutRoutingModule { }
