import { AuthService } from './../../../service/auth.service';
import { PaymentMethodTypeEnum, PaymentMethodTypeEnumLabels } from './../../../enum/payment-method-type-enum';
import { PhoneTypeEnum, PhoneTypeEnumLabels } from './../../../enum/phone-type-enum';
import { CustomDynamicDialogService } from './../../../service/custom-dynamic-dialog.service';
import { BillingRecurrenceEnumOptions } from './../../../enum/billing-recurrence-enum';
import { Component } from '@angular/core';
import { Patient } from 'src/app/main/api/patient';
import { PatientService } from 'src/app/main/service/patient.service';
import { Location } from '@angular/common';
import { Phone } from 'src/app/main/api/phone';
import { PhoneComponent } from '../../phone/phone.component';
import { AddressComponent } from '../../address/address.component';
import { Address } from 'src/app/main/api/address';
import { PaymentMethod } from 'src/app/main/api/payment-method';
import { PaymentMethodComponent } from '../../payment-method/payment-method.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-patient',
  templateUrl: './form-patient.component.html',
  styleUrl: './form-patient.component.scss'
})
export class FormPatientComponent {
  data!: Patient;
  formGroup!: FormGroup;
  billingRecurrenceEnumOptions: Array<any> = BillingRecurrenceEnumOptions;
  isLoading: boolean = false;
  isSubmitting: boolean = false;
  paramId: number;
  phoneTypeEnumLabels: Record<PhoneTypeEnum, string> = PhoneTypeEnumLabels;
  PaymentMethodTypeEnumLabels: Record<PaymentMethodTypeEnum, string> = PaymentMethodTypeEnumLabels;

  constructor(
    private patientService: PatientService, 
    private location: Location, 
    private customDynamicDialogService: CustomDynamicDialogService, 
    private fb: FormBuilder, 
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
    this.paramId = parseInt(this.activatedRoute.snapshot.paramMap.get('id') ?? '');
    
    this.data = {
      user_id: 0,
      provider_id: this.authService.provider_id,
      name: '',
      email: '',
      cpf_cnpj: '',
      birth_date: null,
      bank_gateway_id: '',
      inactive: false,
      service_price: null,
      billing_recurrence: null,
      phones: [],
      payment_methods: [],
      adresses: []
    }
    
    this.formGroup = this.buildFormGroup();

    if (this.paramId) {
      this.loadData();
    }
  }

  private buildFormGroup(): FormGroup {
    return this.fb.group({
      name: [this.data.name, [Validators.required]],
      email: [this.data.name, [Validators.required, Validators.email]],
      cpf_cnpj: [this.data.cpf_cnpj, [Validators.required]],
      birth_date: [this.data.birth_date, [Validators.required]],
      service_price: [this.data.service_price, []],
      billing_recurrence: [this.data.billing_recurrence, [Validators.required]],
    })
  }

  loadData() {
    this.isLoading = true;

    this.patientService.get(this.paramId).subscribe({
      next: (res: Patient) => {
        this.data = res;

        this.formGroup.patchValue({
          name: this.data.name,
          email: this.data.email,
          cpf_cnpj: this.data.cpf_cnpj,
          birth_date: new Date(<Date>this.data.birth_date),
          service_price: this.data.service_price,
          billing_recurrence: this.data.billing_recurrence,
        })

        this.isLoading = false;
      }
    })
  }

  get name() {
    return this.formGroup.get('name');
  }

  get email() {
    return this.formGroup.get('email');
  }

  get cpf_cnpj() {
    return this.formGroup.get('cpf_cnpj');
  }

  get birth_date() {
    return this.formGroup.get('birth_date');
  }

  get service_price() {
    return this.formGroup.get('service_price');
  }

  get billing_recurrence() {
    return this.formGroup.get('billing_recurrence');
  }

  convertFormToObject() {
    this.data.name = this.name.value;
    this.data.email = this.email.value;
    this.data.cpf_cnpj = this.cpf_cnpj.value;
    this.data.birth_date = this.birth_date.value.toISOString().substring(0, 10);
    this.data.service_price = this.service_price.value;
    this.data.billing_recurrence = this.billing_recurrence.value;
  }

  submit(): void {
    if (!this.formGroup.valid) {
      return;
    }

    this.isSubmitting = true;

    this.convertFormToObject();
    
    if (this.paramId) {
      this.update();
    } else {
      this.create();
    }
  }

  create(): void {
    this.patientService.create(this.data).subscribe({
      next: () => {
        this.backPage();
      },
      error: () => {
        this.isSubmitting = false;
      }
    });
  }

  update(): void {
    this.patientService.update(this.data, this.paramId).subscribe({
      next: () => {
        this.backPage();
      },
      error: () => {
        this.isSubmitting = false;
      }
    });
  }

  backPage(): void {
    this.location.back();
  }

  openPhoneDialog(data?: Phone, index?: number) {
    this.customDynamicDialogService.openDialog<Phone>(PhoneComponent, 'Telefone', data).then(
      (res: Phone) => {
        if (!res) {
          return;
        }

        if (index || index === 0) {
          this.data.phones[index] = res;
        } else {
          this.data.phones.push(res);
        }
      }
    );
  }

  removePhone(index: number): void {
    this.data.phones.splice(index, 1);
  }

  openAddressDialog(data?: Address, index?: number) {
    this.customDynamicDialogService.openDialog<Address>(AddressComponent, 'Endereço', data).then(
      (res: Address) => {
        if (!res) {
          return;
        }

        if (index || index === 0) {
          this.data.adresses[index] = res;
        } else {
          this.data.adresses.push(res);
        }
      }
    );
  }

  removeAddress(index: number): void {
    this.data.adresses.splice(index, 1);
  }

  openPaymentMethodDialog(data?: PaymentMethod, index?: number) {
    this.customDynamicDialogService.openDialog<PaymentMethod>(PaymentMethodComponent, 'Método de pagamento', data).then(
      (res: PaymentMethod) => {
        if (!res) {
          return;
        }

        if (index || index === 0) {
          this.data.payment_methods[index] = res;
        } else {
          this.data.payment_methods.push(res);
        }
      }
    );
  }

  removePaymentMethod(index: number): void {
    this.data.payment_methods.splice(index, 1);
  }
}
