import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPatientRoutingModule } from './list-patient-routing.module';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { ListPatientComponent } from './list-patient.component';
import { CpfCnpjPipe } from 'src/app/main/pipes/cpf-cnpj.pipe';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SkeletonModule } from 'primeng/skeleton';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MenuModule } from 'primeng/menu';
import { GenerateChargeModule } from '../../charge/generate-charge/generate-charge.module';

@NgModule({
  declarations: [ListPatientComponent],
  imports: [
    CommonModule,
    ListPatientRoutingModule,
    TableModule,
    FileUploadModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    ConfirmDialogModule,
    SkeletonModule,
    MenuModule,
    CpfCnpjPipe,
    GenerateChargeModule,
    ToastModule
  ]
})
export class ListPatientModule { }
