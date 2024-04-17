import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPatientComponent } from './list-patient.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ListPatientComponent }
  ])],
  exports: [RouterModule]
})
export class ListPatientRoutingModule { }
