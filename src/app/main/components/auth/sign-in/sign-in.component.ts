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

  constructor(
    private providerService: ProviderService,
    private customDynamicDialogService: CustomDynamicDialogService, 
    private fb: FormBuilder
  ) {
    this.data = {
      name: '',
      email: '',
      cpf_cnpj: '',
      birth_date: null,
      inactive: false
    }
    
    this.formGroup = this.buildFormGroup();
  }

  private buildFormGroup(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cpf_cnpj: ['', [Validators.required]],
      birth_date: ['', [Validators.required]]
    })
  }

  ngOnInit() {
    this.activeIndex = 0;
    this.items = [
      { label: 'Dados pessoais' },
      { label: 'Telefones' },
      { label: 'Endereços' },
      { label: 'Métodos de pagamento' },
    ]
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

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }

  prev(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }
  
  next(): void {
    if (this.activeIndex < this.items.length - 1) {
      this.activeIndex++;
    }
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
