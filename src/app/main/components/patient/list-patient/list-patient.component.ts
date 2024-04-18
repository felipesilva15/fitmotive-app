import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { User } from 'src/app/main/api/user';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrl: './list-patient.component.scss'
})
export class ListPatientComponent {
  patients: User[] = [];
  selectedPatients: User[] = [];
  cols: any[] = [];

  constructor() {}

  ngOnInit() {
    const patient: User = {
      id: 1,
      name: 'Felipe',
      email: 'felipe@gmail.com',
      cpf_cnpj: '52685654210',
      birth_date: '2003-08-15',
      inactive: false,
      service_price: 149.90,
      created_at: '2024-04-14',
      updated_at: '2024-04-14'
    }

    this.patients.push(patient);

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Nome' },
      { field: 'service_prive', header: 'Serviço' },
      { field: 'cpf_cnpj', header: 'CPF/CNPJ' },
      { field: 'birth_date', header: 'Dt. Aniversário' }
  ];
  }
}
