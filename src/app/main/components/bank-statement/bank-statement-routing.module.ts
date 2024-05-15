import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankStatementComponent } from './bank-statement.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: BankStatementComponent }
  ])],
  exports: [RouterModule]
})
export class BankStatementRoutingModule { }
