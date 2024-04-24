import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { Phone } from '../../api/phone';
import { PhoneTypeEnumOptions } from '../../enum/phone-type-enum';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss'
})
export class PhoneComponent {
  data!: Phone;
  phoneTypeEnumOptions: Array<any> = PhoneTypeEnumOptions;

  constructor(private config: DynamicDialogConfig, private ref: DynamicDialogRef) { }

  ngOnInit() {
    this.data = {
      user_id: 0,
      country: '',
      ddd: '',
      number: '',
      type: null,
      main: false,
      created_at: '',
      updated_at: ''
    }
  }

  close(data?: Phone) {
    this.ref.close(data);
  }
}
