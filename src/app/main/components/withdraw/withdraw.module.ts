import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithdrawComponent } from './withdraw.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputNumberModule } from 'primeng/inputnumber';



@NgModule({
  declarations: [WithdrawComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    InputNumberModule,
    ReactiveFormsModule
  ],
  exports: [WithdrawComponent]
})
export class WithdrawModule { }
