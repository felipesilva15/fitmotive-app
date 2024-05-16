import { Component, ViewChild } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { Patient } from 'src/app/main/api/patient';
import { CustomDynamicDialogService } from 'src/app/main/service/custom-dynamic-dialog.service';
import { PatientService } from 'src/app/main/service/patient.service';
import { ProviderService } from 'src/app/main/service/provider.service';
import { GenerateChargeComponent } from '../../charge/generate-charge/generate-charge.component';

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
  selectedRecord!: Patient;
  recordMenuItems!: MenuItem[];
  @ViewChild('recordMenu') recordMenu: Menu;

  constructor(private providerService: ProviderService, private patientService: PatientService, private messageService: MessageService, private confirmationService: ConfirmationService, private customDynamicDialogService: CustomDynamicDialogService) {}

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

    this.recordMenuItems = [
      {
        label: 'Gerar cobrança', 
        icon: 'pi pi-fw pi-money-bill',
        command: (event) => {
          this.openGenerateChargeDialog(this.selectedRecord);
        }
      }
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
          summary: 'Sucesso', 
          detail: 'Registros deletados.', 
          life: 5000 
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
              summary: 'Sucesso', 
              detail: 'Registro deletado.', 
              life: 5000 
            });
          }
        );
      }
    });
  }

  openRecordMenu(event: Event, record: Patient) {
    this.selectedRecord = record;
    this.recordMenu.toggle(event);
  }

  openGenerateChargeDialog(data?: Patient) {
    console.log(data);

    this.customDynamicDialogService.openDialog<Patient>(GenerateChargeComponent, 'Gerar cobrança', data).then(
      (res: Patient) => {
        if (!res) {
          return;
        }

        this.messageService.add({
          severity: 'success', 
          summary: 'Sucesso', 
          detail: 'Cobrança gerada.', 
          life: 5000 
        });
      }
    );
  }
}
