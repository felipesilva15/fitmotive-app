import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DialogService, DynamicDialogComponent, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-error-dialog',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    RippleModule
  ],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss',
  providers: [
    DialogService, 
    MessageService
  ]
})
export class ErrorDialogComponent {
  message: string;
  instance: DynamicDialogComponent | undefined;

  constructor(private config: DynamicDialogConfig) { }

  ngOnInit() {
    this.message = this.config?.data?.message;
  }
}
