import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ErrorDialogService {
  ref: DynamicDialogRef | undefined;

  constructor(private dialogService: DialogService) { }

  showDialogError(message: string): void  {
    this.ref = this.dialogService.open(ErrorDialogComponent, {
      header: 'Erro',
      modal: true, 
      data: { 
        message: message
      }});
  }
}
