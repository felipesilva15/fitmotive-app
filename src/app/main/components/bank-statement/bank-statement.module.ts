import { DividerModule } from 'primeng/divider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankStatementRoutingModule } from './bank-statement-routing.module';
import { BankStatementComponent } from './bank-statement.component';
import { DataViewModule } from 'primeng/dataview';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { WithdrawModule } from '../withdraw/withdraw.module';


@NgModule({
  declarations: [BankStatementComponent],
  imports: [
    CommonModule,
    BankStatementRoutingModule,
    DataViewModule,
    SkeletonModule,
    ButtonModule,
    RippleModule,
    WithdrawModule
  ]
})
export class BankStatementModule { }
