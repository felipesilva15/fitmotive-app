import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankStatementRoutingModule } from './bank-statement-routing.module';
import { BankStatementComponent } from './bank-statement.component';
import { DataViewModule } from 'primeng/dataview';
import { SkeletonModule } from 'primeng/skeleton';


@NgModule({
  declarations: [BankStatementComponent],
  imports: [
    CommonModule,
    BankStatementRoutingModule,
    DataViewModule,
    SkeletonModule
  ]
})
export class BankStatementModule { }
