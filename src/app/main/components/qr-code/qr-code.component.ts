import { Component } from '@angular/core';
import { QrCode } from '../../api/qr-code';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.scss'
})
export class QrCodeComponent {
  data!: QrCode;
  formGroup!: FormGroup;

  constructor(private config: DynamicDialogConfig, private ref: DynamicDialogRef, private fb: FormBuilder, private messageService: MessageService) {
    if(this.config.data) {
      this.data = this.config.data

      this.data.expiration_date = new Date(<Date>this.data.expiration_date);
    } else {
      this.data = {
        charge_id: 0,
        text: '',
        amount: 0,
        expiration_date: null,
        image_uri: '',
        bank_gateway_id: ''
      }
    }

    this.formGroup = this.buildFormGroup();
    console.log(this.text.value);
    console.log(this.amount.value.value);
  }

  private buildFormGroup(): FormGroup {
    return this.fb.group({
      text: [{value: this.data.text, disabled: true}, []],
      amount: [{value: this.data.amount, disabled: true}, []],
      expiration_date: [{value: this.data.expiration_date, disabled: true}, []],
    })
  }

  get text() {
    return this.formGroup.get('text');
  }

  get amount() {
    return this.formGroup.get('amount');
  }

  get expiration_date() {
    return this.formGroup.get('expiration_date');
  }

  async copyText() {
    navigator.clipboard.writeText(this.data.text).then(() => {
      this.messageService.add({
        severity: 'info',
        summary: 'Texto copiado para área de transferência',
        life: 3000 
      });
    });
  }
}
