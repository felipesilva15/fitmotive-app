import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListChargeRoutingModule } from './list-charge-routing.module';
import { ListChargeComponent } from './list-charge.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { MenuModule } from 'primeng/menu';
import { LinksModule } from '../links/links.module';
import { QrCodeModule } from '../../qr-code/qr-code.module';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [ListChargeComponent],
  imports: [
    CommonModule,
    ListChargeRoutingModule,
    TableModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
    InputTextModule,
    SkeletonModule,
    TagModule,
    MenuModule,
    LinksModule,
    QrCodeModule,
    DropdownModule
  ]
})
export class ListChargeModule { }
