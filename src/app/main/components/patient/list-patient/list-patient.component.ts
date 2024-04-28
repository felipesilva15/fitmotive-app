import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { tap } from 'rxjs';
import { Patient } from 'src/app/main/api/patient';
import { User } from 'src/app/main/api/user';
import { PatientService } from 'src/app/main/service/patient.service';
import { ProviderService } from 'src/app/main/service/provider.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrl: './list-patient.component.scss'
})
export class ListPatientComponent {
  records: Patient[] = [];
  selectedRecords: Patient[] = [];
  cols: any[] = [];
  isLoading: boolean = true;
  deleteConfirmed: boolean = false;

  constructor(private providerService: ProviderService, private patientService: PatientService, private messageService: MessageService, private confirmationService: ConfirmationService) {}

  ngOnInit() {
    this.providerService.listPatients().subscribe(
      (data: Patient[]) => {
        this.records = data;

        this.records.forEach((record) => {
          record.birth_date = new Date(<Date>record.birth_date);
        });

        this.isLoading = false;
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

  deleteSelectedRecords(event: Event): void {
    this.confirmationService.confirm({
      key: 'confirmDeleteDialog',
      target: event.target || new EventTarget,
      message: `Deseja mesmo deletar os registros selecionados?`,
      icon: 'pi pi-exclamation-triangle',
      header: 'Atenção',
      acceptIcon:"none",
      rejectIcon:"none",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
        this.selectedRecords.forEach(record => {
          this.patientService.delete(record.id).subscribe(
            () => {
              this.records = this.records.filter(val => val.id !== record.id);
            }
          );
        });

        this.messageService.add({
          severity: 'success', 
          summary: 'Successful', 
          detail: 'Registros deletados', 
          life: 3000 
        });
      }
    });
  }

  deleteRecord(event: Event, record: any): void {
    this.confirmationService.confirm({
      key: 'confirmDeleteDialog',
      target: event.target || new EventTarget,
      message: `Deseja mesmo deletar o registro de ID <b>${record.id}</b>?`,
      icon: 'pi pi-exclamation-triangle',
      header: 'Atenção',
      acceptIcon:"none",
      rejectIcon:"none",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
        this.patientService.delete(record.id).subscribe(
          () => {
            this.records = this.records.filter(val => val.id !== record.id);
            this.messageService.add({
              severity: 'success', 
              summary: 'Successful', 
              detail: 'Registro deletado', 
              life: 3000 
            });
          }
        );
      }
    });
  }
}
