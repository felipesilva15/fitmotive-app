import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './activities.component';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';


@NgModule({
  declarations: [ActivitiesComponent],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    TimelineModule,
    ButtonModule,
    RippleModule,
    CardModule,
    SkeletonModule
  ]
})
export class ActivitiesModule { }
