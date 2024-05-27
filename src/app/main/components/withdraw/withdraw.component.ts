import { FinancialTransactionService } from './../../service/financial-transaction.service';
import { Component } from '@angular/core';
import { FinancialDashboard } from '../../api/financial-dashboard';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BankStatement } from '../../api/bank-statement';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.scss'
})
export class WithdrawComponent {
  data!: BankStatement;
  formGroup!: FormGroup;
  isSubmitting: boolean = false;

  constructor(private config: DynamicDialogConfig, private ref: DynamicDialogRef, private fb: FormBuilder, private financialTransactionService: FinancialTransactionService) {
    if(this.config.data) {
      this.data = this.config.data;
    }

    this.formGroup = this.buildFormGroup();
  }

  private buildFormGroup(): FormGroup {
    return this.fb.group({
      balance: [{value: this.data.totalizers.current_balance, disabled: true}, []],
      amount: [null, [Validators.required, Validators.min(0.01), Validators.max(this.data.totalizers.current_balance)]],
    })
  }

  get balance() {
    return this.formGroup.get('balance');
  }

  get amount() {
    return this.formGroup.get('amount');
  }

  close(success?: boolean) {
    this.ref.close(success);
  }

  submit() {
    if (!this.formGroup.valid) {
      return;
    }

    this.isSubmitting = true;

    this.financialTransactionService.withdraw(this.amount.value).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.close(true);
      },
      error: () => {
        this.isSubmitting = false;
      }
    });
  }
}
