import { PatientService } from './../../../service/patient.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Patient } from 'src/app/main/api/patient';
import { PaymentMethodTypeEnumOptions } from 'src/app/main/enum/payment-method-type-enum';

@Component({
  selector: 'app-generate-charge',
  templateUrl: './generate-charge.component.html',
  styleUrl: './generate-charge.component.scss'
})
export class GenerateChargeComponent {
  data!: Patient;
  formGroup!: FormGroup;
  paymentMethodTypeEnumOptions: Array<any> = PaymentMethodTypeEnumOptions;
  isSubmitting: boolean = false;
  messages: Message[] = [];

  constructor(private config: DynamicDialogConfig, private ref: DynamicDialogRef, private fb: FormBuilder, private patientService: PatientService) {
    if(this.config.data) {
      this.data = this.config.data
    } else {
      this.data = null
    }

    this.formGroup = this.buildFormGroup();
    this.messages = [
      { severity: 'info', detail: 'Algumas das informações são obtidas do cadastro do paciente. Altere-las no cadastro dele para que sejam refletidas aqui.' }
    ];
  }

  private buildFormGroup(): FormGroup {
    let dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7);

    return this.fb.group({
      name: [{value: this.data.name, disabled: true}, []],
      cpf_cnpj: [{value: this.data.cpf_cnpj, disabled: true}, []],
      payment_method: [{value: this.data.payment_methods[0].type, disabled: true}, []],
      service_price: [{value: this.data.service_price, disabled: true}, []],
      due_date: [dueDate, [Validators.required]],
    })
  }

  get name() {
    return this.formGroup.get('name');
  }

  get cpf_cnpj() {
    return this.formGroup.get('cpf_cnpj');
  }

  get payment_method() {
    return this.formGroup.get('payment_method');
  }

  get service_price() {
    return this.formGroup.get('service_price');
  }

  get due_date() {
    return this.formGroup.get('due_date');
  }

  close(data?: Patient) {
    this.ref.close(data);
  }

  submit(): void {
    if (!this.formGroup.valid) {
      return;
    }

    this.isSubmitting = true;

    let dueDate = this.due_date.value.toISOString().substring(0, 10);

    this.patientService.generateCharge(this.data.id, dueDate).subscribe({
      next: () => {
        this.close(this.data);
      },
      error: () => {
        this.isSubmitting = false;
      }
    })
  }
}
