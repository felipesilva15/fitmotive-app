import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', loadChildren: () => import('./list-workout/list-workout.module').then(m => m.ListWorkoutModule) }
  ])],
  exports: [RouterModule]
})
export class WorkoutRoutingModule { }
