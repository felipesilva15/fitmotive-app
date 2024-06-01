import { Location } from '@angular/common';
import { WorkoutService } from './../../../service/workout.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Exercice } from 'src/app/main/api/exercice';
import { Workout } from 'src/app/main/api/workout';
import { AuthService } from 'src/app/main/service/auth.service';
import { CustomDynamicDialogService } from 'src/app/main/service/custom-dynamic-dialog.service';
import { ExerciceComponent } from '../../exercice/exercice.component';

@Component({
  selector: 'app-form-workout',
  templateUrl: './form-workout.component.html',
  styleUrl: './form-workout.component.scss'
})
export class FormWorkoutComponent {
  data!: Workout;
  formGroup!: FormGroup;
  isLoading: boolean = false;
  isSubmitting: boolean = false;
  paramId: number;

  constructor(
    private workoutService: WorkoutService, 
    private location: Location, 
    private customDynamicDialogService: CustomDynamicDialogService, 
    private fb: FormBuilder, 
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
    this.paramId = parseInt(this.activatedRoute.snapshot.paramMap.get('id') ?? '');
    
    this.data = {
      provider_id: this.authService.provider_id,
      name: '',
      description: '',
      exercices: []
    };
    
    this.formGroup = this.buildFormGroup();

    if (this.paramId) {
      this.loadData();
    }
  }

  private buildFormGroup(): FormGroup {
    return this.fb.group({
      name: [this.data.name, [Validators.required, Validators.maxLength(40)]],
      exercices_count: [{value: null, disabled: true}, []],
      description: [this.data.description, []]
    });
  }

  loadData(): void {
    this.isLoading = true;

    this.workoutService.get(this.paramId).subscribe({
      next: (res: Workout) => {
        this.data = res;

        this.formGroup.patchValue({
          name: this.data.name,
          description: this.data.description
        });

        this.updateExercicesCount();

        this.isLoading = false;
      }
    });
  }

  get name() {
    return this.formGroup.get('name');
  }

  get description() {
    return this.formGroup.get('description');
  }

  get exercices_count() {
    return this.formGroup.get('exercices_count');
  }

  convertFormToObject(): void {
    this.data.name = this.name.value;
    this.data.description = this.description.value;
  }

  validateItems(): boolean {
    if (this.data.exercices.length <= 0) {
      this.customDynamicDialogService.showMessage('Informe pelo menos um exercício para prosseguir!');
      return false;
    }

    return true;
  }

  submit(): void {
    this.formGroup.markAllAsTouched();

    if (!this.formGroup.valid) {
      this.scrollTop();

      return;
    }

    if (!this.validateItems()) {
      return;
    }

    this.isSubmitting = true;

    this.convertFormToObject();
    
    if (this.paramId) {
      this.update();
    } else {
      this.create();
    }
  }

  scrollTop(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  create(): void {
    this.workoutService.create(this.data).subscribe({
      next: () => {
        this.backPage();
      },
      error: () => {
        this.isSubmitting = false;
      }
    });
  }

  update(): void {
    this.workoutService.update(this.data, this.paramId).subscribe({
      next: () => {
        this.backPage();
      },
      error: () => {
        this.isSubmitting = false;
      }
    });
  }

  backPage(): void {
    this.location.back();
  }

  openExerciceDialog(data?: Exercice, index?: number) {
    this.customDynamicDialogService.openDialog<Exercice>(ExerciceComponent, 'Exercício', data).then(
      (res: Exercice) => {
        if (!res) {
          return;
        }

        if (index || index === 0) {
          this.data.exercices[index] = res;
        } else {
          this.data.exercices.push(res);
        }

        this.updateExercicesCount();
      }
    );
  }

  removeExercice(index: number): void {
    this.data.exercices.splice(index, 1);
    this.updateExercicesCount();
  }

  updateExercicesCount(): void {
    this.formGroup.patchValue({
      exercices_count: this.data.exercices.length
    });
  }
}
