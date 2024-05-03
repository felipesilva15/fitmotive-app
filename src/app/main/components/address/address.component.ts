import { Component } from '@angular/core';
import { Address } from '../../api/address';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CepService } from '../../service/cep.service';
import { AddressDTO } from '../../api/address-dto';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {
  data!: Address
  formGroup!: FormGroup;

  constructor(private config: DynamicDialogConfig, private ref: DynamicDialogRef, private fb: FormBuilder, private cepService: CepService) {
    if(this.config.data) {
      this.data = this.config.data
    } else {
      this.data = {
        user_id: 0,
        name: '',
        postal_code: '',
        street: '',
        locality: '',
        city: '',
        region: '',
        region_code: '',
        number: '',
        main: false
      }
    }

    this.formGroup = this.buildFormGroup();
  }

  private buildFormGroup(): FormGroup {
    return this.fb.group({
      name: [this.data.name, [Validators.required]],
      postal_code: [this.data.postal_code, [Validators.required]],
      street: [{value: this.data.street, disabled: true}, [Validators.required]],
      locality: [{value: this.data.locality, disabled: true}, [Validators.required]],
      city: [{value: this.data.city, disabled: true}, [Validators.required]],
      region: [{value: this.data.region, disabled: true}, [Validators.required]],
      region_code: [{value: this.data.region_code, disabled: true}, [Validators.required]],
      number: [this.data.number, [Validators.required]],
      complement: [this.data.complement, []],
      main: [this.data.main, []]
    })
  }

  get name() {
    return this.formGroup.get('name');
  }

  get postal_code() {
    return this.formGroup.get('postal_code');
  }

  get street() {
    return this.formGroup.get('street');
  }

  get number() {
    return this.formGroup.get('number');
  }

  get locality() {
    return this.formGroup.get('locality');
  }

  get complement() {
    return this.formGroup.get('complement');
  }

  get city() {
    return this.formGroup.get('city');
  }

  get region() {
    return this.formGroup.get('region');
  }

  get region_code() {
    return this.formGroup.get('region_code');
  }

  get main() {
    return this.formGroup.get('main');
  }

  getAddresByCep(): void {
    if (!this.postal_code?.value) {
      return;
    }

    this.cepService.getAddresByCep(this.postal_code.value).subscribe({
      next: (res: AddressDTO) => {
        this.formGroup.patchValue({
          street: res.street,
          locality: res.locality,
          city: res.city,
          region_code: res.region_code
        })
      },
      error: () => {
        this.formGroup.patchValue({
          street: '',
          locality: '',
          city: '',
          region_code: '',
          postal_code: ''
        })
      }
    })
  }

  convertFormToObject() {
    this.data.name = this.name.value;
    this.data.postal_code = this.postal_code.value;
    this.data.street = this.street.value;
    this.data.number = this.number.value;
    this.data.complement = this.complement.value;
    this.data.locality = this.locality.value;
    this.data.city = this.city.value;
    this.data.region = this.city.value;
    this.data.region_code = this.region_code.value;
    this.data.main = this.main.value;
  }

  close(data?: Address) {
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
