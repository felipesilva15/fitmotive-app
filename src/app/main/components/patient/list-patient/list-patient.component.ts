import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { tap } from 'rxjs';
import { Patient } from 'src/app/main/api/patient';
import { User } from 'src/app/main/api/user';
import { ProviderService } from 'src/app/main/service/provider.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrl: './list-patient.component.scss'
})
export class ListPatientComponent {
  patients: Patient[] = [];
  selectedPatients: Patient[] = [];
  cols: any[] = [];
  isLoading: boolean = true;

  constructor(private providerService: ProviderService) {}

  ngOnInit() {
    this.providerService.listPatients(1).subscribe(
      (data: Patient[]) => {
        this.patients = data;
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
        alert("Ocorreu um erro ao carregar pacientes...");
      }
    );

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Nome' },
      { field: 'service_prive', header: 'Servico' },
      { field: 'cpf_cnpj', header: 'CpfCnpj' },
      { field: 'birth_date', header: 'DtAniversario' }
    ];
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
