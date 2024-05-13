import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultersRoutingModule } from './defaulters-routing.module';
import { DefaultersComponent } from './defaulters.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { CpfCnpjPipe } from 'src/app/main/pipes/cpf-cnpj.pipe';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';


@NgModule({
  declarations: [DefaultersComponent],
  imports: [
    CommonModule,
    DefaultersRoutingModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    SkeletonModule,
    CpfCnpjPipe
  ]
})
export class DefaultersModule { }
