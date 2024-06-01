import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormWorkoutComponent } from './form-workout.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: FormWorkoutComponent }
  ])],
  exports: [RouterModule]
})
export class FormWorkoutRoutingModule { }
