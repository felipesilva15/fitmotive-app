import { PhoneTypeEnum, PhoneTypeEnumLabels } from './../../../enum/phone-type-enum';
import { CustomDynamicDialogService } from './../../../service/custom-dynamic-dialog.service';
import { BillingRecurrenceEnumOptions } from './../../../enum/billing-recurrence-enum';
import { Component } from '@angular/core';
import { Patient } from 'src/app/main/api/patient';
import { PatientService } from 'src/app/main/service/patient.service';
import { Location } from '@angular/common';
import { Phone } from 'src/app/main/api/phone';
import { PhoneComponent } from '../../phone/phone.component';

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

  openPhoneDialog(data?: Phone) {
    this.customDynamicDialogService.openDialog<Phone>(PhoneComponent, 'Telefone', data).then(
      (res: Phone) => {
        if (!res) {
          return;
        }

        this.data.phones.push(res);
      }
    );
  }

  removePhone(index: number): void {
    this.data.phones.splice(index, 1);
  }

  setPhone(phone: Phone): void {
    this.data.phones.push(phone);
  }
}
