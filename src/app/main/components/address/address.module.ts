import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';



@NgModule({
  declarations: [AddressComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    InputSwitchModule,
    InputMaskModule,
    ReactiveFormsModule
  ],
  exports: [AddressComponent]
})
export class AddressModule { }
