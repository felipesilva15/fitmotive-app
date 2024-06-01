import { WorkoutService } from './../../../service/workout.service';
import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Workout } from 'src/app/main/api/workout';
import { ProviderService } from 'src/app/main/service/provider.service';

@Component({
  selector: 'app-list-workout',
  templateUrl: './list-workout.component.html',
  styleUrl: './list-workout.component.scss'
})
export class ListWorkoutComponent {
  records: Workout[] = [];
  selectedRecords: Workout[] = [];
  cols: any[] = [];
  isLoading: boolean = true;
  deleteConfirmed: boolean = false;

  constructor(private providerService: ProviderService, private workoutService: WorkoutService, private messageService: MessageService, private confirmationService: ConfirmationService) {}

  ngOnInit() {
    this.loadData();

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Nome' },
      { field: 'exercices.lenght', header: 'QtdExercicios' },
    ];
  }

  loadData(): void {
    this.providerService.listWorkouts().subscribe(
      (data: Workout[]) => {
        this.records = data;

        this.isLoading = false;
      }
    );
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
          this.workoutService.delete(record.id).subscribe(
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
        this.workoutService.delete(record.id).subscribe(
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
}
