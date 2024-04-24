import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { Phone } from '../../api/phone';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss'
})
export class PhoneComponent {
  data!: Phone;

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

  close() {
    this.ref.close(this.data);
  }
}
