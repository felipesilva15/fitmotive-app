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
}
