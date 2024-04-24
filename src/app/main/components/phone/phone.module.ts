import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PhoneComponent } from './phone.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputMaskModule } from 'primeng/inputmask';



@NgModule({
  declarations: [PhoneComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
    InputSwitchModule,
    InputMaskModule
  ],
  exports: [PhoneComponent]
})
export class PhoneModule { }
