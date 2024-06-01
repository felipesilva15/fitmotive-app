import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciceComponent } from './exercice.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';



@NgModule({
  declarations: [ExerciceComponent],
  imports: [
    CommonModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ReactiveFormsModule
  ],
  exports: [ExerciceComponent]
})
export class ExerciceModule { }
