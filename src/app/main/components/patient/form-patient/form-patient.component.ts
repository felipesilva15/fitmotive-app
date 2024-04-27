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

@Component({
  selector: 'app-form-patient',
  templateUrl: './form-patient.component.html',
  styleUrl: './form-patient.component.scss'
})
export class FormPatientComponent {
  data!: Patient;
  submitted: boolean = false;
  billingRecurrenceEnumOptions: Array<any> = BillingRecurrenceEnumOptions;
  isLoading: boolean = false;
  phoneTypeEnumLabels: Record<PhoneTypeEnum, string> = PhoneTypeEnumLabels;
  PaymentMethodTypeEnumLabels: Record<PaymentMethodTypeEnum, string> = PaymentMethodTypeEnumLabels;

  constructor(private patientService: PatientService, private location: Location, private customDynamicDialogService: CustomDynamicDialogService) { }

  ngOnInit(): void {
    this.data = {
      user_id: 0,
      provider_id: 0,
      name: '',
      email: '',
      cpf_cnpj: '',
      birth_date: '',
      bank_gateway_id: '',
      inactive: false,
      service_price: 0,
      billing_recurrence: null,
      phones: [],
      payment_methods: [],
      adresses: [],
      created_at: null,
      updated_at: null,
    }
  }

  save(): void {
    this.submitted = true;
    console.log(this.data);
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
