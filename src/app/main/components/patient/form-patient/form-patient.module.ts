import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormPatientRoutingModule } from './form-patient-routing.module';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { FormLayoutDemoRoutingModule } from 'src/app/demo/components/uikit/formlayout/formlayoutdemo-routing.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { FormPatientComponent } from './form-patient.component';


@NgModule({
  declarations: [FormPatientComponent],
  imports: [
    CommonModule,
    FormPatientRoutingModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    FormsModule,
	FormLayoutDemoRoutingModule,
	AutoCompleteModule,
	CalendarModule,
	DropdownModule,
	InputMaskModule,
	InputNumberModule,
	CascadeSelectModule,
	MultiSelectModule,
	InputTextareaModule,
	InputTextModule,
	InputNumberModule
  ]
})
export class FormPatientModule { }
