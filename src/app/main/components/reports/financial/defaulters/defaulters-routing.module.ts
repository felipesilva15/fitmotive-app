import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultersComponent } from './defaulters.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: DefaultersComponent }
  ])],
  exports: [RouterModule]
})
export class DefaultersRoutingModule { }
