import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', loadChildren: () => import('./list-patient/list-patient.module').then(m => m.ListPatientModule) }
  ])],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
