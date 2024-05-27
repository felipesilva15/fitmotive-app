import { BillingIntervalEnum, BillingIntervalEnumLabels } from './../../../enum/billing-interval-enum';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { Phone } from 'src/app/main/api/phone';
import { Provider } from 'src/app/main/api/provider';
import { CustomDynamicDialogService } from 'src/app/main/service/custom-dynamic-dialog.service';
import { ProviderService } from 'src/app/main/service/provider.service';
import { PhoneComponent } from '../../phone/phone.component';
import { Address } from 'src/app/main/api/address';
import { AddressComponent } from '../../address/address.component';
import { PaymentMethod } from 'src/app/main/api/payment-method';
import { PaymentMethodComponent } from '../../payment-method/payment-method.component';
import { PhoneTypeEnum, PhoneTypeEnumLabels } from 'src/app/main/enum/phone-type-enum';
import { PaymentMethodTypeEnum, PaymentMethodTypeEnumLabels } from 'src/app/main/enum/payment-method-type-enum';
import { ProfessionEnumOptions } from 'src/app/main/enum/profession-enum';
import { Router } from '@angular/router';
import { Plan } from 'src/app/main/api/plan';
import { PlanService } from 'src/app/main/service/plan.service';
import { CpfValidator } from 'src/app/main/validator/cpf-validator';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  activeIndex: number;
  items!: MenuItem[];
  data!: Provider;
  formGroup!: FormGroup;
  isSubmitting: boolean = false;
  phoneTypeEnumLabels: Record<PhoneTypeEnum, string> = PhoneTypeEnumLabels;
  PaymentMethodTypeEnumLabels: Record<PaymentMethodTypeEnum, string> = PaymentMethodTypeEnumLabels;
  professionEnumOptions: Array<any> = ProfessionEnumOptions;
  billingIntervalEnumLabels: Record<BillingIntervalEnum, string> = BillingIntervalEnumLabels;
  isValidStep: boolean = false;
  plans!: Plan[];
  plan_id: number;

  constructor(
    private providerService: ProviderService,
    private planService: PlanService,
    private customDynamicDialogService: CustomDynamicDialogService, 
    private fb: FormBuilder,
    private router: Router
  ) {
    this.data = {
      plan_id: 0,
      name: '',
      email: '',
      password: '',
      cpf_cnpj: '',
      birth_date: null,
      profession: null,
      inactive: false,
      phones: [],
      adresses: [],
      payment_methods: []
    }
    
    this.formGroup = this.buildFormGroup();
  }

  private buildFormGroup(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      password_confirmation: ['', [Validators.required]],
      cpf_cnpj: ['', [Validators.required, CpfValidator.validate()]],
      birth_date: ['', [Validators.required]],
      profession: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.activeIndex = 0;
    this.items = [
      { label: 'Dados pessoais' },
      { label: 'Telefones' },
      { label: 'Endereços' },
      { label: 'Métodos de pagamento' },
      { label: 'Plano' }
    ];

    this.planService.list().subscribe({
      next: (res: Plan[]) => {
        this.plans = res;
        console.table(this.plans)
      }
    });
  }

  get name() {
    return this.formGroup.get('name');
  }

  get email() {
    return this.formGroup.get('email');
  }

  get password() {
    return this.formGroup.get('password');
  }

  get password_confirmation() {
    return this.formGroup.get('password_confirmation');
  }

  get cpf_cnpj() {
    return this.formGroup.get('cpf_cnpj');
  }

  get birth_date() {
    return this.formGroup.get('birth_date');
  }
  
  get profession() {
    return this.formGroup.get('profession');
  }

  private convertFormToObject(): void {
    this.data.name = this.name.value;
    this.data.email = this.email.value;
    this.data.password = this.password.value;
    this.data.cpf_cnpj = this.cpf_cnpj.value;
    this.data.birth_date = this.birth_date.value.toISOString().substring(0, 10);
    this.data.profession = this.profession.value;
    this.data.plan_id = this.plan_id
  }

  private validatePersonalDataStep(): void {
    if (this.formGroup.valid) {
      return;
    }

    this.formGroup.markAllAsTouched();
    this.isValidStep = false;
    this.customDynamicDialogService.showMessage('Preencha o formulário com seus dados pessoais para prosseguir!');
  }

  private validatePhonesStep(): void {
    if (this.data.phones.length > 0) {
      return;
    }

    this.isValidStep = false;
    this.customDynamicDialogService.showMessage('Informe pelo menos um telefone para prosseguir!');
  }

  private validateAdressesStep(): void {
    if (this.data.adresses.length > 0) {
      return;
    }

    this.isValidStep = false;
    this.customDynamicDialogService.showMessage('Informe pelo menos um endereço para prosseguir!');
  }

  private validatePaymentMethodsStep(): void {
    if (this.data.payment_methods.length > 0) {
      return;
    }

    this.isValidStep = false;
    this.customDynamicDialogService.showMessage('Informe pelo menos um método de pagamento para prosseguir!');
  }

  private validatePlanStep(): void {
    if (this.plan_id != 0) {
      return;
    }

    this.isValidStep = false;
    this.customDynamicDialogService.showMessage('Selecione um plano para prosseguir!');
  }

  validateCurrentStep(): void {
    this.isValidStep = true;

    switch (this.activeIndex) {
      case 0:
        this.validatePersonalDataStep();
        break;
    
      case 1:
          this.validatePhonesStep();
          break;

      case 2:
        this.validateAdressesStep();
        break;

      case 3:
        this.validatePaymentMethodsStep();
        break;

      case 4:
        this.validatePlanStep();
        break;
    }
  }

  onActiveIndexChange(event: number): void {
    this.activeIndex = event;
  }

  prev(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }
  
  next(): void {
    this.validateCurrentStep();

    if (!this.isValidStep) {
      return;
    }

    if (this.activeIndex < this.items.length - 1) {
      this.activeIndex++;
    }
  }

  openPhoneDialog(data?: Phone, index?: number): void {
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

  openAddressDialog(data?: Address, index?: number): void {
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

  openPaymentMethodDialog(data?: PaymentMethod, index?: number): void {
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

  submit(): void {
    this.isSubmitting = true;

    this.validateCurrentStep();

    if (!this.isValidStep) {
      this.isSubmitting = false;
      return;
    }

    this.convertFormToObject();
    this.providerService.create(this.data).subscribe({
      next: () => {
        this.router.navigate(['/auth/login']);
      },
      error: () => {
        this.isSubmitting = false;
      }
    });
  }
}
