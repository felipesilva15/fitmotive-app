import { Component } from '@angular/core';
import { Exercice } from '../../api/exercice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrl: './exercice.component.scss'
})
export class ExerciceComponent {
  data!: Exercice;
  formGroup!: FormGroup;

  constructor(private config: DynamicDialogConfig, private ref: DynamicDialogRef, private fb: FormBuilder) {
    if(this.config.data) {
      this.data = this.config.data;
    } else {
      this.data = {
        workout_id: 0,
        name: '',
        series: null,
        repetitions: null,
        description: ''
      };
    }

    this.formGroup = this.buildFormGroup();
  }

  private buildFormGroup(): FormGroup {
    return this.fb.group({
      name: [this.data.name, [Validators.required, Validators.maxLength(40)]],
      series: [this.data.series, [Validators.required]],
      repetitions: [this.data.repetitions, [Validators.required]],
      description: [this.data.description, []]
    });
  }

  get name() {
    return this.formGroup.get('name');
  }

  get series() {
    return this.formGroup.get('series');
  }

  get repetitions() {
    return this.formGroup.get('repetitions');
  }

  get description() {
    return this.formGroup.get('description');
  }

  convertFormToObject() {
    this.data.name = this.name.value;
    this.data.series = this.series.value;
    this.data.repetitions = this.repetitions.value;
    this.data.description = this.description.value;
  }

  close(data?: Exercice) {
    this.ref.close(data);
  }

  submit(): void {
    if (!this.formGroup.valid) {
      return;
    }

    this.convertFormToObject();
    this.close(this.data);
  }
}
