import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateChargeComponent } from './generate-charge.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { MessagesModule } from 'primeng/messages';


@NgModule({
  declarations: [GenerateChargeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    InputMaskModule,
    InputNumberModule,
    CalendarModule,
    DropdownModule,
    MessagesModule
  ],
  exports: [GenerateChargeComponent]
})
export class GenerateChargeModule { }
