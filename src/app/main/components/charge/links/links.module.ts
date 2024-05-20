import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksComponent } from './links.component';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';



@NgModule({
  declarations: [LinksComponent],
  imports: [
    CommonModule,
    DataViewModule,
    ButtonModule,
    RippleModule
  ],
  exports: [LinksComponent]
})
export class LinksModule { }
