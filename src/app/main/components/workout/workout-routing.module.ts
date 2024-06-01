import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', loadChildren: () => import('./list-workout/list-workout.module').then(m => m.ListWorkoutModule) },
    { path: 'form/:id', loadChildren: () => import('./form-workout/form-workout.module').then(m => m.FormWorkoutModule) },
    { path: 'form', loadChildren: () => import('./form-workout/form-workout.module').then(m => m.FormWorkoutModule) }
  ])],
  exports: [RouterModule]
})
export class WorkoutRoutingModule { }
