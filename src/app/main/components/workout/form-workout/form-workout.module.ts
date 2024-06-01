import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormWorkoutRoutingModule } from './form-workout-routing.module';
import { FormWorkoutComponent } from './form-workout.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';
import { ExerciceModule } from '../../exercice/exercice.module';


@NgModule({
  declarations: [FormWorkoutComponent],
  imports: [
    CommonModule,
    FormWorkoutRoutingModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    SkeletonModule,
    ExerciceModule
  ],
  exports: [FormWorkoutComponent]
})
export class FormWorkoutModule { }
