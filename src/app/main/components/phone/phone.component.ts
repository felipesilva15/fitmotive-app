import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { Phone } from '../../api/phone';
import { PhoneTypeEnumOptions } from '../../enum/phone-type-enum';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss'
})
export class PhoneComponent {
  data: Phone = {
    user_id: 0,
    country: '',
    ddd: '',
    number: '',
    type: null,
    main: false
  };
  phoneTypeEnumOptions: Array<any> = PhoneTypeEnumOptions;
  formGroup!: FormGroup;
  phoneNumberRegex: RegExp = /^(\d{2})(9[0-9]{8}|[2-8]\d{7})$/;

  constructor(private config: DynamicDialogConfig, private ref: DynamicDialogRef, private fb: FormBuilder) {
    console.log(this.config.data)

    if(this.config.data) {
      console.log('entrou no if')
      this.data = this.config.data
    }

    this.formGroup = this.buildFormGroup();
  }

  private buildFormGroup(): FormGroup {
    return this.fb.group({
      type: [this.data.type, [Validators.required]],
      number: [this.data.ddd + this.data.number, [Validators.required]],
      main: [this.data.main, []]
    })
  }

  validatePhoneNumber(phoneNumber: string): ValidationErrors | null {
    if (!this.phoneNumberRegex.test(phoneNumber)) {
      return { invalidPhone: true };
    }
    return null;
  }

  get type() {
    return this.formGroup.get('type');
  }

  get number() {
    return this.formGroup.get('number');
  }

  get main() {
    return this.formGroup.get('main');
  }

  convertFormToObject() {
    this.data.type = this.type.value?.code;
    this.data.main = this.main.value;
    this.data.country = '55';
    
    this.separateAndSetPhoneNumber(this.number.value);
  }

  separateAndSetPhoneNumber(phoneNumber: string): void {
    const match = this.phoneNumberRegex.exec(phoneNumber);
    if (!match) {
      return;
    }

    this.data.ddd = match[1].trim();
    this.data.number = match[2].trim();
  }

  close(data?: Phone) {
    this.ref.close(data);
  }

  submit() {
    if (!this.formGroup.valid) {
      return;
    }

    this.convertFormToObject()
    this.close(this.data)
  }

  
}
