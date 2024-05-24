import { PaymentMethodTypeEnum, PaymentMethodTypeEnumOptions } from './../../enum/payment-method-type-enum';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PaymentMethod } from '../../api/payment-method';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.scss'
})
export class PaymentMethodComponent {
  data!: PaymentMethod
  formGroup!: FormGroup;
  paymentMethodTypeEnumOptions: Array<any> = PaymentMethodTypeEnumOptions;
  isCard: boolean = false;

  constructor(private config: DynamicDialogConfig, private ref: DynamicDialogRef, private fb: FormBuilder) {
    if(this.config.data) {
      this.data = this.config.data
    } else {
      this.data = {
        user_id: 0,
        type: null,
        card_number: '',
        network_token: '',
        exp_month: '',
        exp_year: '',
        security_code: '',
        main: false
      }
    }

    this.formGroup = this.buildFormGroup();
  }

  private buildFormGroup(): FormGroup {
    return this.fb.group({
      type: [this.data.type, [Validators.required]],
      card_number: [{value: this.data.card_number, disabled: true}, []],
      network_token: [{value: this.data.network_token, disabled: true}, []],
      exp_date: [{value: this.data.exp_month + this.data.exp_year, disabled: true}, []],
      security_code: [{value: this.data.security_code, disabled: true}, []],
      main: [this.data.main, []]
    })
  }

  get type() {
    return this.formGroup.get('type');
  }

  get card_number() {
    return this.formGroup.get('card_number');
  }

  get network_token() {
    return this.formGroup.get('network_token');
  }

  get exp_date() {
    return this.formGroup.get('exp_date');
  }

  get security_code() {
    return this.formGroup.get('security_code');
  }

  get main() {
    return this.formGroup.get('main');
  }

  checkType(): void {
    if(this.type.value == PaymentMethodTypeEnum.CreditCard) {
      this.isCard = true;

      this.card_number.enable();
      this.exp_date.enable();
      this.security_code.enable();

      this.card_number.setValidators([Validators.required]);
      this.exp_date.setValidators([Validators.required]);
      this.security_code.setValidators([Validators.required]);
    } else {
      this.isCard = false;
      
      this.formGroup.patchValue({
        card_number: '',
        exp_date: '',
        security_code: ''
      })

      this.card_number.disable();
      this.exp_date.disable();
      this.security_code.disable();

      this.card_number.removeValidators([Validators.required]);
      this.exp_date.removeValidators([Validators.required]);
      this.security_code.removeValidators([Validators.required]);
    }
  }
  

  convertFormToObject() {
    this.data.type = this.type.value;
    this.data.card_number = this.card_number.value;
    this.data.network_token = this.network_token.value;
    this.data.exp_month = this.exp_date.value.substring(0, 2);
    this.data.exp_year = this.exp_date.value.substring(2, 6);
    this.data.security_code = this.security_code.value;
    this.data.main = this.main.value;
  }

  close(data?: PaymentMethod) {
    this.ref.close(data);
  }

  submit(): void {
    if (!this.formGroup.valid) {
      return;
    }

    this.convertFormToObject()
    this.close(this.data)
  }
}
