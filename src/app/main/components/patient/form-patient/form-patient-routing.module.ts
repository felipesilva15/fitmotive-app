import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPatientComponent } from './form-patient.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: FormPatientComponent }
  ])],
  exports: [RouterModule]
})
export class FormPatientRoutingModule { }
