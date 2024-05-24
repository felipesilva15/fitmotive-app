import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { QrCodeComponent } from './qr-code.component';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ImageModule } from 'primeng/image';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [QrCodeComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ReactiveFormsModule,
    CalendarModule,
    InputNumberModule,
    InputTextareaModule,
    ImageModule,
    ToastModule
  ],
  exports: [QrCodeComponent]
})
export class QrCodeModule { }
