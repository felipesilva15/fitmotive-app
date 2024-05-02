import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { ToastModule } from 'primeng/toast';
import { StepsModule } from 'primeng/steps';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { PhonePipe } from 'src/app/main/pipes/phone.pipe';
import { FormattedAddressPipe } from 'src/app/main/pipes/formated-address.pipe';
import { CardExpDatePipe } from 'src/app/main/pipes/card-exp-date.pipe';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';



@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    ToastModule,
    StepsModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule,
    TableModule,
    PhonePipe,
    FormattedAddressPipe,
    CardExpDatePipe,
    DropdownModule,
    PasswordModule
  ]
})
export class SignInModule { }
