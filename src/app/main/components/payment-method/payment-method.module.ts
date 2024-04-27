import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentMethodComponent } from './payment-method.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputMaskModule } from 'primeng/inputmask';



@NgModule({
  declarations: [PaymentMethodComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
    InputSwitchModule,
    InputMaskModule,
    ReactiveFormsModule
  ],
  exports: [PaymentMethodComponent]
})
export class PaymentMethodModule { }
