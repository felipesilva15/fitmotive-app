import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListWorkoutRoutingModule } from './list-workout-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { ListWorkoutComponent } from './list-workout.component';
import { ToolbarModule } from 'primeng/toolbar';
import { SkeletonModule } from 'primeng/skeleton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [ListWorkoutComponent],
  imports: [
    CommonModule,
    ListWorkoutRoutingModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
    TableModule,
    InputTextModule,
    ConfirmDialogModule,
    SkeletonModule
  ],
  exports: [ListWorkoutComponent]
})
export class ListWorkoutModule { }
