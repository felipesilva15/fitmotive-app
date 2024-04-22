import { BillingRecurrenceEnumOptions } from './../../../enum/billing-recurrence-enum';
import { Component } from '@angular/core';
import { Patient } from 'src/app/main/api/patient';
import { BillingRecurrenceEnum } from 'src/app/main/enum/billing-recurrence-enum';
import { PatientService } from 'src/app/main/service/patient.service';

@Component({
  selector: 'app-form-patient',
  templateUrl: './form-patient.component.html',
  styleUrl: './form-patient.component.scss'
})
export class FormPatientComponent {
  data!: Patient;
  submitted: boolean = false;
  billingRecurrenceEnumOptions: Array<any> = BillingRecurrenceEnumOptions;

  constructor(private patientService: PatientService) { }

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
}
