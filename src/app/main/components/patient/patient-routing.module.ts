import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', loadChildren: () => import('./list-patient/list-patient.module').then(m => m.ListPatientModule) },
    { path: 'form/:id', loadChildren: () => import('./form-patient/form-patient.module').then(m => m.FormPatientModule) },
    { path: 'form', loadChildren: () => import('./form-patient/form-patient.module').then(m => m.FormPatientModule) }
  ])],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
